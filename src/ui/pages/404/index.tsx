import { isLoged } from "@domain/store/general.store"
import { routerPaths } from "@ui/router/routes.config"
import { useNavigate } from "react-router-dom"


const NoFound = () => {
    const navigate = useNavigate()
    const isLoggedUser = isLoged()
    
    return (
        <div style={{ width: "clamp(45ch, 45%, 80ch)", margin: "80px auto", display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
            <h1>¡Oops, la Página no se ha Encontrado!</h1>
            <img src="/noFound.svg" alt="X" style={{ height: "350px", width: "350px" }} />
            <button className="btn" type="button" style={{ width: "fit-content" }} onClick={() => navigate( isLoggedUser ? `${routerPaths.admin.path}` : "/")}>¡Regresar al Inicio!</button>
        </div>
    )
}

export default NoFound