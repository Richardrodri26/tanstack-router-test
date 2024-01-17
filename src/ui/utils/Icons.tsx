import { Variants, motion } from "framer-motion"

/*************** Config *****************/
interface IFramerIcon {
    variants?: Variants
    onFunc?: () => void
    className?: string
}

const ascVariants: Variants = {
    initial: { rotate: 180, opacity: 0, pathLength: 0 },
    animate: { rotate: 0, opacity: 1, pathLength: 1 }, 
    exit: { rotate: 180, opacity: 0, pathLength: 0 },
    
}

const desVariants: Variants = {
    initial: { rotate: 180, opacity: 0, pathLength: 0 },
    animate: { rotate: 0, opacity: 1, pathLength: 1 },
    exit: { rotate: 180, opacity: 0, pathLength: 0 },
}

/*************** Components *****************/
export const AscSortIcon = ({ variants, onFunc, className }: IFramerIcon) => {
    return (
        <motion.svg initial="initial" animate="animate" exit="exit" variants={ascVariants} onClick={onFunc} className={className} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" width="1em" height="1em"><path d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></motion.svg> 
    )
}

export const DescSortIcon = ({ variants, onFunc, className }: IFramerIcon) => {

    return (
        <motion.svg initial="initial" animate="animate" exit="exit"  variants={desVariants} onClick={onFunc} className={className} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" width="1em" height="1em"><path d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></motion.svg>
    )
}