import { Breadcrumb } from "@components/nav"
import { UserPagePanelContent } from "@pages/users/components"
import { generalStyles } from "@css/index"
import { NavBarMenuIconsController } from "@components/nav/controller/iconController"

const UserPage = () => {

    return (
        <>
            <Breadcrumb />
            <h1 className={generalStyles.title__grid + " flex gap-2 items-center"}>{NavBarMenuIconsController["censadores"]} Censadores</h1>

            <UserPagePanelContent />
        </>
    )
}

export default UserPage