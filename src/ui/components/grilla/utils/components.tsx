import { useMemo, } from "react";
import { Variants, motion } from "framer-motion";
import { BasicTooltip } from "@common/rawElements";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SwitchButton } from "@ui/utils/animation/framerSwitch";
import { LayoutTheadAction, TheadActionsButton, TheadActionsMenu } from "../TheadGrid";
import styles from "@grilla/grid.module.css"
import { useGridContext } from "../context";
import { useGetTextFilterByParam } from "../hooks";

export const gridContainerAnimation: Variants = {
    hidden: { opacity: 0, height: 0 },
    show: {
        height: "auto",
        opacity: 1,
        transition: {
            when: "beforeChildren",
            delayChildren: 0.05,
            staggerChildren: 0.1,
            height: { duration: 0.1 },
        },
    },
    exit: { opacity: 0, transition: { duration: 0.1, when: "afterChildren" } }
}


const trAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 }
}

/**
 * util loading component from the Grilla
 */
export const UtilLoadingTbody = () => {
    const thead = useGridContext().thead

    const TdSkeleton = useMemo(() => {
        let tr = thead.map((_, index) => (
            <td key={index} style={{ paddingBlock: 0 }}><div className="skeleton__loading" style={{ width: "100%", height: 25 }} /></td>
        ))
        return ([...tr])
    }, [thead])

    return (
        <motion.tbody variants={gridContainerAnimation} animate="show" initial="hidden" exit="exit">
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
            <motion.tr variants={trAnimation}>{TdSkeleton}</motion.tr>
        </motion.tbody>
    )
}

/**
 * util error component from the Grilla
 * @param errMsn {string} msn error to show 
 * @returns 
 */
export const UtilErrorTbody = ({ errMsn }: { errMsn: string }) => {
    return (
        <motion.tbody variants={gridContainerAnimation} animate="show" initial="hidden" exit="exit">
            <motion.tr variants={trAnimation} style={{ position: "relative", height: 150 }}>
                <td>
                    <h4 style={{ color: "red", width: "100%", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                        ¡Oops hubo un error! por favor intentelo más tarde
                    </h4>
                </td>
            </motion.tr>
        </motion.tbody>
    )
}

/**
 * util layout empty data component from the Grilla
 * @param children {JSX.Element} msn to show
 * @returns 
 */
export const UtilLayoutEmptyDataTbody = ({ title = "Oops, ¡no se encontraron datos!", children }: { title?: string, children?: React.ReactNode }) => {
    return (
        <motion.tbody variants={gridContainerAnimation} animate="show" initial="hidden" exit="exit">
            <motion.tr variants={trAnimation} style={{ position: "relative", height: 150 }}>
                <td style={{ position: "absolute", left: "55%", transform: "translateX(-55%)" }}>
                    <div className="inline-flex m-auto justify-center gap-20 py-5">
                        <img src="/NonData.png" alt="non" />
                        <div className="w-[clamp(380px, 50%, 600px)] flex flex-col justify-center gap-3">
                            <h3 className="text-xl font-bold" >{title}</h3>
                            {children}
                        </div>
                    </div>
                </td>
            </motion.tr>
        </motion.tbody>
    )
}

/**
 * Component that filter a param by an state (Boolean)
 * @param paramToFilter 
 * @param label
 * @returns 
 */
export const ThSwitchState = ({ paramToFilter, label }: { paramToFilter: string, label: string }): JSX.Element => {
    const { simpleSetFilter, currentValue } = useGetTextFilterByParam(paramToFilter)
    const currentFilterColumnOpen = useGridContext().currentFilterColumnOpen

    const booleanValueMemoized = useMemo(() => {
        return currentValue == "true"
    }, [currentValue])


    const changeFiltValue = () => {
        simpleSetFilter(paramToFilter, "contains", "text", `${!booleanValueMemoized}`)
    }

    return (
        <>
            <p>{label}</p>
            {/* <TheadActionsMenu columnParam={paramToFilter} /> */}
            <TheadActionsButton columnParam={paramToFilter} />

            {
                currentFilterColumnOpen === paramToFilter ? (
                    <LayoutTheadAction isLastChild={false} >
                        <div className={styles.actions__wrapper} style={{ gap: "10px" }} onClick={() => changeFiltValue()}>
                            <label>Mostrar: {booleanValueMemoized ? "Activos" : "Anulados"}</label>

                            <div className="flex justify-center items-center p-1 hover:bg-stroke-disable transition-colors ease-in-out duration-75 hover:cursor-pointer">
                                <SwitchButton
                                    isOn={booleanValueMemoized}
                                />
                            </div>

                        </div>
                    </LayoutTheadAction>


                ) : (null)
            }
        </>
    )
}

export const ThTooltip = ({ paramToFilter, label }: { paramToFilter: string, label: string }) => {
    const currentFilterColumnOpen = useGridContext().currentFilterColumnOpen

    const isOpenMenuTh = currentFilterColumnOpen === paramToFilter
    return (
        <>
            <p>{ label }</p>

            <BasicTooltip aditionalBoolean={isOpenMenuTh} content={<>a</>} verticalDirection="bottom">
                <TheadActionsButton columnParam={paramToFilter} />
            </BasicTooltip>
            
        </>
    )
}

interface ISortProps { param: string }

export const ThToolTipSortAction = ({ param, label }: ISortProps & { label: string }) => {
    const { sortByParam, pagination } = useGridContext()

    const sortActionsElements = useMemo(() => {
        let ascState, descState
        const sort = pagination?.sort
        const hasSorting = sort?.find((item) => item.selector === param )

        if (sort && hasSorting) {
            if (hasSorting.desc) {
                ascState = false
                descState = true
            } else {
                ascState = true
                descState = false
            }
        }

        return (
            <div className={styles.actions__wrapper} style={{ gap: "10px" }}>
                <label>Ordenar información</label>
                <div className={styles.actions__wrapper}>

                    
                    
                    <div className={styles.row__actions__wrapper} data-active={ascState} onClick={() => sortByParam(param, false)}>
                        <div className={`${ascState ? "rotate-180" : ""}`}>
                            <AiOutlineArrowDown />    
                        </div> 
                        Orden ascendente
                    </div>
                    <div className={styles.row__actions__wrapper} data-active={descState} onClick={() => sortByParam(param, true)}>
                        <div className={`${descState}`}>
                            <AiOutlineArrowDown />    
                        </div> 
                        
                        Orden descendente

                    </div>
                </div>
            </div>
        )

    }, [pagination?.sort, param])

    return <BasicTooltip verticalDirection="bottom" content={sortActionsElements}><div className="flex gap-2"><p>{label}</p><TheadActionsButton columnParam={param} /></div></BasicTooltip>
}