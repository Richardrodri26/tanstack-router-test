import { motion } from "framer-motion";

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

interface ISwitchProps { divConfig?: React.HTMLAttributes<HTMLDivElement>, isOn: boolean }

/**
 * 
 * @param {ISwitchProps} param0 
 * @returns 
 */
export const SwitchButton = ({ divConfig = {}, isOn }: ISwitchProps) => {
    const { className, ...res } = divConfig;

    return (
        <div {...res} className={`switch__btn__wrapper ${className}`} data-active={`${isOn}`}>
            <motion.div layout transition={spring} />
        </div>
    )
}