
import Cookies from "js-cookie";
import { CHANGE_STATUS_ESTABLISHMENT, CREATE_ESTABLISHMENT_TYPE, LOGIN, UPDATE_ESTABLISHMENT_TYPE, VERIFY_JWT } from "@domain/graphql/documentNodes/home.gql";
import { CreateTipoEstablecimientoInput, ResponseLogin, TipoEstablecimiento, UpdateTipoEstablecimientoInput } from "@domain/graphql";
import { privateFetcher, publicGraphqlFetcher } from "./api.config";

export const urlGrouper = import.meta.env.VITE_APP_GRAPH

export const homeEndpoints = {
    // graph

    loginUser: (data: { usuario: string, clave: string }) => publicGraphqlFetcher<{ login: ResponseLogin }>(LOGIN, data),
    changeStatusEstablishmentType: (data: { id: number, status: boolean } ) => publicGraphqlFetcher<{ changeTipoEstablecimientoStatus: TipoEstablecimiento }>(CHANGE_STATUS_ESTABLISHMENT, data),
    createEstablishmentType: (data: { args: CreateTipoEstablecimientoInput }) => publicGraphqlFetcher<{ createTipoEstablecimiento: TipoEstablecimiento }>(CREATE_ESTABLISHMENT_TYPE, data),
    updateEstablishmentType: (data: { id: number, args: UpdateTipoEstablecimientoInput }) => publicGraphqlFetcher<{ updateTipoEstablecimiento: TipoEstablecimiento }>(UPDATE_ESTABLISHMENT_TYPE, data),

    printForm: (id: number) => privateFetcher(`formulario/downloadFormulatio/${id}`),

    verifyJWT: () => {
        const tokenCookie = Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)
        if (tokenCookie) return publicGraphqlFetcher(VERIFY_JWT, { token: tokenCookie })
        return false
    }
}


// interfaces
export type IModalFormType = "establismentModal" | "anexxesFormModal" | "activitiesModal" | "registerEstablismentModal" | "editEstablishmentModal"



// func

/**
 * Grouper query for PanelFormContent to filter by "status"
 * @returns 
 */
export const PanelFormsGrouperQuery = () => `
    query {
        findFormularioAllAdmin(
            opt: { limit: 0, page: 0, group: "[{\\"selector\\": \\"__param__\\"}]" } ) {
                items {
                    __param__
                }
            }
    }
`


// consts
export const modalsCloseInformation = ["editEstablishmentModal", "registerEstablismentModal"]