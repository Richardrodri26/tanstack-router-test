import { ITheadGrid } from "@ui/components/grilla/context"
import { ThSwitchState } from "@ui/components/grilla/utils"

const formPanelGridConfig: ITheadGrid[] = 
[
    { label: "Acciones", param: "", isAction: true },
    { label: "", param: "", thComponent: <ThSwitchState paramToFilter="status" label="Estado"  /> },
    { label: "Etapa", param: "", filter: { param: "etapa", signal: "contains", type: "text", groupSignal: "or" } },
    { label: "Id", param: "id", canSort: true },
    { label: "Razón Social", param: "razon_social", style: { width: 400, maxWidth: 400 }, isSearch: true, gridfieldValue: "longText" },
    { label: "Regimen", param: "regimen", filter: { param: "regimen", signal: "contains", type: "text" }, cellStyle: { whiteSpace: "nowrap" } },
    { label: "Tipo de Persona", param: "tipo", filter: { param: "tipo", signal: "contains", type: "text" } },
    { label: "No. Documento", param: "numero_documento", filter: { param: "numero_documento", signal: "contains", type: "text" } },
    { label: "Dirección de Notificación", param: "direccion_notificacion", isSearch: true },
    { label: "Fecha de Presentación", param: "fecha_presentacion", gridfieldValue: "date", canSort: true },
    { label: "Fecha de Inscripción", param: "fecha_inscripcion", gridfieldValue: "date" },
]

export const columnFormPanelGridFromAdmin: ITheadGrid = { label: "Censador", param: "nombre_censador", cellStyle: { whiteSpace: "nowrap", width: 250 }, filter: { param: "nombre_censador", signal: "contains", type: "text" } }

export const establismentPanelGridConfig: ITheadGrid[] = 
[
    { label: "Anexos", param: "" },
    { label: "Nombre del Establecimiento", param: "nombre", style: { width: 400, maxWidth: 400 }, isSearch: true, gridfieldValue: "longText" },
    { label: "Dirección", param: "direccion", cellStyle: { whiteSpace: "nowrap" } },
    { label: "Fecha de Apertura", param: "fecha_apertura", gridfieldValue: "date" },
    { label: "No. Empleados", param: "numero_empleados" },
    { label: "Ingreso Promedio Mensual", param: "ingreso_promedio_mensual", cellStyle: { textAlign: "right", paddingRight: "1.2rem" }, gridfieldValue: "amount" },
    { label: "¿Pagó ICAT?", param: "", style: { textAlign: "center", paddingInline: "1.2rem" }, cellStyle: { textAlign: "center", maxWidth: 250, whiteSpace: "normal" } },
]

export const annexesPanelGridConfig: ITheadGrid[] = 
[   
    
    { label: "", param: "", isAction: true },
    { label: "Nombre del Documento", param: "nombre", gridfieldValue: "longText" },
    { label: "Tipo de Documento", param: "tipo", gridfieldValue: "longText", style: { minWidth: 500 } },
    { label: "Extensión del Documento", param: "extension" },
]

export const activitiesPanelGridConfig: ITheadGrid[] = 
[   
    { label: "Codigo de la Actividad", param: "codigo", cellStyle: { paddingLeft: "1.2rem" }, },
    { label: "Descripción de la Actividad", param: "descripcion", gridfieldValue: "longText", style: { minWidth: 300 }, },
    { label: "Fecha de inicio de la Actividad", param: "fecha_inicio", gridfieldValue: "date" },
]

export default formPanelGridConfig