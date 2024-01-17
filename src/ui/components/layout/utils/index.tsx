import { cloneElement, useMemo } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";


/******************** Config *****************************/


interface ICardCridContainer {
    numColsGrid: number
    numRowsGrid: number
    staggerDelayAnimation: number
    data: any[];
    children: JSX.Element
    useDataLengthForRows?: boolean
}

const gridCardVariants: Variants = {
    // hidden: { opacity: 0, x: -100, y: -100, },
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0, y: 0, },
};

export const listGridCardUtilAnimation: Variants = {
    hidden: {
        opacity: 0, minHeight: "20vh", transition: {
            when: "beforeChildren",
            delayChildren: 0.05,
            staggerChildren: 0.1,
            height: { duration: 0.1 },
        },
    },
    show: {
        minHeight: "20vh",
        height: "auto",
        display: "grid",
        // gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        alignItems: "center",
        opacity: 1,
        transition: {
            when: "beforeChildren",
            delayChildren: 0.05,
            staggerChildren: 0.1,
            height: { duration: 0.1 },
        },
    },
    exit: { opacity: 0, transition: { duration: 0.1, when: "afterChildren" } },
};


/*********************** Components **********************************/

export const LayoutCardGrid = ({ numColsGrid, numRowsGrid, staggerDelayAnimation, data, children, useDataLengthForRows = false }: ICardCridContainer) => {
    const numCols = numColsGrid; // Número de columnas
    const numRows = useDataLengthForRows ? data.length : numRowsGrid; // Número de filas
    const staggerDelay = staggerDelayAnimation; // Retraso entre animaciones

    const renderCards = useMemo(() => {
        const cardsConfig = [];

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
            
                const delay = ((row + col) * staggerDelay)
                cardsConfig.push({ row, col, delay })
            }
        }

        return cardsConfig;
    }, []);

    return (
        <>
            <motion.div 
                className="grid mx-auto gap-3 h-auto"
                style={{ gridTemplateColumns: `repeat(${numCols}, minmax(230px, 1fr))` }}
            >
                <AnimatePresence>
                    {
                        data.map((itemData, index) => {
                            const currentCardConfig = renderCards[index]
                            return (
                                <motion.div
                                    key={currentCardConfig.delay + 1}
                                    initial="hidden"
                                    animate="visible"
                                    variants={gridCardVariants}
                                    transition={{ duration: 0.5, delay: currentCardConfig?.delay ?? 0 }}
                                    className="w-full h-64 bg-white flex justify-center items-center text-xl rounded-lg"
                                >
                                    {
                                        cloneElement(children, { itemdata: itemData })
                                    }
                                </motion.div>
                            )
                        })
                    }
                </AnimatePresence>
            </motion.div>
        </>
        
    );
};