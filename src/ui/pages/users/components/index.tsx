import { Grilla } from "@grilla/index"
import { TrGridAuxColumn, UtilErrorTbody, UtilLayoutEmptyDataTbody, UtilLoadingTbody, useGridInfoGraphql } from "@grilla/utils"
import { GridUserPanelActionsTr } from "@pages/users/components/Elements"
import userPanelGridConfig from "@pages/users/controller/constant/userGridPanel.config"
import { ResponseFindAllUsers, useGetAllUsersQuery } from "@graph/index"

export const UserPagePanelContent = () => {

    return (
        <>
            <Grilla defaultPagination={{
                limit: "10"
            }} url="" thead={userPanelGridConfig} withHandleColumnsVisibility  >
                <UserPageTBody />
            </Grilla>
        </>
    )
}

const UserPageTBody = () => {
    const { queryParams, changeFooterPaginate } = useGridInfoGraphql()
    const { data, loading, error } = useGetAllUsersQuery({
        variables: {
            opt: queryParams
        },
        fetchPolicy: "cache-and-network", nextFetchPolicy: "cache-first",
        onCompleted: (data) => {
            changeFooterPaginate(data?.findAllUsers?.meta!)
        }
    })

    if (loading && !data) return <UtilLoadingTbody />
    if (error) return <UtilErrorTbody errMsn={error.message} />
    if (!data) return <UtilLayoutEmptyDataTbody  >
        <p>Usted no tiene censadores registrados</p>
    </UtilLayoutEmptyDataTbody>

    return (
        <>
            <tbody>
                {
                    data.findAllUsers?.items.map((user) => (
                        <tr key={`${user.firstname}-${user.lastname}-${user.id}`}>
                            <UserPageTr data={user} />
                        </tr>
                    ))
                }
            </tbody>
        </>
    )
}

const UserPageTr = ({ data }: { data: ResponseFindAllUsers }) => {


    return (
        <>
            <GridUserPanelActionsTr id={data.id!} data={data}/>
            <TrGridAuxColumn data={data} />
        </>
    )
}