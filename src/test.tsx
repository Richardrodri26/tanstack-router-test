
import { LayoutCardGrid } from "@components/layout/utils";
import { Variants, motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { CSSProperties } from "styled-components";
import { BiRefresh } from 'react-icons/bi'


export const Test = () => {

  return (
    <div className="min-h-screen w-full grid place-content-center p-5">
      {/* <div className="h-[90%] w-full max-h-[700px] overflow-y-auto px-5 my-auto">
            <LayoutCardGrid numColsGrid={5} numRowsGrid={5} staggerDelayAnimation={0.1} data={createArray(30)} useDataLengthForRows>
                <div className="w-full h-full bg-white rounded-md flex flex-col justify-center items-center text-black">
                    <AiOutlineAliwangwang className="fill-primary" />

                    texto
                </div>
            </LayoutCardGrid>
            </div> */}


      {/* <LayoutCardGrid numColsGrid={5} numRowsGrid={5} staggerDelayAnimation={0.1} data={createArray(30)} useDataLengthForRows>
                <div className="w-full h-full bg-white rounded-md flex flex-col justify-center items-center text-black">
                    <AiOutlineAliwangwang className="fill-primary" />

                    texto
                </div>
            </LayoutCardGrid> */}



      <LoadingButton text="Enviar" isLoading />


    </div>
  )
}


const rotationVariants: Variants = {
  initial: { rotate: 0, },
  animate: {
    opacity: 1,
    rotate: -180,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "loop"
    }
  },
};

const LoadingButton = ({ text, isLoading }: { text: string, isLoading: boolean }) => {

  return (
    <button disabled={isLoading} className={`flex gap-1 items-center text-white bg-blue-500 px-3 py-1 rounded-lg ${isLoading ? "disabled:bg-blue-700" : ""}`}>
      {
        isLoading ? (
          <motion.div
            className="relative w-7 h-7 rounded-full"
            variants={rotationVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 2, loop: Infinity, ease: "linear" }}
          >
            <BiRefresh className=" fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 transform scale-x(-1) scale-y(-1)" />
          </motion.div>
        ) : (null)
      }

      {
        isLoading ? "Cargando..." : text
      }
    </button>
  )
}

function createArray(n: number) {
  return Array.from({ length: n }, (_, index) => index);
}

interface ICardCridContainer {
  numColsGrid: number
  numRowsGrid: number
  staggerDelayAnimation: number
}

const CardGrid = ({ numColsGrid, numRowsGrid, staggerDelayAnimation }: ICardCridContainer) => {
  const numCols = numColsGrid; // Número de columnas
  const numRows = numRowsGrid; // Número de filas
  const staggerDelay = staggerDelayAnimation; // Retraso entre animaciones

  const renderCards = useMemo(() => {
    const cardsConfig = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const delay = (row + col) * staggerDelay
        cardsConfig.push({ row, col, delay })
      }
    }

    return cardsConfig;
  }, []);

  return (
    <div
      className="card-grid"
      style={{
        display: 'grid',
        // gridTemplateColumns: `repeat(${numCols}, ${columnWidthPercentage}px)`,
        gridTemplateColumns: `repeat(${numCols}, minmax(230px, 1fr))`,
        gap: '10px',
        margin: '0 auto',
        height: "auto",
      }}
    >
      {
        createArray(9).map((_, index) => {
          const currentCardConfig = renderCards[index]
          return (
            <Card key={`${currentCardConfig.row}-${currentCardConfig.col}`} delay={currentCardConfig.delay} />
          )
        })
      }
    </div>
  );
};




const cardStyles = {
  width: '100%',
  height: '248px',
  backgroundColor: '#3498db',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  borderRadius: '8px',
};

const Card = ({ delay }: { delay: number }) => {
  const variants = {
    hidden: { opacity: 0, x: -100, y: -100, },
    visible: { opacity: 1, x: 0, y: 0, },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay }}
      style={cardStyles}
      className="card"
    >
      {/* Contenido de tu tarjeta */}
    </motion.div>
  );
};
