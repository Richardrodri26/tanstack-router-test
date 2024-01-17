import { INavMenuOptions } from "@ui/components/nav/nav.store"

/*------------------------------  Config ------------------------------------------*/


export const routerPaths = {
    home: { path: "/", label: "Inicio de sesión" },
    admin: {
        path: "/censo", label: "Inicio", children: {
            forms: { path: "formularios", label: "Formularios", permission: ["Funcionario"] },
            formsAll: { path: "formularios/todos", label: "Formularios", permission: ["Admin"] },
            censadores: { path: "censadores", label: "Ver censadores", permission: ["Admin"] },
            establishment: { path: "establecimientos", label: "Establecimientos", permission: ["Admin"] }
        }
    }
    
}

export const adminRoutes = routerPaths.admin.children

/*------------------------------  Functions ------------------------------------------*/
/**
 * Function that recursively return INavMenuOptions[]
 * options for aside navBar
 * @param children 
 * @returns 
 */
export const getMenuOptions = (children = adminRoutes) => {
    const adminRouteEntries = Object.entries(children)

    const menuOptions: INavMenuOptions[] = adminRouteEntries.map((routeEntry) => {
        const [Key, Value] = routeEntry as any
        let children;

        if(Value.children) {
            children = getMenuOptions(Value.children)
        }

        return ({
            key: Key,
            label: Value.label,
            path: Value.path,
            permission: Value.permission,
            children: children
        })

    })
    
    return menuOptions
}