import { ITheadGrid } from "@grilla/context"

const userPanelGridConfig: ITheadGrid[] = 
    [
        { label: "Acciones", param: "", isAction: true },
        { label: "Nombre", param: "firstname", isSearch: true },
        { label: "Apellido", param: "lastname", isSearch: true },
        { label: "Telefono", param: "phone", canSort: true, filter: { param: "phone", signal: "contains", type: "text" } },
        { label: "Tipo de Usuario", param: "usertype" },
        { label: "Formularios Anulados", param: "total_formulario_no_activos" },
        { label: "Formularios Activos", param: "total_formulario_activos" },
        { label: "Total de Formularios Censados", param: "total_formulario", cellStyle: { fontWeight: 500 } }
    ]

export default userPanelGridConfig