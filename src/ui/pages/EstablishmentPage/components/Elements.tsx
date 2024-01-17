import { MenuItem } from "@szhsin/react-menu"
import { TdActionComponent, UtilLayoutEmptyDataTbody } from "@ui/components/grilla/utils"
import { MdAddHomeWork, MdOutlineCancel } from "react-icons/md"
import { AiOutlineCheck, AiOutlineEdit } from "react-icons/ai"
import { useSetPanelModalType } from "@hooks/useNavigate"
import { changeStatusEstablishmentType } from "@store/general.actions"
import { TipoEstablecimiento } from "@graph/index"

export const GridEstablismentPageActionsTr = ({ data }: { data: TipoEstablecimiento }) => {
    const { setModalInformaction } = useSetPanelModalType()
    return (
        <TdActionComponent direction="right" boundingBoxPadding="0 0 10 0">
            <>
                <MenuItem
                    onClick={() => {
                        setModalInformaction([{
                            type: "editEstablishmentModal",
                            content: {
                                id: data.id,
                                status: data.status,
                                establishmentData: data
                            }
                        }])
                    }}
                >
                    <AiOutlineEdit /> Editar Tipo de Establecimiento
                </MenuItem>
                {
                    data.status ? (
                        <MenuItem
                            data-danger
                            onClick={() => {
                                changeStatusEstablishmentType(data.id!, false)
                            }}
                        >
                            <MdOutlineCancel /> Anular tipo de establecimiento
                        </MenuItem>
                    ) : (
                        <MenuItem
                            onClick={() => {
                                changeStatusEstablishmentType(data.id!, true)
                            }}
                        >
                            <AiOutlineCheck /> Activar tipo de establecimiento
                        </MenuItem>
                    )
                }

            </>
        </TdActionComponent>
    )
}

export const GridOptionsEstablishmentPageContent = () => {
    const { setModalInformaction } = useSetPanelModalType()

    return (
        <>
            <MenuItem
                onClick={() => {
                    setModalInformaction([{ type: "registerEstablismentModal", content: "a" }])
                }}
            >
                <MdAddHomeWork /> Registrar tipo de establecimiento
            </MenuItem>
        </>
    )
}

export const EstablismentPageEmptyContent = () => {

    return (
        <UtilLayoutEmptyDataTbody title="Oops, ¡no se encontraron tipos de establecimientos registrados!" >
            <p>Puede registrar un tipo de establecimiento dando clic en "Opciones {">"} Registrar tipo de establecimiento" </p>
        </UtilLayoutEmptyDataTbody>
    )
}