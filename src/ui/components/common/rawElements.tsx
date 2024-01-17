import Lottie from "lottie-react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import styles from './common.module.css'
import { useQuery } from "react-query"
import Cookies from "js-cookie"
import { AiOutlineDownload } from "react-icons/ai"
import { downloadFile, downloadImageFromBlob } from "@services/utility"
import animationError from '@utils/animation/lotties/animation_error.json'


type verticalDirection = "top" | "bottom" | "center"
type horizontalDirection = "left" | "right" | "center"


interface IBasicTooltip {
    children: JSX.Element,
    content: JSX.Element,
    verticalDirection?: verticalDirection,
    horizontalDirection?: horizontalDirection,
    left?: string,
    aditionalBoolean?: boolean
    classNameDivContainer?: string
}

const verticalStyles: Record<verticalDirection, { top: string }> = {
    "center": {
        top: "0px"
    },
    "bottom": {
        top: "30px"
    },
    "top": {
        top: "-70px"
    }
}

const horizontalStyles: Record<horizontalDirection, { left: string, translateX: string }> = {
    "center": {
        left: "50%",
        translateX: "transform: translateX(-50%)"
    },
    "right": {
        left: "100%",
        translateX: "transform: translateX(0)"
    },
    "left": {
        left: "0px",
        translateX: "transform: translateX(-100%)"
    }

}

export const BasicTooltip = ({ children, content, verticalDirection = "top", left, aditionalBoolean = false, horizontalDirection = "center", classNameDivContainer }: IBasicTooltip) => {
    const [openDialog, setOpenDialog] = useState(false)


    return (
        <div
            className={classNameDivContainer}
            style={{ position: "relative" }}
            onMouseLeave={() => { setOpenDialog(false) }}
            onMouseEnter={() => { setOpenDialog(true) }}
        >

            <AnimatePresence>
                {(openDialog || aditionalBoolean) ? (
                    <motion.dialog
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className={styles.tooltip__content__container}
                        open={openDialog || aditionalBoolean}

                        style={{
                            top: verticalStyles[verticalDirection].top,
                            left: horizontalStyles[horizontalDirection].left,
                            translateX: horizontalStyles[horizontalDirection].translateX,
                        }}
                    >
                        {content}</motion.dialog>
                ) : (
                    null
                )}
            </AnimatePresence>

            {children}
        </div>
    )
}


export const LazyImage = ({ url, imgName, customClass }: { url: string, imgName: string, customClass?: string }) => {
    const { data, isLoading, error } = useQuery({
        queryKey: [`image-${url}`],
        queryFn: async () => {
            const tokenCookie = Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)
            const headers = new Headers({
                Authorization: "Bearer " + tokenCookie,
            });

            const response = await fetch(url, {
                method: "GET",
                headers: headers,
              })

            const blob = await response.blob();

            return blob
        }
    })

    if (isLoading) return <div className="skeleton__loading min-h-[300px] min-w-[350px] rounded-lg"/>
    if (error) return <div className="min-h-[300px] min-w-[350px] rounded-lg flex flex-col justify-center items-center">
        <Lottie className="w-1/2" animationData={animationError} loop={false} />
        <p>¡Oops, hubo un error al consultar el archivo!</p>
    </div>
    const blobUrl = URL.createObjectURL(data!);

    return (
        <>
            <div className={`relative rounded-l overflow-hidden rounded-b-lg ${customClass}`}>
                <img className="w-full bg-cover bg-no-repeat rounded-lg" src={blobUrl} />
                <div className="absolute flex flex-col md:flex-row items-center justify-between bottom-0 w-full px-2 py-3 backdrop-blur-sm backdrop-grayscale-0 bg-black/30 border-t-[0.5px] border-slate-100 rounded-b-lg hover:py-4 transition-all">
                    <p className="text-white text-sm md:text-base">{imgName}</p>
                    {/* <AiOutlineDownload onClick={() => { downloadFile(data!, "pdf", imgName) }} className="fill-white cursor-pointer" /> */}
                    <AiOutlineDownload onClick={() => { downloadImageFromBlob(data!, imgName) }} className="fill-white cursor-pointer" />
                </div>
            </div>
        </>
    )
}