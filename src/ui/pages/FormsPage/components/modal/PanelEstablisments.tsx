import { Grilla } from "@grilla/index"
import { useGridInfoGraphql, UtilLoadingTbody, UtilErrorTbody, UtilLayoutEmptyDataTbody, TrGridAuxColumn } from "@grilla/utils"
import TagStateComponent from "@utils/Tags"
import { SiGooglemaps } from 'react-icons/si'
import { GridEstablismentActionsTr } from "../Elements"
import { useShallowGeneralStore } from "@store/general.store"
import { establismentPanelGridConfig } from "@pages/FormsPage/controller/constant/formGridPanel.config"
import { useGetEstablishmentsFromFormByIdQuery, TypeDatailsFormulatio, Establecimiento, GetEstablishmentsFromFormByIdQuery } from "@domain/graphql"
import { LazyImage } from "@common/rawElements"
import { formatPesosColombianos, formatToDate, generarEnlaceGoogleMaps, parseCoordinates } from "@services/utility"

const PanelEstablismentsContent = () => {
    return (
        <div className="px-4 py-2 overflow-x-auto">
            <h2 className="text-3xl font-bold mb-5">Establecimientos Registrados</h2>
            <div className='!min-h-[480px] !max-h-[80%] z-20 flex flex-col [&>*[data-table="true"]]:flex-1 pb-2'>

                <Grilla withoutTopActions withoutBottomActions defaultPagination={{
                    limit: "10"
                }} url="" thead={establismentPanelGridConfig} >
                    <>
                        <PanelEstablismentsTBody />
                    </>
                </Grilla>

            </div>
        </div>
    )
}

/**
 * TBody For PanelEstblismentsContent
 * @returns 
 */
export const PanelEstablismentsTBody = () => {
    // hooks
    const [modalInformation] = useShallowGeneralStore((state) => ([state.modalInformation![0]]))
    const { queryParams, changeFooterPaginate } = useGridInfoGraphql()
    const { data, loading, error } = useGetEstablishmentsFromFormByIdQuery({
        variables: {
            args: {
                id: modalInformation.content,
                type: TypeDatailsFormulatio.Establecimientos
            },
            opt: queryParams
        },
        onCompleted: (data) => {
            changeFooterPaginate(data.getDetailFormulatio?.meta!)
        },
        fetchPolicy: "cache-and-network", nextFetchPolicy: "cache-first",
    })

    // components

    if (loading) return <UtilLoadingTbody />
    if (error) return <UtilErrorTbody errMsn={error.message} />
    if (!data || data.getDetailFormulatio?.establecimientos?.length === 0) return <UtilLayoutEmptyDataTbody />

    return (
        <tbody>
            {
                data.getDetailFormulatio?.establecimientos?.map((establish) => (
                    <PanelEstablishmentContentTr key={establish?.nombre} data={establish as Partial<Establecimiento>} />
                ))
            }
        </tbody>
    )
}

/**
 * Tr for PanelEstablishmentContent
 * @param param0 
 * @returns 
 */
export const PanelEstablishmentContentTr = ({ data }: { data: Partial<Establecimiento> }) => {
    return (
        <tr>
            <GridEstablismentActionsTr data={data} />
            <TrGridAuxColumn data={data} />
            <td className="flex justify-center items-center !px-0"><TagStateComponent value={data.al_dia_icat ? "Pagado" : "Por Pagar"} /> </td>
        </tr>
    )
}

export const PanelEstablismentsContentAlternative = () => {

    return (
        <>
            <div className="px-4  overflow-x-auto">
                <h2 className="text-3xl font-bold mb-5">Establecimientos Registrados</h2>
                {/* <div className='min-w-sm md:min-h-[480px] max-h-[800px] md:max-h-[80%]  max-w-sm md:max-w-full md:w-[1200px] z-20 flex flex-col [&>*[data-table="true"]]:flex-1 pb-2'> */}
                <div className='min-h-[300px] min-w-sm max-h-[800px] w-[800px] md:max-h-[80%]  max-w-sm md:max-w-full md:w-[1200px] z-20 flex flex-col [&>*[data-table="true"]]:flex-1 overflow-x-hidden'>

                    <PanelEstablismentsAlternativeContent />

                </div>
            </div>
        </>
    )
}

