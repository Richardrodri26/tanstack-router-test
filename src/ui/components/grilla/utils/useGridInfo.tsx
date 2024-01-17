import { useMemo } from "react"
import { IFilter, IMetaDataPagination, IPaginationFilterDto, ISortType, ITheadGrid, useGridContext } from "../context"

/**
 * Function than resolve the object filter of the grid into string format for the service
 * @param {IFilter[] | undefined} filt current filter on the grid
 * @param {ITheadGrid[] | undefined} theadConfig current thead config
 * @returns 
 */
const filterAdapter = (filt: IFilter[] | undefined, theadConfig: ITheadGrid[]) => {
    if (filt) {

        if (filt.length === 1) {
            const { param, value, signal } = filt[0]
            return `["${param}", "${signal}", "${value}"]`
        }

        let currentFilt: Array<{ isSearch?: boolean } & IFilter> = []

        for (const options of filt) {
            let optionConfig = theadConfig.find(option => (option.param === options.param || option.filter?.param === options.param))!
            currentFilt.push(Object.assign({ isSearch: optionConfig?.isSearch }, options))
        }

        let queryFilt = []

        // -- columns simple filter --

        const simpleAndFilt = currentFilt.filter(filter => filter.groupSignal === undefined)
            .map((search) => `["${search.param}", "${search.signal}", "${search.value}"]`)
            .toString()

        if (simpleAndFilt) queryFilt.push(simpleAndFilt.toString().replaceAll("],[", `],"and",[`))

        // -- columns multiple filter (interval filter, grouper filter) --

        let andFiltersGroupers = currentFilt.filter(filter => (filter.groupSignal && !filter.isSearch))

        const filterGroupers = andFiltersGroupers.reduce((acumulator, current) => {
            let currentParam = current.param;
            const currentAcumulatorPAram = acumulator[currentParam] || [];
            (currentAcumulatorPAram).push(current)
            return acumulator
        }, {} as { [key: string]: IFilter[] })

        for (const filterIterator of Object.values(filterGroupers)) {

            const firstFilter = filterIterator[0]

            if (filterIterator.length > 1) {

                const stringCurrentFilters = filterIterator
                    .map(filter => `["${filter.param}", "${filter.signal}", "${filter.value}"]`)
                    .toString().replaceAll("],[", `],"${firstFilter.groupSignal}",[`)

                queryFilt.push(stringCurrentFilters)
            }

            if (filterIterator.length === 1) queryFilt.push(`["${firstFilter.param}","${firstFilter.signal}","${firstFilter.value}"]`)
        }

        // -- top action input search filter --

        const searchInputFilt = currentFilt.filter(filter => (filter.isSearch))
            .map((search) => `["${search.param}","${search.signal}","${search.value}"]`)

        if (searchInputFilt.length > 1 && queryFilt.length > 0) {
            queryFilt.push(`[${searchInputFilt.toString().replaceAll("],[", `],"or",[`)}]`)
        }
        else if (searchInputFilt.length) {
            queryFilt.push(`${searchInputFilt.toString().replaceAll("],[", `],"or",[`)}`)
        }

        return `[${queryFilt.toString().replaceAll("],[", `],"and",[`)}]`
    }
    return ""
}

/**
 * Transform the sort object on the grid into a string for the service
 * @param sort 
 * @returns 
 */
const sortAdapter = (sort: ISortType[] | undefined) => {
    if (sort && sort.length > 0) {
        const sortParams = sort.map((item) => `{"selector": "${item.selector}", "desc": ${item.desc}}`)
        return `[${sortParams}]`
    }
    return ""
}

/**
 * Hook that returns the pagination that has a grid that encompasses it
 * @returns {string, string} query params (page, limit, filt, etc...) manupulated on the grid
 * @example <Grilla...> {useGridInfo} <Grilla/>
 */
export const useGridInfo = () => {
    // context grid
    const { pagination, thead, url, setCurrentMetadaPagination } = useGridContext()

    // columns with grid actions
    const theadWithActions = useMemo(() => {
        return thead.filter((th) => th.isSearch || th.filter)
    }, [thead])

    // rest search params to request pagination or sort and filters
    const queryParams: string = useMemo(() => {
        if (pagination) {
            const { filt, limit, page, sort } = pagination

            const filtServiceAdapter = filterAdapter(filt, theadWithActions)
            const sortServiceAdapter = sortAdapter(sort)

            return url + "?" + new URLSearchParams({
                filt: filtServiceAdapter, limit: limit ?? "20",
                page: page ?? "1", sort: sortServiceAdapter
            }).toString()
        }

        return url + "?" + new URLSearchParams({ page: "1", limit: "20" }).toString()
    }, [pagination])

    /**
    * changes the pagination based on the "metadata".
    * @param currentPage actual page number
    * @param itemCount meta item
    * @param itemsPerPage actual limit pagination number
    * @param totalItems meta total items on the service
    * @param totalPages meta all pages on the service
    */
    const changeFooterPaginate = (metaData: IMetaDataPagination) => {
        setCurrentMetadaPagination(metaData)
    }

    return { queryParams, thead, changeFooterPaginate }
}

/**
 * Note: this pagination is used for Graphql APIS
 * Hook that returns the pagination that has a grid that encompasses it
 * @returns {string, string} query params (page, limit, filt, etc...) manupulated on the grid
 * @example <Grilla...> {useGridInfoGraphql} <Grilla/>
 */
export const useGridInfoGraphql = () => {
    // context grid
    const { pagination, thead, setCurrentMetadaPagination } = useGridContext()

    // columns with grid actions
    const theadWithActions = useMemo(() => {
        return thead.filter((th) => th.isSearch || th.filter)
    }, [thead])

    // graphql search params to request pagination or sort and filters
    const queryParams: IPaginationFilterDto = useMemo(() => {
        if (pagination) {
            const { filt, limit, page, sort } = pagination

            const filtServiceAdapter = filterAdapter(filt, theadWithActions)
            const sortServiceAdapter = sortAdapter(sort)

            return {
                filt: filtServiceAdapter, limit: +(limit ?? "20"),
                page: +(page ?? "1"), sort: sortServiceAdapter
            }
        }

        return { page: 1, limit: 20 }
    }, [pagination])

    /**
     * changes the pagination based on the "metadata".
     * @param currentPage actual page number
     * @param itemCount meta item
     * @param itemsPerPage actual limit pagination number
     * @param totalItems meta total items on the service
     * @param totalPages meta all pages on the service
     */
    const changeFooterPaginate = (metaData: IMetaDataPagination) => {
        setCurrentMetadaPagination(metaData)
    }

    return { queryParams, thead, changeFooterPaginate }
}
