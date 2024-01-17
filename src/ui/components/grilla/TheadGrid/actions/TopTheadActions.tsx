import { AnimatePresence, Variants, motion } from "framer-motion"
import { MenuList } from "@components/styled/MenuStyled"
import { MdCancel } from "react-icons/md"
import { AscSortIcon, DescSortIcon } from "@utils/Icons"
import { LoadingIcon, DeleteFilterText, ColumnsIcon, OptionsIcon } from "@grilla/utils/Icon"
import styles from "@grilla/grid.module.css"
import { useHandleTextInputWithTimer, useSearchInput, useHandleShowColumn, useGetFilteringColumnList } from "@grilla/hooks"
import { useState, useEffect, forwardRef, Ref } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { useScrollDirection } from "@grilla/hooks/useScrollDirection"

/************************** Config **********************************************/
const sortItemVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.8
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.3,
            delay: 0.1
        },
    },
    exit: {
        y: 20,
        scale: 0.8,
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
    hover: {
        x: [-2, 2, -2, 2, 0],
        transition: {
            duration: 0.3,
        },
    }
}

/**
 * Field that allows a multi-column search
 * set the filt configuration of the grid
 * @returns 
 */
export const QuickSearchGrid = () => {
    const { placheHolderInput, currentValue, handleSearchInput } = useSearchInput()

    const { handleInput, loading, removeSearchInput, searchValue } = useHandleTextInputWithTimer(handleSearchInput, currentValue)

    return (
        <>
            <div className={styles.search__input__wrapper}>
                <label htmlFor="searchInput">Buscar por:</label>

                <div className={styles.row__inputs__wrapper}>
                    <input type="text" id="searchInput" onChange={handleInput} value={searchValue} placeholder={placheHolderInput} />
                    {loading && <LoadingIcon />}
                    {(Boolean(currentValue) && !loading) && <DeleteFilterText remove={removeSearchInput} />}
                </div>
            </div>
        </>
    )
}

/**
 * Displays the menu of columns to hide or show them.
 * set the columns configuration of the grid
 * @returns 
 */
export const HandleColumnsVisibility = () => {
    const { button, showAsideColumnHandler, arrow, thead, changeInput } = useHandleShowColumn()

    return (
        <>
            {button}

            <AnimatePresence>
                {showAsideColumnHandler ? (
                    <motion.div className={styles.aside__column}
                        style={{ zIndex: 9999 }}
                        exit={{ width: 0, opacity: 0 }} initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 300, opacity: 1 }}>
                        <div className={styles.aside__column__header}>
                            <div>
                                <ColumnsIcon />
                                Columnas
                            </div>

                            {arrow}
                        </div>

                        <div className={styles.aside__column__content}>
                            <p>Mostrar columna</p>

                            <ul className={styles.aside__list__columns}>
                                {thead.map((column, index) => (
                                    Boolean(column.param) && (
                                        <div key={`${column.label}`}>
                                            <input type="checkbox" id={column.param} name={`${index}`} checked={!column.hiddeColumn} onChange={changeInput} />
                                            <label htmlFor={column.param}>{column.label}</label>
                                        </div>
                                    )
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    )
}

/**
 * Displays the list actions passed to the grid
 * @param {JSX.Element} children The optional list
 * @returns 
 */
export const TopListActions = ({ children }: { children?: React.ReactNode }) => {
    return (
        <MenuList gap={6} menuButton={<button className={styles.top__button__action}><OptionsIcon />Opciones</button>}>
            {children}
        </MenuList>
    )
}

/**
 * Display the list of columns with filter active
 * @returns 
 */
export const ThFilteringList = () => {
    const { filteringThList, deleteFilter } = useGetFilteringColumnList()

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                }
            }}
            exit={{
                opacity: 0
            }}
            className="flex gap-1 items-center flex-1">
            <AnimatePresence>
                <motion.div
                    layout="position"
                    className="flex gap-1 "
                >
                    {
                        ((filteringThList?.bySort?.length ?? 0) > 0) ? (
                            <AnimatePresence>
                                <motion.p layout className="mr-2" variants={sortItemVariants} initial="initial" animate="animate" exit="exit" >Ordenando por:</motion.p>
                                {
                                    filteringThList?.bySort?.map((th) => {
                                        return (
                                            <motion.div
                                                layout
                                                variants={sortItemVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                whileHover="hover"
                                                className="" key={th.param}>
                                                <p className="py-1 flex items-center gap-1 px-2 text-sm bg-primary text-white rounded-md truncate  max-w-[300px]">
                                                    {th.desc ? (<DescSortIcon />) : (<AscSortIcon />)} {th.label}
                                                    <MdCancel onClick={() => { deleteFilter(th.param) }} className="cursor-pointer hover:scale-110 transition-transform" />
                                                </p>

                                            </motion.div>
                                        )
                                    })
                                }
                            </AnimatePresence>
                        ) : (null)
                    }
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export const NavigationOverflowScroll = forwardRef(
    (
        props: { a: string },
        ref: Ref<HTMLDivElement>
    ) => {
        const { hasOverflow, navigationDirection, scrollToEnd, scrollToInicio } = useScrollDirection(ref as React.RefObject<HTMLDivElement>)
        const [animate, setAnimate] = useState(false)
        
        return (
            <>
    
                <AnimatePresence>
    
                    {
                        (hasOverflow && (navigationDirection.left || navigationDirection.right) ) ? (
                            <>
    
                                <div className="flex items-center gap-1 h-7" >
                                    <div className="flex items-center gap-1 px-2">
    
                                        {
                                            (navigationDirection.left && !navigationDirection.right) && (
                                                <motion.div onHoverStart={() => setAnimate(true)} onHoverEnd={() => setAnimate(false)} className="flex gap-1">
                                                    <motion.p  initial={{ opacity: 0 }} animate={{ opacity: 1, x: animate ? -10 : 0 }} exit={{ opacity: 0 }}
                                                    >Desplazar al inicio</motion.p>
                                                    <motion.button initial={{ rotate: 180 }} animate={{ rotate: 0 }} exit={{ rotate: 180 }} type="button" className="bg-primary p-1 rounded-full" onClick={() => { scrollToInicio() }}><AiOutlineArrowLeft className="fill-white" /> </motion.button>
                                                </motion.div>
                                            )
                                        }
    
                                        {
                                            (navigationDirection.right && !navigationDirection.left) && (
                                                <motion.div onHoverStart={() => setAnimate(true)} onHoverEnd={() => setAnimate(false)} className="flex gap-1">
                                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, x: animate ? -10 : 0 }} exit={{ opacity: 0 }} className="cursor-default" >Desplazar al final</motion.p>
                                                    <motion.button initial={{ rotate: 180 }} animate={{ rotate: 0 }} exit={{ rotate: 180 }} type="button" className="bg-primary p-1 rounded-full" onClick={() => { scrollToEnd() }}><AiOutlineArrowRight className="fill-white" /> </motion.button>
                                                </motion.div>
                                            )
                                        }
    
                                    </div>
                                </div>
                            </>
                        ) : (null)
                    }
    
                </AnimatePresence>
    
            </>
        )
    }
)