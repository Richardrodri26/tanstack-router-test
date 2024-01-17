import { useEffect } from 'react';
import { create } from 'zustand'
import { shallow } from 'zustand/shallow';
import { getTypeOfUser } from '@domain/store/general.store';
import { getMenuOptions } from '@ui/router/routes.config';
import produce from 'immer';

/*------------------- Interfaces  ----------------------*/
export interface INavMenuOptions {
    label: string;
    key: string;
    path: string;
    permission: string[];
    children?: INavMenuOptions[]
}
interface INavMenu {
    navMenuStatus: boolean;
    navMenuOptions: INavMenuOptions[]
    navMenuSubModule?: INavMenuOptions
    isSubModuleActive: boolean

    filterMenuOptions?: INavMenuOptions[]
}

interface INavMenuActions {
    changeNavMenuStatus: () => void;
    setNavMenuSubModule: (navOption?: INavMenuOptions) => void;
    changeSubModuleStatus: () => void;
    setFilteredMenuOptions: (menuOptions?: INavMenuOptions[]) => void
    setMenuOptions: (menuOptions: INavMenuOptions[]) => void
}

/*------------------- Storage  ----------------------*/

const useNavMenu = create<INavMenu & INavMenuActions>((set) => ({
    navMenuStatus: false,
    navMenuOptions: [],
    isSubModuleActive: false,


    changeNavMenuStatus: () => set((state) => ({ navMenuStatus: !state.navMenuStatus })),
    changeSubModuleStatus: () => set((state) => ({ isSubModuleActive: !state.isSubModuleActive })),

    setNavMenuSubModule: (navOption) => {
        set(produce((draft: INavMenu) => {
            draft.navMenuSubModule = navOption
        }), false)
    },

    setFilteredMenuOptions: (menuOptions) => {
        set(produce((draft: INavMenu) => {
            draft.filterMenuOptions = menuOptions
        }))
    },
    setMenuOptions: (menuOptions) => {
        set(produce((draft: INavMenu) => {
            draft.navMenuOptions = menuOptions
        }))
    }
}))

/*------------------- hooks  ----------------------*/

/**
 * Hook that return filtered options by user's type
 * @returns INavMenuOptions[]
 */
export const useNavigationOptions = () => {
    const typeOfUser = getTypeOfUser()
    const [setFilteredMenuOptions, setMenuOptions, navMenuOptions] = useShallowNavMenuStore((state) => ([state.setFilteredMenuOptions, state.setMenuOptions, state.navMenuOptions]))

    // set menu options
    useEffect(() => {
        const defaultMenuOptions = getMenuOptions()
        const optionsToShow = defaultMenuOptions.filter((option) => option.permission.includes(typeOfUser!))
        setFilteredMenuOptions(optionsToShow)
        setMenuOptions(optionsToShow)

    }, [typeOfUser])

    // this handle func it's for search input in NavBarMenu
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase()
        const filteredOptions = navMenuOptions?.filter(option => option.label.toLowerCase().includes(value))
        setFilteredMenuOptions(filteredOptions)
    }

    return { handleInput }
}

/**
 * return general state value and/or funtions implementing a shallow option
 * @param selector funtions selector
 * @returns 
 */
export const useShallowNavMenuStore = <U>(selector: (state: INavMenu & INavMenuActions) => U) => {
    return useNavMenu(selector, shallow);
};
export default useNavMenu