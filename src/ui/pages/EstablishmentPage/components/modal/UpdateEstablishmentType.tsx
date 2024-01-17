import { FormButtons } from "@components/common/Buttons"
import { BasicCheckBox, BasicInput, BasicTextArea } from "@components/common/Inputs"
import { AppFormProvider } from "@components/form"
import { updateEstablishmentType } from "@store/general.actions"
import { useShallowGeneralStore } from "@store/general.store"
import { UpdateEstablishmentType, UpdateEstablishmentTypeSchema,  } from "@pages/EstablishmentPage/controller/formSchema"


const UpdateEstablishmentTypeModal = () => {
    const [modalInformation, setModalInformaction] = useShallowGeneralStore((state) => ([state.modalInformation![0].content!, state.setModalInformaction]))

    const defaultData: UpdateEstablishmentType = {
        name: modalInformation.establishmentData?.nombre,
        description: modalInformation.establishmentData?.descripcion,
        status: modalInformation.establishmentData?.status
    }
   
    return (
        <>
            <AppFormProvider
                schema={UpdateEstablishmentTypeSchema}
                defaultValue={defaultData}
                submit={(data) => {
                    updateEstablishmentType(modalInformation.id, {
                        nombre: data.name,
                        descripcion: data.description,
                        status: data.status ?? false
                    })
                }}
            >
                <>
                    <h2 className="text-3xl font-bold mb-1 p-2">Editar Tipo de Establecimiento</h2>
                    <p className="text-xl opacity-950 mb-1 p-2">Tipo de establecimiento: {defaultData.name}</p>
                    <div className='!min-h-[200px] min-w-[700px] !max-h-[80%] z-20 flex flex-col gap-5 px-5'>
                        <div className="form__info__wrapper">
                            <BasicInput type="text" inputId="name" label="Nombre del tipo de establecimiento" placheHolder="Ingresa el nombre del tipo de establecimiento" />
                        </div>

                        <div className="form__info__wrapper mt-2">
                            <BasicTextArea maxLength={250}  rows={4} label="Descripción" inputId="description" />
                        </div>

                        <BasicCheckBox inputId="status" label="¿Activo?" />

                    </div>

                    <FormButtons leftFunc={() => { setModalInformaction() }} />
                </>
            </AppFormProvider>
        </>
    )
}

export default UpdateEstablishmentTypeModal