import Lottie from "lottie-react"
import { AnimatePresence, Variants, motion } from "framer-motion";
import useGeneral, { AlertTypes } from '@domain/store/general.store';
import engine from './json/engine.json';
import errorAnimation from './json/error.json'
import warningAnimation from './json/warning.json'
import successAnimation from './json/success.json'

/*------------------------------------------- config -------------------------------------------*/
interface AlertProps {
  type: AlertTypes;
  message: string;
}

const alertMotionVariants: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
}

const AlertComponentClassesType: Record<AlertTypes, { text: string, lottieColor: string, bgColor: string, lottieAnimation: any }> = {
  error: { bgColor: "bg-white", lottieColor: "[&_path]:fill-red-500 [&_path]:stroke-red-500", text: "text-red-500", lottieAnimation: errorAnimation },
  success: { bgColor: "bg-white", lottieColor: "", text: "text-black", lottieAnimation: successAnimation },
  working: { bgColor: "bg-white", lottieColor: "[&_path]:fill-primary [&_path]:stroke-primary", text: "text-black", lottieAnimation: engine },
  warning: { bgColor: "bg-white", lottieColor: "", text: "text-yellow-500", lottieAnimation: warningAnimation },
}

/*------------------------------------------- component -------------------------------------------*/

const AlertComponent = () => {
  const isAdvertisign = useGeneral((state) => (state.isAdvertisign))

  const alertClasses = `fixed top-[110px] right-4 p-3 rounded-md shadow-md w-auto flex gap-2 items-center z-10 bg-white`;

  return (
    <AnimatePresence>
      {
        (isAdvertisign?.isActive) && (
          <motion.div variants={alertMotionVariants} initial="initial" exit="exit" animate="animate" transition={{ duration: 0.2 }} className={alertClasses}>
            <Lottie className={`h-12 ${AlertComponentClassesType[isAdvertisign.type].lottieColor}`} animationData={AlertComponentClassesType[isAdvertisign.type].lottieAnimation} loop />
            <p className={`${AlertComponentClassesType[isAdvertisign.type].text}`}>{isAdvertisign?.advertisignMsg ?? ""}</p>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default AlertComponent;
