import { Fragment, useMemo } from "react"
import { useNavigate, NavLink, useSearchParams, Link } from "react-router-dom"
import { MenuButton, MenuItem } from "@szhsin/react-menu"
import { SlArrowRight } from 'react-icons/sl'
import { AiOutlineRollback } from "react-icons/ai"
import { LiaUserSolid } from "react-icons/lia"
import { IoIosLogOut } from "react-icons/io"
import { MenuList } from "@components/styled"
import { MenuSubModule, SmallMenuItem } from "./Elements"
import { MenuNavWrapper } from "@common/MenuNavigation/styles/navMenuContainer.style"
import styles from "./nav.module.css"
import { useShallowGeneralStore } from "@domain/store/general.store"
import useNavMenu, { useNavigationOptions, useShallowNavMenuStore } from "./nav.store"
import { NavBarMenuIconsController } from "./controller/iconController"
import { IBreadcrum } from "./controller"
import { routerPaths } from "@ui/router/routes.config"

export const NavBarMenu = () => {
  // hooks
  const { handleInput } = useNavigationOptions()
  const [statusMenu, setNavMenuSubModule, _, changeSubModuleStatus, filterMenuOptions] = useShallowNavMenuStore((state) => ([state.navMenuStatus, state.setNavMenuSubModule, state.changeNavMenuStatus, state.changeSubModuleStatus, state.filterMenuOptions]))

  return (
    <div className="flex">
      <MenuNavWrapper closed={!statusMenu} animate={!statusMenu ? "closed" : "open"} initial="closed">
        <div onClick={() => { setNavMenuSubModule() }} className={styles.nav__menu__header + " " + ""} menu-open={`${statusMenu}`}>
          <MenuIcon />
          <input onChange={handleInput} className="rounded-md" type="text" placeholder="Buscar modulo" />
        </div>

        <div className={styles.nav__menu__content}>
          {
            statusMenu && (
              <div className="flex flex-col gap-0 ">
                {
                  filterMenuOptions?.map((menuOption) => {
                    return (
                      <div className="px-3 py-1 group" key={menuOption.key}>
                        {
                          (menuOption.children) ? (
                            <div className="flex items-center gap-1 group-hover:text-primary" onClick={() => { setNavMenuSubModule(menuOption); changeSubModuleStatus() }}>{NavBarMenuIconsController[`${menuOption.key}`]} {menuOption.label}</div>
                          ) : (
                            <NavLink
                              onClick={() => {
                                setNavMenuSubModule();
                                changeSubModuleStatus();
                              }}
                              className={({ isActive }) => `flex items-center gap-2 group-hover:text-white group-hover:bg-primary p-2 rounded-lg transition-all ${isActive ? "text-primary bg-primary-opacity" : ""}`} to={menuOption.path} >{NavBarMenuIconsController[`${menuOption.key}`]} {menuOption.label}</NavLink>
                          )
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
          }

          {
            !statusMenu && (
              filterMenuOptions?.map((menuOption) => {
                return (
                  <SmallMenuItem menuOption={menuOption} key={menuOption.label} />
                )
              })
            )
          }

        </div>
        {statusMenu ? (<p className="text-xs text-slate-600 absolute bottom-0 left-1/2 -translate-x-1/2 italic">CS3 Inc. - V0.0.3</p>) : (null)}
      </MenuNavWrapper>

      <MenuSubModule />



    </div>
  )
}

// MenuNavWrapper
const MenuIcon = () => {
  const changeNavMenuStatus = useNavMenu((state) => state.changeNavMenuStatus)
  return (<img src="/nav/arrowMenu.svg" onClick={changeNavMenuStatus} />)
}

export const NavBarTop = () => {
  const [userInfo, logout] = useShallowGeneralStore((state) => ([state.userInfo, state.logout]))
  const navigate = useNavigate()

  return (
    <header className="p-4 shadow-md relative">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <NavLink to={routerPaths.admin.path} className="text-primary text-xl font-semibold px-6 hover:underline">Censo</NavLink>

          <div>
            <MenuList gap={6} boundingBoxPadding="10" direction="bottom" transition menuButton={
              <MenuButton className="hover:shadow-md hover:bg-slate-100 px-6 py-2 rounded-xl transition-all">
                <div>
                  <p className="flex items-center gap-1"><LiaUserSolid /> {userInfo?.firstname} {userInfo?.lastname}</p>
                  <p className="text-sm opacity-80">{userInfo?.email}</p>
                </div>
              </MenuButton>
            }>
              <>
                <MenuItem data-danger onClick={() => { logout(); navigate("/") }}>Cerrar Sesión <IoIosLogOut /></MenuItem>
              </>
            </MenuList>
          </div>

        </div>
      </div>
    </header>
  )
}

/**
 * component that indicates the route followed and the way to return
 * @returns 
 */
export const Breadcrumb = () => {
  // hooks
  const navigate = useNavigate()
  const [params, _] = useSearchParams()

  const searchs = useMemo(() => {
    const crumbs = params.getAll("crumb")
    if (crumbs) {
      return { crumbs: crumbs.map(crumb => JSON.parse(crumb) as IBreadcrum) }
    }
    return { crumbs: undefined }
  }, [params])

  if (!searchs.crumbs) return <></>

  return (
    <div className="flex gap-1 items-center mt-3">
      {
        searchs.crumbs.length > 0 ? (
          <>
            {searchs.crumbs.map((crumb, index) => (
              <Fragment key={crumb.id}>
                {index === (searchs.crumbs.length - 1) ? (
                  <p className="text-sm">{crumb.label}</p>
                ) : (
                  <>
                    <Link className="hover:underline text-sm text-primary opacity-70 rounded-lg" to={crumb.path} key={crumb.id}>{crumb.label}</Link>
                    <SlArrowRight className="scale-75" />
                  </>
                )}
              </Fragment >
            ))}

            <div onClick={() => { navigate(-1) }} className="ml-3 flex items-center gap-1 px-2 py-1 bg-primary text-sm text-white rounded-md cursor-pointer">
              <AiOutlineRollback /> Volver
            </div>
          </>
        ) : (null)
      }


    </div>
  )
};