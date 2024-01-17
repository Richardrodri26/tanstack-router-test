import { useMenuState, MenuItem } from "@szhsin/react-menu"
import { AnimatePresence, Variants, motion } from "framer-motion"
import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react"
import { useFormContext } from "react-hook-form"
import { IconInputInfoMenu } from "../styled"

/*----------------------------- config --------------------------------*/
export const errorMessageVariants: Variants = {
    open: {
        height: 19,
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    hidden: {
        height: 0,
        opacity: 0,
        transition: {
            duration: 0.3
        }
    }
}

interface IBasicProps {
    inputId: string
    label: string
    placheHolder?: string
    inputInfo?: string | JSX.Element
    hiddeError?: boolean
    toolTipStatus?: boolean
}

interface IPropsTextArea extends IBasicProps {
    cols?: number
    rows?: number
    disable?: boolean
    styleLabel?: React.CSSProperties,
    styleTextArea?: React.CSSProperties
}

interface IPropsInputs extends IBasicProps {
    type: HTMLInputTypeAttribute
    style?: React.CSSProperties
    divStyle?: React.CSSProperties
    className?: string
    autoComplete?: string
    subText?: string
    disable?: boolean
    id?: string
}

interface IPropsSelects extends IBasicProps {
    options: any[]
    disable?: boolean
    optValues: [string, string]
    ignoreOptions?: string[]
}

interface IError {
    message?: string

}

type direction = "right" | "top" | "left" | "bottom"


export const BasicInput = ({ inputId, label, type, placheHolder, id, style, className, autoComplete = "on", disable = false, divStyle, hiddeError }: IPropsInputs) => {
    const { register, formState: { errors } } = useFormContext()
    const isError = Boolean(errors[inputId])

    return (
        <div className="flex-1" style={{ ...divStyle }} id={id}>
            <div
                className={`input__wrapper`}
                id={inputId}>
                <label className="font-work-sans text-[clamp(12px, 2vw, 14px)]" htmlFor={inputId}>{label}</label> 
                <input type={type} id={inputId} disabled={disable}  {...register(inputId)} placeholder={placheHolder}
                    style={{ ...style }}
                    className="w-full py-3 pl-3 pr-11 rounded-md border-2"
                    data-error={`${isError}`} autoComplete={autoComplete} />

                {hiddeError ? null : (
                    <AnimatePresence>
                        {isError && (
                            <motion.span key={inputId} variants={errorMessageVariants} animate="open" exit="hidden"
                                className="text-red-500"
                                initial="hidden">
                                {`${errors[inputId]?.message}`}
                            </motion.span>
                        )}
                    </AnimatePresence>
                )}
            </div>
        </div>
    )
}

export const BasicPassword = ({ inputId, label, placheHolder, inputInfo, toolTipStatus = true }: IBasicProps) => {
    // hooks
    const [type, setType] = useState("password")
    const { register, formState: { errors } } = useFormContext()

    // consts
    const isPassword = type === "password"
    const isError = Boolean(errors[inputId])

    return (
        <>
            <div className="flex-1 mb-5">
            <div
                className={`input__wrapper`}
            >
                <label className="font-work-sans text-[clamp(12px, 2vw, 14px)]" htmlFor={inputId}>{label}</label>
                <input type={type} autoComplete={"off"} id={inputId} {...register(inputId)} placeholder={placheHolder}
                    // className={styles.input__with__icon}
                    className="w-full py-3 pl-3 pr-11 rounded-md border-2 border-rose-500 relative"
                    data-error={`${isError}`}
                />

                <img src={isPassword ? "/forms/showInfoEye.svg" : "/forms/hiddeInfoEye.svg"}
                    className={`h-5 w-5 absolute right-[15px] top-[55%] cursor-pointer transition-all ease-out duration-300 `}
                    onClick={() => setType(isPassword ? "text" : "password")}
                />

        <AnimatePresence>
            {errors[inputId] && (
                <motion.span key={inputId} 
                    className="text-red-500"
                    variants={errorMessageVariants} animate="open" exit="hidden"
                    initial="hidden">
                    {`${errors[inputId]?.message}`}
                </motion.span>
            )}
        </AnimatePresence>

                
            </div>
        </div>

        
        </>
    )
}

export const InputTextError = ({ isError, msg, error }: { isError?: boolean, msg?: string, error?: Partial<IError> }) => {
    return (
        <AnimatePresence>
            {Boolean(error) && (
                <motion.span 
                    className="text-red-500"
                    variants={errorMessageVariants} animate="open" exit="hidden"
                    initial="hidden">
                    { error?.message }
                </motion.span>
            )}

           
        </AnimatePresence>
    )
}

export const InputInfoIcon = ({ msn, opened, customeStyle, direction }: { msn: string | JSX.Element, opened?: boolean, customeStyle?: React.CSSProperties, direction?: direction }) => {
    // hooks
    const ref = useRef(null);
    const [menuState, toggleMenu] = useMenuState({ transition: true });
    useEffect(() => { toggleMenu(Boolean(opened)) }, [opened])

    // functions
    const imgToggle = () => {
        toggleMenu(menuState.state === "closed" || menuState.state === undefined ? true : false)
    }

    const toggleOnClose = () => {
        if (!opened) toggleMenu()
    }

    return (
        <>
            <img src="/forms/inputInformation.svg"
                style={customeStyle}
                className={customeStyle ? "" : "h-4 w-4 absolute right-0 top-0 cursor-pointer"}
                alt="" ref={ref} onClick={imgToggle}
            />

            <IconInputInfoMenu overflow="visible" direction={direction ?? "top"} anchorRef={ref} {...menuState} onClose={() => { toggleOnClose() }} >
                <MenuItem >{msn}</MenuItem>
            </IconInputInfoMenu>
        </>
    )
}

export const BasicTextArea = ({ inputId, label, placheHolder, disable, cols, rows, styleLabel, styleTextArea, maxLength }: IPropsTextArea & { maxLength?: number }) => {
    // hooks
    const { register, formState: { errors }, watch } = useFormContext()
    const isError = Boolean(errors[inputId])
    const textLength = watch(inputId)?.length || 0

    return (
        <>
            <div className="relative h-fit mb-[5px] flex flex-col gap-[2px] justify-start">
                <label htmlFor={inputId} style={styleLabel}>{label}</label>
                <textarea maxLength={maxLength} style={styleTextArea} cols={cols} rows={rows} {...register(inputId)} placeholder={placheHolder} disabled={disable} data-error={`${isError}`} />
                {maxLength ? (
                    <p className="font-work-sans font-[clamp(10px, 2vw, 12px)] absolute right-0 -bottom-5">{`${textLength}/${maxLength}`}</p>
                ) : null}
            </div>

            <InputTextError error={errors[inputId]} />
        </>
    )
}

export const BasicCheckBox = ({ inputId, label }: IBasicProps) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <div
            className="h-[45px] gap-0.5 flex flex-col"
        >
            <div
                className="flex gap-[5px]"
            >
                <input type="checkbox" id={inputId} {...register(inputId)} />
                <label htmlFor={inputId}>{label}</label>
            </div>

            <InputTextError error={errors[inputId]} />
        </div>
    )
}

export const BasicSelect = ({ inputId, label, placheHolder, options, optValues: [optId, optLabel], disable = false, ignoreOptions = [] }: IPropsSelects) => {
    const { register, formState: { errors } } = useFormContext()
    const isError = Boolean(errors[inputId])

    return (
        <>
            <div className="input__wrapper"            >
                <label htmlFor={inputId}>{label}</label>
                <select disabled={disable}
                    {...register(inputId)}
                    id={inputId}
                    placeholder={placheHolder}
                    className="w-full p-2 pl-[10px] pr-11"
                    data-border-error={`${isError}`}
                >
                    {options?.filter((option) => !ignoreOptions.includes(option.Value)).map((opt) => (
                        <option value={opt[optId]} key={opt[optId]}>
                            {opt[optLabel]}
                        </option>
                    ))}
                </select>

                <InputTextError error={errors[inputId]} />
            </div>
        </>
    )
}
