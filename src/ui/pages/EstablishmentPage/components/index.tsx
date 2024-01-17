import { Grilla } from "@ui/components/grilla"
import { GridEstablismentPageActionsTr, GridOptionsEstablishmentPageContent } from "./Elements"
import TagStateComponent from "@utils/Tags"
import { TrGridAuxColumn, UtilErrorTbody, UtilLayoutEmptyDataTbody, UtilLoadingTbody, useGridInfoGraphql } from "@components/grilla/utils"
import { establishmentPageGridConfig } from "../controller/establismentGridPanel.config"
import { useGetAllEstablismentTypesQuery } from "@graph/index"

export const EstablishmentPanelGridContent = () => {

    return (
        <>
            <Grilla defaultPagination={{
                limit: "10",
                sort: [{ selector: "id", desc: false }],
                filt: [{ param: "status", signal: "contains",  type: "text", value: "true" }],
            }} url="" thead={establishmentPageGridConfig} gridOptions={<GridOptionsEstablishmentPageContent />} withHandleColumnsVisibility>

                <EstablishmentPanelGridTbody />

            </Grilla>
        </>
    )
}

const EstablishmentPanelGridTbody = () => {
    // hooks
    const { changeFooterPaginate, queryParams } = useGridInfoGraphql()
    const { data, loading, error } = useGetAllEstablismentTypesQuery({
        variables: {
            opt: queryParams
        },
        onCompleted: (data) => {
            changeFooterPaginate(data?.getAllTipoEstablecimientos?.meta!)
        }
    })

     // components
     if (loading && !data) return <UtilLoadingTbody />
     if (error) return <UtilErrorTbody errMsn={error.message} />
     if (!data || data?.getAllTipoEstablecimientos?.items?.length === 0) return <UtilLayoutEmptyDataTbody  />


    return (
        <>
            <tbody>
                {
                    data?.getAllTipoEstablecimientos?.items?.map((establishmentType) => (
                        <tr key={establishmentType?.id}>
                            <GridEstablismentPageActionsTr data={establishmentType!}  />
                            <td className="flex justify-start items-center " style={{ paddingLeft: "0.5rem", marginInline: "auto" }}><TagStateComponent value={establishmentType?.status ? "ACTIVO" : "ANULADO"} /></td>
                            <TrGridAuxColumn data={establishmentType} />
                        </tr>
                    ))
                }
            </tbody>
        </>
    )
}