const PanelEstablismentsAlternativeContent = () => {
    // hooks
    const [modalInformation] = useShallowGeneralStore((state) => ([state.modalInformation![0]]))
    const { queryParams, changeFooterPaginate } = useGridInfoGraphql()
    const { data, loading, error } = useGetEstablishmentsFromFormByIdQuery({
        variables: {
            args: {
                id: modalInformation.content,
                type: TypeDatailsFormulatio.Establecimientos
            },
            opt: queryParams
        },
        onCompleted: (data) => {
            changeFooterPaginate(data.getDetailFormulatio?.meta!)
        },
        fetchPolicy: "cache-and-network", nextFetchPolicy: "cache-first",
    })

    if (loading) return <></>
    if (error) return <></>


    return (
        <>
            <div className="max-w-sm md:max-w-full w-full h-full flex flex-col md:flex-row gap-4">
                <EstablishmentInfoCard data={data!} />

                <EstablishmentImageContainer data={data!} />
            </div>

        </>
    )
}

const EstablishmentInfoCard = ({ data }: { data: GetEstablishmentsFromFormByIdQuery }) => {
    const establishmentData = data.getDetailFormulatio?.establecimientos![0]
    const formatCoords = parseCoordinates(data.getDetailFormulatio?.establecimientos![0]?.geolocalizacion!)
    const urlMap = formatCoords.length == 0 ? "" : generarEnlaceGoogleMaps(formatCoords!)
    const disableCoordAction = formatCoords.length == 0

    const goToMaps = () => {
        if(disableCoordAction) return
        window.open(urlMap!, "__blank")
    }

    return (
        <>
            {/* <div className="max-w-xs md:max-w-sm p-6 max-h-[500px] bg-white border border-gray-200 rounded-lg shadow"> */}
            <div className="max-w-xs md:w-1/3 md:max-w-[33.33%] flex flex-col py-2">
                <div>
                    <label className="text-sm text-gray-600">Nombre del Establecimiento:</label>
                    <p className="font-medium">{establishmentData?.nombre}</p>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div>
                        <label className="text-sm text-gray-600">Dirección:</label>
                        <p className="font-medium">{establishmentData?.direccion}</p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Fecha de apertura:</label>
                        <p className="font-medium">{formatToDate(establishmentData?.fecha_apertura)}</p>
                    </div>
                </div>

                <div>
                    <label className="text-sm text-gray-600">Ingreso Promedio Mensual:</label>
                    <p className="font-medium">{formatPesosColombianos(establishmentData?.ingreso_promedio_mensual ?? 0)}</p>
                </div>

                <div>
                    <label className="text-sm text-gray-600">No. Empleados:</label>
                    <p className="font-medium">{establishmentData?.numero_empleados}</p>
                </div>

                <div>
                    <label className="text-sm text-gray-600">¿Pago ICAT?:</label>
                    <TagStateComponent value={establishmentData?.al_dia_icat ? "Pagado" : "Por Pagar"} />
                </div>

                <button disabled={disableCoordAction} type="button" className="btn flex gap-1 items-center ml-auto !mt-auto" onClick={goToMaps} >Ver geolocalización <SiGooglemaps /></button>

            </div>

            

            {/* </div> */}
        </>
    )
}

const EstablishmentImageContainer = ({ data }: { data: GetEstablishmentsFromFormByIdQuery }) => {

    return (
        <div className="max-w-xs md:w-2/3 md:max-w-[66.666667%] flex-1 px-2 py-5 bg-primary-opacity rounded-lg justify-around  my-auto items-center flex flex-col gap-3 md:px-4 md:flex-row  overflow-x-hidden md:max-h-[600px]">
            <LazyImage customClass="flex-1 max-w-full md:max-w-[40%] max-h-[350px] overflow-hidden" imgName="Establecimiento" url={`${import.meta.env.VITE_APP_GRAPH}attachment/files/download/${data.getDetailFormulatio?.establecimientos![0]?.foto_predio_mongo_id}`} />
            <LazyImage customClass="flex-1 max-w-full md:max-w-[40%] max-h-[350px] overflow-hidden" imgName="Localización" url={`${import.meta.env.VITE_APP_GRAPH}attachment/files/download/${data.getDetailFormulatio?.establecimientos![0]?.foto_predio_mongo_maps_id}`} />
        </div>
    )
}



export default PanelEstablismentsContent