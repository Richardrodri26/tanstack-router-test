import { DeepPartial, useForm, FormProvider } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


interface ISubmitModulesForm<T> { children: JSX.Element, schema: yup.ObjectSchema<DeepPartial<T>>, submit?: (data: DeepPartial<T>) => void, defaultValue?: any }

export function AppFormProvider<T>({ children, submit, defaultValue, schema }: ISubmitModulesForm<T>) {

    const currentMethods = useForm<DeepPartial<T>>({
        defaultValues: defaultValue ?? {}, mode: "onTouched", reValidateMode: "onChange",
        resolver: yupResolver(schema)
    })
    
    return (
        <form onSubmit={submit ? currentMethods.handleSubmit(submit) : undefined} className="flex flex-col">
            <FormProvider {...currentMethods}>
                {children}
            </FormProvider>
        </form>
    )
}