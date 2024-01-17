import { Grilla } from "@ui/components/grilla"
import { AiOutlineDownload } from "react-icons/ai"
import { useGridInfoGraphql, UtilLoadingTbody, UtilErrorTbody, UtilLayoutEmptyDataTbody, TrGridAuxColumn } from "@grilla/utils"
import { useShallowGeneralStore } from "@store/general.store"
import { downloadAnnexe } from "@store/general.actions"
import { useGetAnnexesFromFormByIdQuery, TypeDatailsFormulatio, Anexo } from "@domain/graphql"
import { annexesPanelGridConfig } from "../../controller/constant/formGridPanel.config"

const PanelAnexxesContent = () => {

    return (
        <div className="px-4 py-2">
            <h2 className="text-3xl font-bold mb-5">Anexos del Formulario</h2>
            <div className='!min-h-[480px] !max-h-[80%] z-20 flex flex-col [&>*[data-table="true"]]:flex-1 pb-2'>

                <Grilla withoutTopActions withoutBottomActions defaultPagination={{
                    limit: "10"
                }} url="" thead={annexesPanelGridConfig} >
                    <>
                        <PanelAnnexesTBody />
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
export const PanelAnnexesTBody = () => {
    // hooks
    const [modalInformation] = useShallowGeneralStore((state) => ([state.modalInformation![0]]))
    const { queryParams, changeFooterPaginate } = useGridInfoGraphql()
    const { data, loading, error } = useGetAnnexesFromFormByIdQuery({
        variables: {
            args: {
                id: modalInformation.content,
                type: TypeDatailsFormulatio.Anexos
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
    if (!data || data.getDetailFormulatio?.anexos?.length === 0) return <UtilLayoutEmptyDataTbody />

    return (
        <tbody>
            {
                data.getDetailFormulatio?.anexos?.map((anexe) => (
                    <PanelAnnexesContentTr key={anexe?.id} data={anexe!} />
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
export const PanelAnnexesContentTr = ({ data }: { data: Anexo }) => {

    return (
        <tr>
            <td className="px-3">
                <div 
                    onClick={() => downloadAnnexe(data.archivo!, data.nombre!)}
                    className="flex gap-2 items-center hover:cursor-pointer mx-auto"
                >
                    <p className="text-blue-500 underline">Descargar</p>
                    <AiOutlineDownload className="text-blue-500 mx-auto" />
                </div>
            </td>
            <TrGridAuxColumn data={data} />
        </tr>
    )
}

export default PanelAnexxesContent