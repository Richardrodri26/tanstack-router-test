import * as yup from "yup";


export const createEstablishmentTypeSchema = yup.object({
    name: yup.string().min(6, "El nombre debe contener mínimo 6 caracteres").required("El nombre para el tipo de establecimiento es requerido"),
    description: yup.string().required("Una descripción para el tipo de establecimiento es requerida")
})

export const UpdateEstablishmentTypeSchema = yup.object({
    name: yup.string().min(3, "El nombre de tipo de establecimiento debe contener mínimo 3 caracteres"),
    description: yup.string().min(3, "La descripción de tipo de establecimiento debe contener mínimo 3 caracteres"),
    status: yup.boolean()
})


export type createEstablishmentype = yup.InferType<typeof createEstablishmentTypeSchema>
export type UpdateEstablishmentType = yup.InferType<typeof UpdateEstablishmentTypeSchema>