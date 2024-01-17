import { GridContext, IContextState, IGrid, IPagination, useHandleGridContext } from "./context"
import { GridFooter } from "./FooterGrid";
import { useRef } from "react";
import GridThead from "./TheadGrid"
import styles from "./grid.module.css";
import { HandleColumnsVisibility, QuickSearchGrid } from "./TheadGrid/actions";
import { NavigationOverflowScroll, ThFilteringList, TopListActions } from "./TheadGrid/actions/TopTheadActions";

/**
 * component that allows paging and returns the component's status through a hook.
 * @param {IGrid} props
 * @returns 
 */
export const Grilla = ({ url, urlGrouperFetch: urlRestFetch, thead, children, withoutTopActions, withoutBottomActions, gridOptions, defaultPagination, withHandleColumnsVisibility = false, withHandleSorting = true }: IGrid) => {
    const tableRef = useRef<HTMLTableElement>(null);

    return (
        <GrillaProvider urlGrouperFetch={urlRestFetch} thead={thead} url={url} pagination={defaultPagination}>
            <>
                {/*--------------------------- main search input --------------------------- */}
                {
                    !withoutTopActions ? (
                        <div className={styles.top__actions__wrapper}>
                            <QuickSearchGrid /> {/* search input*/}
                            {withHandleColumnsVisibility && <HandleColumnsVisibility />}
                            {gridOptions && <TopListActions children={gridOptions} />}
                        </div>
                    ) : null
                }

                <div className="flex justify-between">
                    {
                        withHandleSorting ? <ThFilteringList /> : (null)
                    }

                    <NavigationOverflowScroll a="a" ref={tableRef} />

                </div>

                {/*--------------------------- tbody children --------------------------- */}
                <div ref={tableRef} className={styles.grid__wrapper__style} data-table="true">
                    <table className={styles.grid__style}>
                        <GridThead />
                        {children}
                    </table>
                </div>

                {/*--------------------------- footer / pagination --------------------------- */}
                {!withoutBottomActions ? (
                    <div className={styles.top__actions__wrapper}>
                        <GridFooter />
                    </div>
                ) : null}
            </>
        </GrillaProvider>
    )
}

const GrillaProvider = ({ thead, url, urlGrouperFetch: urlRestFetch, children, pagination }: IContextState & { children: JSX.Element, pagination?: IPagination }) => {
    const gridState = useHandleGridContext({ url, urlGrouperFetch: urlRestFetch, thead, pagination })

    return (
        <GridContext.Provider value={gridState}>
            {children}
        </GridContext.Provider>
    )
}