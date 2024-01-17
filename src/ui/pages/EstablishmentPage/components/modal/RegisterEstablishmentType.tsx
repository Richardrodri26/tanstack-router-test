import { FormButtons } from "@components/common/Buttons"
import { BasicInput, BasicSelect, BasicTextArea } from "@components/common/Inputs"
import { AppFormProvider } from "@components/form"
import useGeneral from "@store/general.store"
import { createEstablishmentType } from "@store/general.actions"
import { createEstablishmentTypeSchema } from "@pages/EstablishmentPage/controller/formSchema"


const RegisterEstablishmentType = () => {
    const setModalInformaction = useGeneral((state) => state.setModalInformaction)
   
    return (
        <>
            <AppFormProvider
                schema={createEstablishmentTypeSchema}
                submit={(data) => {
                    createEstablishmentType({
                        nombre: data.name,
                        descripcion: data.description
                    })
                }}
            >
                <>
                    <h2 className="text-3xl font-bold mb-5 p-2">Añadir Tipo de Establecimiento</h2>
                    <div className='!min-h-[200px] min-w-[700px] !max-h-[80%] z-20 flex flex-col gap-5 px-5'>
                        <div className="form__info__wrapper">
                            <BasicInput type="text" inputId="name" label="Nombre del tipo de establecimiento" placheHolder="Ingresa el nombre del tipo de establecimiento" />
                        </div>

                        <div className="form__info__wrapper mb-5 mt-2">
                            <BasicTextArea maxLength={250} rows={4} label="Descripción" inputId="description" />
                        </div>

                    </div>

                    <FormButtons leftFunc={() => { setModalInformaction() }} />
                </>
            </AppFormProvider>
        </>
    )
}

export default RegisterEstablishmentType