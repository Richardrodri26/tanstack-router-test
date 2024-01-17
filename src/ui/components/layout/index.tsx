
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import Lottie from "lottie-react"
import { Variants, motion } from "framer-motion"
import { NavBarMenu, NavBarTop } from "@components/nav"
import styles from './layout.module.css'
import { usePageAnimation } from "@hooks/useNavigate"
import useGeneral, { useShallowGeneralStore } from "@store/general.store"
import { useVerifyJwtQuery } from "@graph/index"
import { routerPaths } from "@ui/router/routes.config"
import LoadingAnimation from '@utils/animation/lotties/loading-balls.json'

/************************** Config **********************************************/

const loadingTextVariants: Variants = {
    initial: {
        opacity: 0,
        y: -50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 1
        }
    }
}

export const PrincipalLayout = () => {
    // hooks
    const homeLoading = useGeneral((state) => state.homeLoading)
    const mainProps = usePageAnimation()

    return (
        <div className="relative">
            <NavBarTop />

            {(homeLoading) ? (
                <>
                    <dialog className="absolute top-0 left-0 h-full w-full bg-white/60 flex flex-col justify-center items-center z-50">
                        <Lottie className={styles.general__loading} animationData={LoadingAnimation} loop />
                        <motion.p
                            variants={loadingTextVariants}
                            initial="initial"
                            animate="animate"
                            exit="exite"
                            className="text-2xl text-primary">Cargando...</motion.p>
                    </dialog>
                </>
            ) : (null)}

            <main style={{ height: "calc(100vh - 92px)" }} className="flex gap-[18px] -z-10 bg-primary-opacity" >
                <NavBarMenu />
                <motion.section {...mainProps}
                className="flex flex-col w-screen overflow-x-auto gap-2 pt-0 px-2.5 pb-2.5"
                // style={{
                //     display: "flex", width: "100vw", flexDirection: "column",
                //     overflowX: "auto", gap: "0.6rem", padding: "px 10px 10px 10px"
                // }}
                >
                    <Outlet />
                </motion.section>
            </main>
        </div>
    )
}

export const AppGuardLayout = () => {
    const [setLoginUser, logout, isLogged] = useShallowGeneralStore((state) => ([state.setLoginUser, state.logout, state.isLogged]))
    const navigate = useNavigate()
    const location = useLocation()

    const { loading } = useVerifyJwtQuery({
        variables: {
            token: Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION) ?? ""
        },
        onCompleted: (data) => {
            setLoginUser(data.getUserByJWT.data)
        },
        onError: () => {
            navigate("/")
            logout()
        },
        fetchPolicy: "network-only"
    })

    if (loading) return (
        <div className="index__loading" >
            <img src="/loading.svg" alt="" />
            <span>Cargando recursos</span>
        </div>
    )

    if (isLogged === false) return <Navigate to={"/"} />

    if (isLogged) return (<><Outlet />
        {
            location.pathname.includes(routerPaths.admin.path) ? (null) : (<Navigate to={routerPaths.admin.path} />)
        }

    </>)

    return (
        <Outlet />
    )
}