import { useNavigate } from "react-router-dom"

/*------------------------------------ config ------------------------------------*/

export interface IBreadcrum {
    label: string;
    path: string;
    id?: string;
}

/*------------------------------------ hooks ------------------------------------*/

/**
 * app navigate hook functionality
 * update the breadcrum component
 * @returns 
 */
export const useNavigationApp = () => {
    // hooks
    const navigate = useNavigate()

    /**
     * update the breadcrum by first time
     * @param initialCrumbs [current breadcrum, go to breadcrum]
     * @description the redirection go to the last object from { initialCrumbs }
     */
    const appMainNavigate = (initialCrumbs: IBreadcrum[]) => {
        const paramCrumb = new URLSearchParams(initialCrumbs.map(crumb => ["crumb", JSON.stringify(crumb)]))
        navigate(initialCrumbs.at(-1)!.path + "&" + paramCrumb.toString())
    }

    return {
        appMainNavigate
    }
}