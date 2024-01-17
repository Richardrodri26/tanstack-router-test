import { Variants, motion } from "framer-motion"
import { useFormContext } from "react-hook-form"
import { BiRefresh } from "react-icons/bi"

//------------------- Config ---------------------------------------------
const rotationVariants: Variants = {
    initial: { rotate: 0, },
    animate: {
      opacity: 1,
      rotate: -180,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop"
      }
    },
  };

export const FormButton = ({ btnMsg, className }: { btnMsg?: string, className?: string }) => {
    const { formState: { isValid } } = useFormContext()
    return (
        <button disabled={!isValid} className={`btn ${!isValid ? "bg-primary text-opacity-60" : ""} ${className}`}>{btnMsg ?? "Continuar"}</button>
    )
}
 
export const FormButtons = ({ leftFunc }: { leftFunc: () => void }) => {
    return (
        <div className="flex gap-2 items-center justify-center pb-2">
            <button onClick={() => { leftFunc() }} type="button" className="btn__cancel">Cancelar</button>
            <FormButton />
        </div>
    )
}

export const LoadingButton = ({ text, isLoading }: { text: string, isLoading: boolean }) => {

    return (
        <button disabled={isLoading} className={`flex gap-1 items-center text-white bg-blue-500 px-3 py-1 rounded-lg ${isLoading ? "disabled:bg-blue-700" : ""}`}>
            {
                isLoading ? (
                    <motion.div
                        className="relative w-7 h-7 rounded-full"
                        variants={rotationVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 2, loop: Infinity, ease: "linear" }}
                    >
                        <BiRefresh className=" fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6" />
                    </motion.div>
                ) : (null)
            }

            {
                isLoading ? "Cargando..." : text
            }
        </button>
    )
}