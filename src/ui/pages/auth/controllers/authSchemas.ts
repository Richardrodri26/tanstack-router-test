import * as yup from "yup";

/*----------------------- regex ------------------------*/

const specialCharRegExp = "@$!%*/?&_.;¡¿"
export const passRegExp = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${specialCharRegExp}])[A-Za-z\\d${specialCharRegExp}]{8,16}$`)
export const verifyPass = new RegExp(`(?=.*[${specialCharRegExp}])`)

export const loginSchema = yup.object().shape({
    user: yup.string().email("Debe ser un email valido").required("Por favor ingrese su usuario o correo"),
    password: yup.string().required("Por favor ingrese su contraseña")
})

export type loginType = yup.InferType<typeof loginSchema>