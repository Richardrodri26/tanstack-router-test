import { Suspense } from "react"
import { CustomeModal } from "@components/modal"
import { LazyPanelEstablismentsContent, LazyPanelAnexxesContent, LazyPanelActivitiesContent } from "@pages/FormsPage/components/modal"
import { useShallowGeneralStore } from "@store/general.store"
import { PanelEstablismentsContentAlternative } from "../components/modal/PanelEstablisments"

// -------------------- Detail modal -------------------

export const DetailFormPanelModal = () => {
    // hooks
    const [modalInformation, setModalInformaction] = useShallowGeneralStore((state) => ([state.modalInformation, state.setModalInformaction]))
    const hasInfoModal = Boolean(modalInformation)

    return (
        <>
            <CustomeModal
                customeCss="min-height: initial !important; width: clamp(350px,90%,90vw) !important; z-index: 20; padding: 0px; & .close__modal__button {top: 14px;}"
                closeButton
                onRequestClose={() => { setModalInformaction() }}
                isOpen={hasInfoModal}
            >
                <Suspense fallback={<div className="skeleton__loading h-[500px] w-[850px]" />}>
                    {
                        hasInfoModal ? (
                            ({
                                // "establismentModal": <LazyPanelEstablismentsContent />,
                                "establismentModal": <PanelEstablismentsContentAlternative />,
                                "anexxesFormModal": <LazyPanelAnexxesContent />,
                                "activitiesModal": <LazyPanelActivitiesContent />,
                            })[modalInformation![0].type ?? ""] ?? <></>) : (
                            null
                        )
                    }
                </Suspense>
            </CustomeModal>

            <CustomeModal
                customeCss="min-height: initial !important; width: clamp(350px,90%,80vw) !important; padding: 0px; & .close__modal__button {top: 14px;}"
                onRequestClose={() => { setModalInformaction([{ content: "", type: "a" }]) }}
                closeButton
                isOpen={hasInfoModal && Boolean(modalInformation![1])}>
                {
                    hasInfoModal && Boolean(modalInformation![1]) ? (
                        ({
                            "b": <>b</>,
                            "": <>nada</>,
                        })[modalInformation![1].type ?? ""] ?? <></>) : (
                        null
                    )
                }

            </CustomeModal>
        </>
    )
}