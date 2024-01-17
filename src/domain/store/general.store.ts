import produce from "immer";
import { create } from "zustand";
import { shallow } from "zustand/shallow"
import { devtools } from "zustand/middleware"
import Cookies from "js-cookie";
import { ResultAuth } from "@domain/graphql";
import { modalsCloseInformation } from "@api/generalApi";
import { SwalAlertWarning } from "@utils/Alerts";

/*------------------- config -------------------*/

export type AlertTypes = 'success' | 'warning' | 'error' | 'working'
export interface IAdvertising {
    isActive: boolean;
    advertisignMsg: string;
    type: AlertTypes;
}

export interface IModalContent {
    type: string;
    content: any;
}

export interface IGeneral {
    userInfo?: ResultAuth
    isLogged?: boolean
    isAdvertisign?: IAdvertising
    modalInformation?: IModalContent[]

    homeLoading?: boolean
}


export interface IGeneralActions {
    setHomeLoading: (isLoading: boolean) => void
    setLoginUser: (data: ResultAuth) => void,
    logout: () => void,
    setAdvertising: (data: IAdvertising) => void
    setModalInformaction: (data?: IModalContent[]) => void
}

/*------------------- store -------------------*/

const useGeneral = create<IGeneral & IGeneralActions>()(devtools((set, get) => ({
    isLogged: undefined,

    setLoginUser: (data) => {
        set(produce((draft: IGeneral) => {
            draft.isLogged = true
            draft.userInfo = data
        }), false, { type: "general/setLoginUser" })
    },
    logout: () => {
        set(produce((draft: IGeneral) => {
            draft.isLogged = undefined
            draft.userInfo = undefined
        }), false, { type: "general/logout" })

        Cookies.remove(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)
        Cookies.remove(import.meta.env.VITE_APP_KEY_COOKIE_USER)
    },
    setAdvertising: (data:IAdvertising) => {
        set(produce((draft: IGeneral) => {
            draft.isAdvertisign = data
        }), false, { type: "general/setAdvertising" })
    },
    setModalInformaction: (data) => {
        const previousModalType = get().modalInformation?.at(0)?.type

        if(previousModalType && modalsCloseInformation.includes(previousModalType)) {
            SwalAlertWarning().fire("¿Desea cancelar el proceso?", 
            "¡La información ingresada se perderá", "warning").then((sweatAlert) => {
                if(sweatAlert.isConfirmed) {
                    set(produce((draft: IGeneral) => {
                        draft.modalInformation = data
                    }), false, { type: "general/setModalInformaction" })
                }
            })
        } else {
            set(produce((draft: IGeneral) => {
                draft.modalInformation = data
            }), false, { type: "general/setModalInformaction" })
        }
    },
    setHomeLoading: (isLoading) => {
        set(produce((draft: IGeneral) => {
            draft.homeLoading = isLoading
        }), false, { type: "general/setHomeLoading" })
    }
    


}), {
    enabled: import.meta.env.DEV,
    anonymousActionType: "general"
}))

/*------------------- store functions -------------------*/

// basic store functions
export const setter = useGeneral.setState;
export const getter = useGeneral.getState;

// hooks selectors
export const isLoged = () => useGeneral((state) => state.isLogged, shallow)
export const getTypeOfUser = () => useGeneral((state) => state.userInfo?.usertype)
export const isAdmin = () => useGeneral((state) => (state.userInfo?.usertype === "Admin"))

/**
 * return general state value and/or funtions implementing a shallow option
 * @param selector funtions selector
 * @returns 
 */
export const useShallowGeneralStore = <U>(selector: (state: IGeneral & IGeneralActions) => U) => {
    return useGeneral(selector, shallow);
};

export default useGeneral