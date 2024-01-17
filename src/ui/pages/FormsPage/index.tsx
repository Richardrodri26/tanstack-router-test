import { Navigate, useSearchParams } from "react-router-dom"
import { Grilla } from "@ui/components/grilla"
import { Breadcrumb } from "@ui/components/nav"
import { PanelFormsContent, PanelFormContentTbody } from "./components"
import { generalStyles } from "@css/index"
import { DetailFormPanelModal } from "./controller"
import { isAdmin } from "@domain/store/general.store"
import formPanelGridConfig from "./controller/constant/formGridPanel.config"
import { NavBarMenuIconsController } from "@components/nav/controller/iconController"

export const FormPage = () => {
    const isUSerAdmin = isAdmin()
    return (
        <>

            {
                isUSerAdmin ? (
                    <Navigate to={"/censo/censadores"} />
                ) : (
                    <>
                        <Breadcrumb />
                        <h1 className={generalStyles.title__grid + " flex gap-2 items-center"}> {NavBarMenuIconsController["forms"]}Mis Censos</h1>

                        <Grilla defaultPagination={{
                            limit: "10",
                            filt: [{ param: "status", signal: "contains",  type: "text", value: "true" }],
                            
                        }} url="" thead={formPanelGridConfig} withHandleColumnsVisibility >
                            <PanelFormContentTbody />
                        </Grilla>

                        <DetailFormPanelModal />
                    </>
                )
            }

        </>
    )
}

export const FormAllPage = () => {
    return (
        <>
            <Breadcrumb />
            <h1 className={generalStyles.title__grid + " flex gap-2 items-center"}>{NavBarMenuIconsController["forms"]} Formularios Censados</h1>

            <PanelFormsContent allForms />

            <DetailFormPanelModal />
        </>
    )
}


export const PanelFormsByIdPage = () => {
    const [searchParams] = useSearchParams()
    const censusName = searchParams.get("name")
    const censusLastName = searchParams.get("lastname")

    return (
        <>
            <div className="flex gap-4 items-center">
                <Breadcrumb />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className={generalStyles.title__grid + " flex gap-2 items-center"}>{NavBarMenuIconsController["forms"]} Formularios Censados por: {censusName} {censusLastName}</h1>
            </div>

            <PanelFormsContent />
            <DetailFormPanelModal />
        </>
    )
}
