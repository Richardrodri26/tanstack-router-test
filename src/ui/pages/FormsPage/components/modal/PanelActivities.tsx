import { Grilla } from "@ui/components/grilla"
import { useGridInfoGraphql, UtilLoadingTbody, UtilErrorTbody, UtilLayoutEmptyDataTbody, TrGridAuxColumn } from "@ui/components/grilla/utils"
import { useShallowGeneralStore } from "@domain/store/general.store"
import { useGetActivitiesFromFormByIdQuery, TypeDatailsFormulatio, Actividad } from "@domain/graphql"
import { activitiesPanelGridConfig } from "../../controller/constant/formGridPanel.config"

const PanelActivitiesContent = () => {

    return (
        <div className="px-4 py-2">
            <h2 className="text-3xl font-bold mb-5">Actividades que Ejecuta en el Municipio</h2>

            <div className='!min-h-[480px] !max-h-[80%] z-20 pb-2 flex flex-col [&>*[data-table="true"]]:flex-1 [&>*[data-table="true"]]:max-h-[400px]'>

                <Grilla withoutTopActions withoutBottomActions defaultPagination={{
                    limit: "10"
                }} url="" thead={activitiesPanelGridConfig} >
                    <>
                        <PanelActivitiesTBody />
                    </>
                </Grilla>
            </div>
        </div>
    )
}

/**
 * TBody for PanelActivitiesContent
 * @returns 
 */
export const PanelActivitiesTBody = () => {
    // hooks
    const [modalInformation] = useShallowGeneralStore((state) => ([state.modalInformation![0]]))
    const { queryParams, changeFooterPaginate } = useGridInfoGraphql()
    const { data, loading, error } = useGetActivitiesFromFormByIdQuery({
        variables: {
            args: {
                id: modalInformation.content,
                type: TypeDatailsFormulatio.Actividades
            },
            opt: queryParams
        },
        onCompleted: (data) => {
            changeFooterPaginate(data.getDetailFormulatio?.meta!)
        },
        fetchPolicy: "cache-and-network", nextFetchPolicy: "cache-first",
    })

    // components

    if (loading) return <UtilLoadingTbody />
    if (error) return <UtilErrorTbody errMsn={error.message} />
    if (!data || data.getDetailFormulatio?.actividades?.length === 0) return <UtilLayoutEmptyDataTbody />

    return (
        <tbody>
            {
                data.getDetailFormulatio?.actividades?.map((activity) => (
                    <PanelActivitiesContentTr key={activity?.codigo} data={activity!} />
                ))
            }
        </tbody>
    )
}


/**
 * Tr for PanelActivitiesContent
 * @param param0 
 * @returns 
 */
export const PanelActivitiesContentTr = ({ data }: { data: Actividad }) => {

    return (
        <tr>
            <TrGridAuxColumn data={data} />
        </tr>
    )
}

export default PanelActivitiesContent
