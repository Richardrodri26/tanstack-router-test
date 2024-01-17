import { MenuItem } from "@szhsin/react-menu"
import { AiOutlineEye } from "react-icons/ai"
import { TdActionComponent } from "@components/grilla/utils"
import { useNavigationApp } from "@components/nav/controller"
import { ResponseFindAllUsers } from "@graph/index"


export const GridUserPanelActionsTr = ({ id, data }: { id: number, data: ResponseFindAllUsers }) => {
    // hooks
    const { appMainNavigate } = useNavigationApp()

    const redirect = () => {
        appMainNavigate([{
            label: "Censadores",
            path: "/censo/censadores"
        }, {
            label: `Formularios de ${data.lastname}`,
            path: `/censo/formularios/${id}/?name=${data.firstname}&lastname=${data.lastname}`
        }])
    }

    return (
        <TdActionComponent direction="right" boundingBoxPadding="0 0 10 0">
            <>
                <MenuItem
                    className="hover:bg-primary-opacity hover:text-primary [&>svg]:hover:text-primary"
                    onClick={redirect}
                >
                    <AiOutlineEye /> Ver Formularios censados
                </MenuItem>
            </>
        </TdActionComponent>
    )
}