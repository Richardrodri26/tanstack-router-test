import { useMemo, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { SortActionsByIcon, useSortAction } from "./actions/SortActions";
import styles from '../grid.module.css';
import { useIsColumnInAction, useIsSortingColumn } from "../hooks";
import { FiltersActions } from "./actions";
import { ITheadGrid, useGridContext } from "../context"
import { gridColumnAnimation } from "./grid.animation";
import { AiOutlineSearch } from "react-icons/ai";

/**
 * Component that displays the columns of the grid
 * @returns 
 */
const GridThead = () => {
    const thead = useGridContext().thead

    const lastColumn = useMemo(() => {
        return thead.filter((columns) => !columns.hiddeColumn).at(-1)!
    }, [thead])

    return (
        <thead>
            <tr>
                {thead.map((th, index) => (
                    <ThContent currentTh={th} isLastChild={lastColumn.param === th.param} hiddenColumn={Boolean(th.hiddeColumn)} key={index} />
                ))}
            </tr>
        </thead>
    )
}

/**
 * Column header component than receive a configuration and displays the name and the actions on it
 * @param {ITheadGrid, boolean, boolean} props column configuration added into grid
 * @returns 
 */
const ThContent = ({ currentTh, isLastChild, hiddenColumn }: { currentTh: ITheadGrid, isLastChild: boolean, hiddenColumn: boolean }) => {
    // hooks
    const currentFilterColumnOpen = useGridContext().currentFilterColumnOpen
    const { isSorting } = useIsSortingColumn(currentTh.param)
    const { sortAction } = useSortAction(currentTh)

    const thAnimation = useMemo(() => {
        if (hiddenColumn) return "hiddenColumn"

        return "showColumn"
    }, [hiddenColumn])

    const ref = useRef<HTMLDivElement>(null)

    return (
        <motion.th className={` ${(currentTh.canSort)  ? "hover:bg-primary-opacity" : ""} ${isSorting ? "bg-primary-opacity" : ""}`} style={currentTh.style} data-action={Boolean(currentTh.isAction)} animate={thAnimation} variants={gridColumnAnimation}>
            <div className={styles.thead__content} ref={ref} style={currentTh.thComponent ? { margin: "auto" } : currentTh.style} data-type={currentTh.gridfieldValue}>

                {
                    !currentTh.label ? (
                        currentTh.thComponent ?? <></>
                    ) : (
                        <p onClick={sortAction} className={`${currentTh.canSort ? "hover:underline hover:cursor-pointer" : ""}`} >{currentTh.label}</p>
                    )
                }

                {currentTh.canSort && (
                    (currentTh.canSort) ? <SortActionsByIcon currentTh={currentTh} /> : null
                )}

                {!(currentTh.isAction) && (Boolean(currentTh.filter)) && (
                    <>
                        {/* <TheadActionsMenu columnParam={currentTh.param} /> */}
                        <TheadActionsButton columnParam={currentTh.param} />

                        <AnimatePresence>
                            {(currentFilterColumnOpen === currentTh.param) ? (

                                <LayoutTheadAction isLastChild={isLastChild}>
                                    <>
                                        {currentTh.filter ? <FiltersActions label={currentTh.label} filter={currentTh.filter} /> : null}
                                        {/* {(currentTh.filter?.groupSignal) ? <GrouperActions label={currentTh.label} filter={currentTh.filter} /> : null} */}
                                    </>
                                </LayoutTheadAction>

                            ) : (null)}
                        </AnimatePresence>
                    </>
                )}
            </div>
        </motion.th>
    )
}

/**
 * Render the menu action on the grid
 * @param {string} props column param
 * @returns 
 */
export const TheadActionsButton = ({ columnParam }: { columnParam: string }) => {

    const showFilterColumn = useGridContext().showFilterColumn
    const { isInAction } = useIsColumnInAction(columnParam)

    return (
        <svg data-active={isInAction} className={styles.grid__svg__action__button + " ml-2"} strokeWidth="0" viewBox="0 0 512 512" onClick={(event) => { event.stopPropagation(); showFilterColumn(columnParam) }}>
            <path d="M128 192l128 128 128-128z"></path>
        </svg>
    )
}

/**
 * Render the menu action on the grid
 * @param {string} props column param
 * @returns 
 */
export const TheadActionsMenu = ({ columnParam }: { columnParam: string }) => {

    const showFilterColumn = useGridContext().showFilterColumn
    const { isInAction } = useIsColumnInAction(columnParam)

    return (
        <>

           <AiOutlineSearch
            onClick={(event) => {
                event.stopPropagation()
                showFilterColumn(columnParam)
            }} 
            className={`${isInAction ? "rounded-none fill-primary-contrary" : "!fill-border-color "}  p-0 ml-2 hover:fill-primary mt-auto h-5 w-5 rounded-lg my-auto cursor-pointer transition-all `} />
        </>
    )
}

/**
 * Wrapper menu grid actions
 * @param isLastChild 
 * @param children
 * @returns 
 */
export const LayoutTheadAction = ({ isLastChild, children }: { isLastChild: boolean, children: JSX.Element }) => {
    const ref = useRef<HTMLDivElement>(null)

    return (
        <motion.div className={styles.thead__actions} style={{ left: ((ref.current?.clientWidth ?? 0) - 55) }}
            initial={{ opacity: 0, y: 0, x: (isLastChild ? "-34%" : 0) }}
            exit={{ opacity: 0, y: 15, x: (isLastChild ? "-34%" : 0) }}
            animate={{ opacity: 1, y: 28, x: (isLastChild ? "-34%" : 0) }}>
            {children}
        </motion.div>
    )
}

export default GridThead