import { createContext, CSSProperties, useContext } from "react";

// json config object ----------------------------------------------------------------

export type signalType = "=" | "contains" | "equal" | "<" | ">" | "<>" | ">=" | "<="
export type filterTextType = "text" | "number" | "date" | "boolean"
export type fielValueType = "amount" | "date" | "longText"

export interface IFilter {
    signal: signalType // sign to which the value will be filtered
    param: string // parameter of the column to be filtered
    type: filterTextType // column parameter to be filtered (change the simple filter for each type)
    value?: string | number // value it will have in memory when using (gridContext)
    groupSignal?: "and" | "or", // signal indicating whether an item is to be filtered by displaying its grouped values
}

export interface ITheadGrid {
    label: string;
    param: string;
    style?: CSSProperties
    isAction?: boolean;
    isSearch?: boolean;
    canSort?: boolean;
    hiddeColumn?: boolean;
    filter?: IFilter;
    thComponent?: JSX.Element
    gridfieldValue?: fielValueType

    cellStyle?: CSSProperties
}

// grid props ----------------------------------------------------------------

export interface IContextState {
    url: string
    thead: ITheadGrid[]

    urlGrouperFetch?: string
}

export interface IGrid extends IContextState {
    children: JSX.Element
    withoutTopActions?: boolean
    withoutBottomActions?: boolean
    gridOptions?: JSX.Element
    defaultPagination?: IPagination
    withHandleColumnsVisibility?: boolean
    withHandleSorting?: boolean
}

// context function  ----------------------------------------------------------------

export interface IGridFunction {
    changeLimit: (num: number) => void
    changePage: (num: number) => void
    sortByParam: (param: string, desc: boolean) => void
    showFilterColumn: (param: string) => void
    simpleSetFilter: (param: string, signal: signalType, type: filterTextType, value?: string | number) => void
    intervalSetFilter: (newFilters: IFilter[]) => void
    changeAsideColumnValue: () => void
    setTheadHiddenValue: (column: ITheadGrid, value: boolean) => void
    setRowToExpand: (rowId: string) => void
    setCurrentMetadaPagination: (meta: IMetaDataPagination) => void

    grouperSetFilter: (newFilters: IFilter) => void

    removeSorting: (param: string) => void
}

// context state   ----------------------------------------------------------------

export interface ISortType {
    desc: boolean
    selector: string
    [key: string]: boolean | string
}

export interface IPagination {
    limit?: string
    page?: string
    route?: string
    filt?: IFilter[]
    group?: string
    sort?: ISortType[]
    [key: string]: string | undefined | ISortType[] | IFilter[]
}

export interface IPaginationFilterDto {
    route?: string
    page: number
    limit: number
    filt?: string
    group?: string
    sort?: string
    tag?: string
}

export interface IMetaDataPagination {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    __typename?: string;
}

export interface IGridContext extends IContextState, Partial<IGridFunction> {
    paramActionsActive?: string
    pagination?: IPagination
    currentFilterColumnOpen?: string
    showAsideColumnHandler?: boolean
    rowExpanded?: string
    metaDataPagination?: IMetaDataPagination
}

export const GridContext = createContext<IGridContext>({ url: "", thead: [] });
export const useGridContext = () => useContext(GridContext) as IGridContext & IGridFunction