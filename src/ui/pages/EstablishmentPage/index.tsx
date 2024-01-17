import { Suspense } from "react"
import { EstablishmentPanelGridContent } from "./components"
import { Breadcrumb } from "@ui/components/nav"
import { CustomeModal } from "@components/modal"
import { LazyRegisterEstablishmentTypeContent, LazyUpdateEstablishmentTypeContent } from "./components/modal"
import { generalStyles } from "@css/index"
import { useShallowGeneralStore } from "@store/general.store"
import { modalsCloseInformation } from "@api/generalApi"
import { NavBarMenuIconsController } from "@components/nav/controller/iconController"


const EstablishmentPage = () => {
    return (
        <>
            <Breadcrumb />
            <h1 className={generalStyles.title__grid + " flex gap-2 items-center"}>{NavBarMenuIconsController["establishment"]} Tipos de Establecimientos</h1>
            <EstablishmentPanelGridContent />

            <EstablishmentModals />
        </>
    )
}

const EstablishmentModals = () => {
    const [modalInformation, setModalInformaction] = useShallowGeneralStore((state) => ([state.modalInformation, state.setModalInformaction]))
    const hasInfoModal = Boolean(modalInformation)

    return (
        <CustomeModal
        customeCss="min-height: initial !important; width: clamp(350px,90%,90vw) !important; z-index: 20; padding: 0px; & .close__modal__button {top: 14px;}"
        closeButton
        onRequestClose={() => { setModalInformaction() }}
        isOpen={hasInfoModal}
        shouldCloseOnOverlayClick={hasInfoModal ? !modalsCloseInformation.includes(modalInformation![0].type) : true}
    >
        <Suspense fallback={<div className="skeleton__loading h-[500px] w-[850px]" />}>
        {
            hasInfoModal ? (
                ({
                    "registerEstablismentModal": <LazyRegisterEstablishmentTypeContent />,
                    "editEstablishmentModal": <LazyUpdateEstablishmentTypeContent />
                })[modalInformation![0].type ?? ""] ?? <></>) : (
                null
            )
        }
        </Suspense>
    </CustomeModal>
    )
}

export default EstablishmentPage