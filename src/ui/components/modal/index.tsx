import Modal, { Props } from "react-modal"
import styled from "styled-components";
import { CloseModalbutton } from "./ModalContent";

/*--------------------------------------- styled ---------------------------------------*/

export const StyleModal = styled(Modal)<{ $customeCss?: string, $isOpen:boolean }>`
    /* width: clamp(400px, 35%, 900px); */
    /* padding: 0.5rem 0.8rem; */

    ${({ $isOpen }) => $isOpen ? "padding: 0.5rem 0.8rem;": "padding: 0;"}
    position: fixed;
  //  top: 50%;
    left: 50%;
   // transform: translate(-50%, -50%);
    border-radius: 10px;
    /* max-width: 1300px; */
    
    max-width: clamp(90%, 90%, 1400px);

    ${({ $customeCss }) => $customeCss ? `${$customeCss}` : ""}

    /*- custome ------------------------------------ */
    background-color: var(--component_bg);
    box-shadow: var(--shadow);

    /*- modal content ------------------------------------ */
    & .close__modal__button {
        position: absolute;
        right: .5rem;
        height: 1.4rem;
        width: 1.4rem;
        cursor: pointer;
        transition: background-color .2s ease-out;
        border-radius: 50%;
        padding: 2px;
        
        overflow-x: hidden;

        :hover {
            color: white;
            background-color: crimson;
            filter: drop-shadow(2px 2px 1px rgb(0 0 0 / 0.4));
        }
    }

    @media (max-width: 992px) {
        max-width: 90%;
    }

    @media (max-width: 480px) {
        max-width: 90%;
    }
`

/*--------------------------------------- config ---------------------------------------*/

StyleModal.setAppElement('#root');

interface ICustomeModal extends Props {
    closeButton?: boolean
    customeCss?: string
}

/*--------------------------------------- component ---------------------------------------*/

export const CustomeModal = (props: ICustomeModal) => {
    const { closeButton, customeCss, children, ...res } = props

    return (
        <StyleModal {...res} $isOpen={res.isOpen} overlayClassName="modal__overlay" closeTimeoutMS={300} >
            {closeButton ? <CloseModalbutton onRequestClose={res.onRequestClose} /> : null}

            {children}
        </StyleModal>
    )
}