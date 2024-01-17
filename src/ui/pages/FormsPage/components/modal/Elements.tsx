import { useParams } from "react-router"
import { UtilLoadingTbody, UtilErrorTbody, UtilLayoutEmptyDataTbody, TrGridAuxColumn, useGridInfoGraphql } from "@ui/components/grilla/utils"
import { GridHomePanelActionsTr } from "../Elements"
import TagStateComponent from "@utils/Tags"
import { FormularioAll, useGetAllFormByUserIdQuery } from "@domain/graphql"


/**
 * TBody for PanelFormsByIdContent
 * @returns 
 */
export const PanelFormsContentTbody = ({ allForms = false }: { allForms?: boolean }) => {
    // hooks
    const { id } = useParams()

    const { queryParams, changeFooterPaginate } = useGridInfoGraphql()
    const { data, loading, error } = useGetAllFormByUserIdQuery({
        variables: {
            args: {
                id_user: allForms ? undefined : +id!
            },
            opt: queryParams
        },
        onCompleted: (data) => {
            changeFooterPaginate(data.findFormularioAllAdmin?.meta!)
        },
        fetchPolicy: "cache-and-network", nextFetchPolicy: "cache-first",
    })

     // components
     if (loading && !data) return <UtilLoadingTbody />
     if (error) return <UtilErrorTbody errMsn={error.message} />
     if (!data || data.findFormularioAllAdmin?.items?.length === 0) return <UtilLayoutEmptyDataTbody>
    <p>Este censador no tiene formularios a consultar</p>
 </UtilLayoutEmptyDataTbody>
 


    return (
        <tbody>
            {
                data.findFormularioAllAdmin?.items?.map((form) => (
                    <PanelFormsContentTr key={form?.id} data={form!} />
                ))
            }
        </tbody>
    )
}

export const PanelFormsContentTr = ({ data }: { data: FormularioAll }) => {

    return (
        <tr>
            <GridHomePanelActionsTr data={data} companyName={data.razon_social!} id={Number(data.id)} />
            <td className="" style={{ paddingLeft: "0.5rem" }}><TagStateComponent value={data.status ? "ACTIVO" : "ANULADO"} /></td>
            <td className="" style={{ paddingLeft: "0.5rem" }}><TagStateComponent value={data.etapa ?? ""} /></td>
            <TrGridAuxColumn data={data} />
        </tr>
    )
}

/**
 * Tr for PanelHomeContent
 * @param param0 
 * @returns 
 */
export const PanelHomeContentTr = ({ data }: { data: FormularioAll }) => {

    return (
        <tr>
            <GridHomePanelActionsTr data={data} companyName={data.razon_social!} id={Number(data.id)} />
            <td className="flex justify-center items-center" style={{ paddingLeft: "0px" }}><TagStateComponent value={data.status ? "ACTIVO" : "ANULADO"} /></td>
            <td className="" style={{ paddingLeft: "0.5rem" }}><TagStateComponent value={data.etapa ?? ""} /></td>
            <TrGridAuxColumn data={data} />
        </tr>
    )
}