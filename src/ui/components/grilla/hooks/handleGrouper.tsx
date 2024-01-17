import { useMemo } from "react"
import { useQuery } from "react-query"
import axios from "axios"
import Cookies from "js-cookie"
import { gql } from "@apollo/client"
import { GraphQLClient } from "graphql-request";
import { useGridContext } from "@grilla/context"


/*---------------------------- config ----------------------------*/

interface IDataFetch { items: Record<string, string>[] }

/*---------------------------- hooks ----------------------------*/

/**
 * hook that lists the data of a parameter in a grouped form.
 * this hook makes a request to graphql if it detects a blank space within the parameter "urlGrouperFetch",
 * otherwise a "rest" request
 * @param param 
 * @returns 
 */
export const useHandleGrouperFilter = (param: string) => {
    // hooks
    const { url, urlGrouperFetch, pagination, grouperSetFilter } = useGridContext()

    const currentConfig = useMemo(() => {
        if (!urlGrouperFetch || !url) return undefined

        if (/\n/.test(urlGrouperFetch)) {
            const graphBody = urlGrouperFetch.replaceAll("__param__", param)
            return { url: url + "graphql", body: graphBody }
        }

        return { url: url + urlGrouperFetch }
    }, [url, urlGrouperFetch])

    const valuesCheckeds = useMemo(() => {
        return pagination?.filt?.filter((item) => item.param === param).map((item) => item.value)
    }, [pagination?.filt])

    const { data, isLoading, isError } = useQuery<IDataFetch | undefined>({
        queryKey: [param], queryFn: () => {
            // return graphqlGroupFetcher(currentConfig)

            // when is graph
            if (currentConfig?.body) {
                return graphqlGroupFetcher(currentConfig)
            }

            // when is rest
            return restGroupFetcher(param, currentConfig?.url)
        }, refetchOnMount: true, refetchIntervalInBackground: true
    })

    // functions
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target
        grouperSetFilter({ param, value: name, signal: "=", type: "text" })
    }

    return { data, isLoading, isError, valuesCheckeds, onChange }
}

/*---------------------------- functions ----------------------------*/

/**
 * creates and makes a request to a graphql function
 * @param currentConfig - query and url
 * @returns 
 */
const graphqlGroupFetcher = (currentConfig: { body: string, url: string }) => {

    // -- graphql config --
    let userCookie = Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)

    // -- query builder --
    const GROUP_QUERY = gql`${currentConfig.body}`
    // -- graphql fetch --
    return new GraphQLClient(currentConfig.url, {
        headers: {
            "x_api_key_cs3": import.meta.env.VITE_APP_PUBLIC_HEADER,
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userCookie}`
        }
    }).request<{ data: IDataFetch }>(GROUP_QUERY).then((res) => {
        return res.data
    }).catch(err => err)
}

/**
 * creates and makes a request to a rest api url
 * @param url 
 * @param param 
 * @returns 
 */
const restGroupFetcher = (param: string, url?: string) => {

    if (!url) return undefined

    // -- rest config --
    let userCookie = Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)

    // -- search params --
    const grouperPaginate = { limit: "0", page: "0", group: `[{"selector": "${param}"}]` }
    const searchParams = "?" + new URLSearchParams(grouperPaginate)

    // -- rest fetch --
    return axios.get(url + searchParams, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key-cs3": import.meta.env.VITE_APP_PUBLIC_HEADER,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers': '*',
            "authentication_token_value": `${userCookie}`
        }
    }).then(res => res.data).catch(err => err)
}