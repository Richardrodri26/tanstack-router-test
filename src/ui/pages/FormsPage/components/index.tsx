import { Fragment, useMemo } from "react"
import { Grilla } from "@ui/components/grilla"
import { PanelFormsContentTbody, PanelHomeContentTr } from "./modal/Elements"
import { useGridInfoGraphql, UtilLoadingTbody, UtilErrorTbody, UtilLayoutEmptyDataTbody } from "@ui/components/grilla/utils"
import { PanelFormsGrouperQuery, urlGrouper } from "@domain/api/generalApi"
import formPanelGridConfig, { columnFormPanelGridFromAdmin } from "../controller/constant/formGridPanel.config"
import { FormularioAll, useGetAllFormsQuery } from "@domain/graphql"
import { MenuItem } from "@szhsin/react-menu"
import { AiOutlineDownload } from "react-icons/ai"
import { handleDownload } from "@services/utility"

export const PanelFormContentTbody = () => {
    // hooks
    const { queryParams, changeFooterPaginate } = useGridInfoGraphql()
    const { data, loading, error } = useGetAllFormsQuery({
        variables: {
            opt: queryParams
        },
        fetchPolicy: "cache-and-network", nextFetchPolicy: "cache-first",
        onCompleted: (data) => {
            changeFooterPaginate(data?.findFormularioAll!.meta!)
        }
    })

    // components
    if (loading && !data) return <UtilLoadingTbody />
    if (error) return <UtilErrorTbody errMsn={error.message} />
    if (!data || data?.findFormularioAll?.items?.length === 0) return <UtilLayoutEmptyDataTbody />

    return (
        <tbody>
            {
                data?.findFormularioAll?.items?.map((form) => {
                    return (
                        <Fragment key={form?.id}>
                            <PanelHomeContentTr data={form as FormularioAll} />
                        </Fragment>
                    )
                })
            }
        </tbody>
    )
}


export const PanelFormsContent = ({ allForms = false }: { allForms?: boolean }) => {

    const memoizedThead = useMemo(() => {
        let thead = [...formPanelGridConfig]

        if (allForms) {
            thead.splice(4, 0, columnFormPanelGridFromAdmin)
        }

        return thead
    }, [allForms])

    return (
        <>
            <Grilla defaultPagination={{
                limit: "10",
                filt: [{ param: "status", signal: "contains", type: "text", value: "true" }],
                sort: [{ selector: "fecha_presentacion", desc: true }]
            }}  gridOptions={<PanelFormGridOptions />} url={urlGrouper} urlGrouperFetch={PanelFormsGrouperQuery()} thead={memoizedThead} withHandleColumnsVisibility >

                <PanelFormsContentTbody allForms={allForms} />

            </Grilla>
        </>
    )
}

const PanelFormGridOptions = () => {
    const dowloadReport = () => {
        handleDownload(`${import.meta.env.VITE_APP_GRAPH}establecimiento?limit=10000000&page=1`, "reporte-establecimiento")
    }

    return (
        <>
            <MenuItem onClick={dowloadReport}> <AiOutlineDownload /> Descargar reporte de establecimientos</MenuItem>
        </>
    )
}

