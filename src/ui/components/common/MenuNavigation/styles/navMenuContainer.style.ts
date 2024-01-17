import { Variants, motion } from "framer-motion"
import styled, { css } from "styled-components"

/*----------------------------- config -----------------------------*/

export const WIDTH_MENU = "260px"

export const menuNavVariants: Variants = {
    closed: {
        position: "static",
        marginTop: "16px",
        marginLeft: "18px",
        borderRadius: "8px",
        width: "60px",
        height: "fit-content",
        transition: {
            duration: 0.3,
            stiffness: 400,
        }
    },
    open: {
        position: "relative",
        width: WIDTH_MENU,
        height: "100%",
        margin: "0px",
        borderRadius: "0px",
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 50,
            stiffness: 400,
        }
    }
  }


/*----------------------------- css (mixin) -----------------------------*/

export const headerNavBar = css`    
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.textColor + "25"};
    margin-bottom: .4rem;
    & > svg {
        height: 24px;
        width: 24px;
    }
`

export const shadowDiv = css`
    transition: box-shadow .2s ease;
    // box-shadow: 0 3px 6px rgb(0 0 0 / 12%), 0 3px 6px rgb(0 0 0 / 24%);
    box-shadow: 0 1px 4px rgb(0 0 0 / 12%), 0 1px 6px rgb(0 0 0 / 24%);
`


/*----------------------------- styled (components) -----------------------------*/

export const MenuNavWrapper = styled(motion.nav).attrs(() => ({
    variants: menuNavVariants
})) <{ closed: boolean }>`
    grid-area: menu;
    /* background-color: ${({ theme }) => theme.componentBackgroundColor}; */
    background-color: var(--component_bg);
    overflow-x: hidden;
    
    & >.navBar__modules__wrapper > .modules__container {
        display: flex;
        margin-bottom: .2rem;
    }
    
    & > .navBar__wrapper {
        border-bottom-color: ${({ theme }) => theme.borderColor} !important;
        ${headerNavBar};
        padding: .45rem .6rem;
        justify-content: center;
        
        & > svg {
            cursor: pointer;
            transition: transform .2s linear;
            transform: rotate(90deg);
        }       
    }
    
    ${({ closed }) => closed ? `
        ${shadowDiv}
        & > .navBar__wrapper {
            padding-block: 1rem;
            & > svg {
                transform: rotate(-90deg);
            }
            & > div {
                display: none;
            }
        }
        & > .navBar__modules__wrapper > .modules__container {
            padding: .6rem .4rem !important;
            &  h4 , svg:last-child {
                display: none;
            }
            & > div:first-child {
                margin-inline: 0px !important;
                padding: .8rem .6rem;
                justify-content: center;
            }
        }
    `: `
        z-index: 5;
        ${shadowDiv};
    `}
`