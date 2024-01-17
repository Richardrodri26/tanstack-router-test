import { useNavigate } from "react-router"
import { FaUserCircle } from "react-icons/fa"
import { Breadcrumb } from "@components/nav"
import { generalStyles } from "@css/index"
import { useShallowGeneralStore } from "@store/general.store"
import { adminRoutes } from "@ui/router/routes.config"

const HomePage = () => {
  const [userInfo] = useShallowGeneralStore((state) => ([state.userInfo]))
  const isAdmin = userInfo?.usertype === "Admin"

  const navigate = useNavigate()

  return (
    <>
      <Breadcrumb />
      <h1 className={generalStyles.title__grid}>Bienvenido a Censo Web, {userInfo?.firstname} {userInfo?.lastname}</h1>

      <div className="mx-auto flex flex-col justify-center items-center h-72 min-w-[300px] gap-9 bg-white rounded-xl p-10 shadow-lg">

        <div className="[&>svg]:w-11 [&>svg]:h-11 [&>svg]:text-primary rounded-full text-center">
          <FaUserCircle />
        </div>

        <div className="flex flex-col gap-5 items-center">
          <p>{userInfo?.firstname} {userInfo?.lastname}</p>
          <p>Tipo de usuario: {userInfo?.usertype}</p>
          <button onClick={() => { navigate(isAdmin ? adminRoutes.censadores.path : adminRoutes.forms.path) }} className="btn"> Continuar</button>
        </div>
      </div>
    </>
  )
}

export default HomePage

