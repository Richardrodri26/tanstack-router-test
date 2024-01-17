import { AnimatePresence } from "framer-motion"
import { useMemo } from "react"
import { AscSortIcon, DescSortIcon } from "@utils/Icons"
import { useIsSortingColumn } from "@grilla/hooks"
import { ITheadGrid, useGridContext } from "../../context"

/*----------------------------------------- interfaces -----------------------------------------*/


/*----------------------------------------- hooks ------------------------------------------------*/

export const useSortAction = (currentTh: ITheadGrid ) => {
    const { sortByParam, pagination } = useGridContext()

    const sortByParamMemoized = useMemo(() => {
        if(!currentTh.canSort) return undefined 
        let ascState: boolean | undefined, descState: boolean | undefined
        const sort = pagination?.sort
        const hasSorting = sort?.find((item) => item.selector === currentTh.param )

        if (sort && hasSorting) {
            if (hasSorting.desc) {
                ascState = false
            } else {
                ascState = true
            }
        }

        return  {
            sortByParam: () => sortByParam(currentTh.param, ascState ?? false),
            ascState
        }

    }, [pagination?.sort, currentTh])

    return { sortAction: sortByParamMemoized?.sortByParam , ascState: sortByParamMemoized?.ascState }
}

/*----------------------------------------- components -----------------------------------------*/
/**
 * Action than set the order configuration of the grid
 * @param {ISortProps} props name column 
 * @returns 
 */
export const SortActionsByIcon = ({ currentTh }: { currentTh: ITheadGrid }) => {
    const { isSorting } = useIsSortingColumn(currentTh.param)
    const { sortAction, ascState } = useSortAction(currentTh)

    return (
        <>
            {
                ((ascState)) ? (
                    <AnimatePresence>
                        <AscSortIcon onFunc={sortAction} className={`${isSorting ? "fill-primary" : "fill-border-color"} my-auto cursor-pointer`} />
                    </AnimatePresence>
                ) : (
                    <AnimatePresence>
                        <DescSortIcon onFunc={sortAction} className={`${isSorting ? "fill-primary" : "fill-border-color"} my-auto cursor-pointer`}/>
                    </AnimatePresence>
                )
            }
        </>
    )
}

