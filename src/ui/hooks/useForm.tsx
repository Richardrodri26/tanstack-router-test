import { useFormContext } from "react-hook-form"
import { verifyPass, passRegExp } from "@ui/pages/auth/controllers/authSchemas"


/**
 * Return a object with regex tests from "inputId" variable input value
 * @returns { Object }
 */
export const useVerifyPassword = (inputId: string) => {
    const passValue = useFormContext().watch(inputId) || "" as string

    return {
        numChars: passValue.length >= 8 && passValue.length <= 16,
        hasUppercase: /[A-Z]/.test(passValue),
        specialChar: verifyPass.test(passValue),
        hasLetter: /[a-z]/.test(passValue),
        hasNumber: /[0-9]/.test(passValue),
        noSpace: !/\s/.test(passValue),
        isOk: passRegExp.test(passValue)
    }
}