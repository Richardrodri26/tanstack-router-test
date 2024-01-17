import { useRef } from "react";
import { ControlledMenu, MenuItem, SubMenu, useHover, useMenuState } from '@szhsin/react-menu';
import { NavLink, useNavigate } from "react-router-dom";
import { NavBarMenuIconsController } from "./controller/iconController";
import { INavMenuOptions, useShallowNavMenuStore } from "./nav.store";

/**
 * Menu Item for AsideBar Menu
 * @param param0 
 * @returns 
 */
export const SmallMenuItem = ({ menuOption }: { menuOption: INavMenuOptions }) => {
    const ref = useRef(null);
    const [menuState, toggle] = useMenuState({ transition: true });
    const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

    const navigate = useNavigate()

    return (
        <div ref={ref} {...anchorProps} className="h-10 mb-2 hover:cursor-pointer flex justify-center items-center mx-auto group">
            <NavLink to={menuOption.path} className={({ isActive }) => `w-4/5 [&>svg]:mx-auto [&>svg]:h-6 hover:cursor-pointer group-hover:text-white group-hover:bg-primary p-2 rounded-lg transition-all ${isActive ? "text-primary bg-primary-opacity" : ""}`}>
                {NavBarMenuIconsController[`${menuOption.key}`]}
            </NavLink>

            <ControlledMenu
                className={"select-none text-sm p-0 [&>ul]:p-0"}
                {...hoverProps}
                {...menuState}
                anchorRef={ref}
                align="center"
                direction="right"
                boundingBoxPadding="0 0 0 60"
                onClose={() => toggle(false)}
            >
                <MenuItem className={"!p-0 hover:bg-primary-opacity"} onClick={() => { navigate(menuOption.path) }} >


                    {
                        (menuOption.children !== undefined) ? (
                            <SubMenu align="end" label={"children"}>
                                {menuOption.children.map((option) => {
                                    return (
                                        <MenuItem key={option.label}>{option.label}</MenuItem>
                                    )
                                })}
                            </SubMenu>
                        ) : (
                            <NavLink to={menuOption.path} className={({ isActive }) => `[&>svg]:mx-auto [&>svg]:h-6 hover:text-primary p-2 w-full ${isActive ? "text-primary bg-primary-opacity" : ""}`}>
                                {menuOption.label}
                            </NavLink>
                        )
                    }
                </MenuItem>
            </ControlledMenu>
        </div>
    );
};

export const MenuSubModule = () => {
    const [navMenuSubModule, setNavMenuSubModule, changeSubModuleStatus, isSubModuleActive] = useShallowNavMenuStore((state) => ([state.navMenuSubModule, state.setNavMenuSubModule, state.changeSubModuleStatus, state.isSubModuleActive]))
    const hasSubModule = Boolean(navMenuSubModule)

    return (
        <>
            {
                (isSubModuleActive && hasSubModule) ? (
                    <div style={{ height: "calc(100vh - 92px)" }} className="bg-white px-5 w-navBar-width absolute left-navBar-width z-[2] shadow-xl border-r-[1px] border-slate-300">
                        <div className="flex py-2 items-center gap-3 mb-2 border-b-[1px] border-primary [&>svg]:text-primary">
                            {NavBarMenuIconsController[`${navMenuSubModule?.key}`]}
                            <p className="text-xl text-primary">{navMenuSubModule?.label}</p>
                        </div>

                        <div>
                            <ul>
                                {
                                    navMenuSubModule?.children?.map((option) => (
                                        <li className="group" key={option.label}>
                                            {
                                                (option.children) ? (
                                                    <div className="flex items-center gap-2 pb-2 group-hover:text-primary border-b-[1px] border-slate-300 " onClick={() => { setNavMenuSubModule(option) }}>{NavBarMenuIconsController[`${option.key}`]} {option.label}</div>
                                                ) : (
                                                    <NavLink onClick={() => { setNavMenuSubModule(); changeSubModuleStatus(); }} className={({ isActive }) => `flex items-center gap-2 pb-2 group-hover:text-primary  border-b-[1px] border-slate-300 ${isActive ? "text-primary" : ""}`} to={option.path} >{NavBarMenuIconsController[`${option.key}`]} {option.label}</NavLink>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ) : (
                    null
                )
            }
        </>
    )
}