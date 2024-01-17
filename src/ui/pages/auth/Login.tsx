import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppFormProvider } from "@ui/components/form"
import { BasicInput, BasicPassword, InputTextError } from "@ui/components/common/Inputs"
import { FormButton } from "@ui/components/common/Buttons"
import { login } from "@domain/store/general.actions"
import { loginSchema } from "./controllers/authSchemas"

const LoginPage = () => {
  const [errors, setErrors] = useState("")
  const navigate = useNavigate()

  return (
    <AppFormProvider schema={loginSchema} submit={(data) => {
      setErrors("")
      login({ password: data.password!, user: data.user! }).then((res) => {
        if (res) {
          navigate("/inicio")
        } else {
          setErrors("Hubo un error al iniciar sesión, por favor compruebe sus credenciales")
        }
      })
    }}
    >
      <section className="bg-primary-opacity min-h-screen flex items-center md:justify-start justify-center">
        <div className="w-full lg:w-4/12 px-4 pt-6 bg-white shadow-lg ml-0 md:ml-5 rounded-lg">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg border-0">

            <div className="flex-auto px-4 lg:px-10 py-10 pt-5 flex flex-col gap-5 justify-between rounded-md">
              <h2 className="text-3xl">Ingresa tu cuenta</h2>

              <div className="h-full flex flex-col gap-8">
                <div className="form__info__wrapper">
                  <BasicInput className="bg-red-100" type="text" inputId="user" label="Usuario" placheHolder="Ingresa tu usuario" />
                </div>

                <div className="form__info__wrapper min-h-[106px]">
                  <BasicPassword inputId="password" label="Contraseña" placheHolder="Ingresa tu contraseña" />
                </div>
              </div>

              <div className="w-full mt-5 flex justify-center">
                <FormButton />
              </div>

              <InputTextError isError={errors.length > 1} msg={errors} />
            </div>
          </div>
        </div>
      </section>
    </AppFormProvider>
  )
}


export default LoginPage