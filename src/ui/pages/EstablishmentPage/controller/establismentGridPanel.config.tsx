import { ThSwitchState } from "@grilla/utils";
import { ITheadGrid } from "@grilla/context";



export const establishmentPageGridConfig: ITheadGrid[] = [
    { label: "Acciones", param: "", isAction: true },
    { label: "", param: "", thComponent: <ThSwitchState paramToFilter="status" label="Estado"  />, style: { width: 130, maxWidth: 130, paddingLeft: 0 } },
    // { label: "", param: "", thComponent: <ThToolTipSortAction param="status" label="Estado" />, style: { width: 130, maxWidth: 130 } },
    { label: "Id", param: "id", canSort: true, style: { width: 100, maxWidth: 100 } },
    { label: "Nombre", param: "nombre", isSearch: true },
    { label: "Descripción", param: "descripcion", isSearch: true },
]