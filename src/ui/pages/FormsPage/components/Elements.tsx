import { MenuItem } from "@szhsin/react-menu"
import { TdActionComponent } from "@ui/components/grilla/utils"
import { AiFillFileImage, AiFillShop, AiOutlineDownload, AiOutlineFieldTime, AiOutlineFilePdf } from "react-icons/ai"
import { BsPinMapFill } from "react-icons/bs"
import { useSetPanelModalType } from "@hooks/useNavigate"
import { useShallowGeneralStore } from "@domain/store/general.store"
import { downloadAnnexe, downloadForm } from "@domain/store/general.actions"
import { Establecimiento, FormularioAll } from "@domain/graphql"

export const GridHomePanelActionsTr = ({ id, companyName, data }: { id: number, companyName: string, data: FormularioAll }) => {
    const [isAdvertisign] = useShallowGeneralStore((state) => ([state.isAdvertisign]))
    const { setModalInformaction } = useSetPanelModalType()


    return (
        <TdActionComponent viewScroll="close" direction="right" boundingBoxPadding="0 0 15 0">
            <>
                {
                    data.etapa === "BORRADOR" ? (null) : (
                        <MenuItem onClick={() => { downloadForm(id, companyName) }} disabled={isAdvertisign?.isActive ?? false} >
                            <AiOutlineDownload /> {isAdvertisign?.isActive ? "Descargando formulario" : "Descargar formulario"}
                        </MenuItem>
                    )
                }

                <MenuItem disabled={data.etapa === "BORRADOR"} onClick={() => { setModalInformaction([{ type: "establismentModal", content: id }]) }}>
                    <AiFillShop /> Ver establecimientos
                </MenuItem>

                <MenuItem disabled={data.etapa === "BORRADOR"} onClick={() => { setModalInformaction([{ type: "anexxesFormModal", content: id }]) }}>
                    <AiOutlineFilePdf /> Ver anexos
                </MenuItem>

                <MenuItem disabled={data.etapa === "BORRADOR"} onClick={() => { setModalInformaction([{ type: "activitiesModal", content: id }]) }}>
                    <AiOutlineFieldTime /> Ver actividades
                </MenuItem>

            </>
        </TdActionComponent>
    )
}

export const GridEstablismentActionsTr = ({ data }: { data: Partial<Establecimiento> }) => {

    return (
        <TdActionComponent direction="right" boundingBoxPadding="0 0 10 0">
            <>
                <MenuItem onClick={() => { downloadAnnexe(data.foto_predio_mongo_id!, `Anexo del establecimiento ${data.nombre}`) }} >
                    <AiFillFileImage /> Descargar imagen del establecimiento
                </MenuItem>

                <MenuItem onClick={() => { downloadAnnexe(data.foto_predio_mongo_maps_id!, `Anexo de localización ${data.nombre}`) }} >
                    <BsPinMapFill /> Descargar imagen de la localización
                </MenuItem>
            </>
        </TdActionComponent>
    )
}

export const GridAnnexesActionsTr = ({ mongoId, annexeName }: { mongoId: string, annexeName: string }) => {

    return (
        <TdActionComponent direction="right" boundingBoxPadding="0 0 10 0">
            <>

                <MenuItem
                    className="hover:bg-primary-opacity hover:text-primary [&>svg]:hover:text-primary"
                    onClick={() => { downloadAnnexe(mongoId, annexeName) }}
                >
                    <AiOutlineDownload /> Descargar anexo
                </MenuItem>
            </>
        </TdActionComponent>
    )
}

export const GridActivitiesActionsTr = () => {

    return (
        <TdActionComponent direction="right" boundingBoxPadding="0 0 10 0">
            <>
                <MenuItem>
                    Opción
                </MenuItem>

            </>
        </TdActionComponent>
    )
}

export const GridFormByIdUserIdActionsTr = ({ id, companyName, mongoId }: { id: number, companyName: string, mongoId: string }) => {
    const [isAdvertisign] = useShallowGeneralStore((state) => ([state.isAdvertisign]))
    const { setModalInformaction } = useSetPanelModalType()

    return (
        <TdActionComponent direction="right" boundingBoxPadding="0 0 10 0">
            <>
                <MenuItem
                    className="hover:bg-primary-opacity hover:text-primary [&>svg]:hover:text-primary"
                    disabled={isAdvertisign?.isActive ?? false}
                >
                    <AiOutlineDownload /> Descargar formulario
                </MenuItem>

                <MenuItem
                    className="hover:bg-primary-opacity hover:text-primary [&>svg]:hover:text-primary"
                    onClick={() => { setModalInformaction([{ type: "establismentModal", content: id }]) }}>
                    <AiFillShop /> Ver establecimientos
                </MenuItem>

                <MenuItem
                    className="hover:bg-primary-opacity hover:text-primary [&>svg]:hover:text-primary"
                    onClick={() => { setModalInformaction([{ type: "anexxesFormModal", content: id }]) }}>
                    <AiOutlineFilePdf /> Ver anexos
                </MenuItem>

                <MenuItem
                    className="hover:bg-primary-opacity hover:text-primary [&>svg]:hover:text-primary"
                    onClick={() => { setModalInformaction([{ type: "activitiesModal", content: id }]) }}>
                    <AiOutlineFieldTime /> Ver actividades
                </MenuItem>
            </>
        </TdActionComponent>
    )
}