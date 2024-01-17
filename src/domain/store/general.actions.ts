import Cookies from 'js-cookie'
import produce from "immer"
import { downloadAnnexeFromRest, downloadFormById } from "@domain/services"
import { homeEndpoints } from "@domain/api/generalApi"
import { IGeneral, setter } from "./general.store"
import { loginType } from "@ui/pages/auth/controllers/authSchemas"
import { apolloClient } from 'main.config'
import { CreateTipoEstablecimientoInput, UpdateTipoEstablecimientoInput } from '@graph/index'
import { ToastyAlert } from '@utils/Alerts'

/**
 * Login action and set user's data and its token
 * @param data 
 * @returns 
 */
export const login = async(data: loginType) => {
  try {
    const res = await homeEndpoints.loginUser({
      clave: data.password,
      usuario: data.user
    })

    Cookies.set(import.meta.env.VITE_APP_KEY_COOKIE_SESSION, res?.login?.access_token)
    Cookies.set(import.meta.env.VITE_APP_KEY_COOKIE_USER, JSON.stringify(res.login.result))

    setter(produce((draft: IGeneral) => {
      draft.isLogged = true
      draft.userInfo = res.login.result
    }))

    return true
  } catch (error) {

    return false
  }
}

/**
 * Download form 
 * @param id 
 * @param companyName 
 */
export const downloadForm = async(id: number, companyName: string) => {
  
  setter(produce((draft: IGeneral) => {
    draft.isAdvertisign = {
      isActive: true,
      advertisignMsg: `Se está descargando el formulario de ${companyName}`,
      type: "working"
    }
  }))

    await downloadFormById(id).then(() => {
      
    }).finally(() => {

      setter(produce((draft: IGeneral) => {
        draft.isAdvertisign = {
          isActive: false,
          advertisignMsg: "¡Listo!",
          type: "success"
        }
      }))

    })
}

export const downloadAnnexe = async(mongoId:string, annexeName: string) => {
  // downloadAnnexeFromRest
  setter(produce((draft: IGeneral) => {
    draft.isAdvertisign = {
      isActive: true,
      advertisignMsg: `Se está descargando el formulario de`,
      type: "success"
    }
  }))

    await downloadAnnexeFromRest(mongoId, annexeName).then(() => {
      
    }).finally(() => {

      setter(produce((draft: IGeneral) => {
        draft.isAdvertisign = {
          isActive: false,
          advertisignMsg: "¡Listo!",
          type: "success"
        }
      }))

    })
}

export const changeStatusEstablishmentType = async(id: number, status: boolean) => {
  let alertMsg = status ? "activado" : "anulado"
  let alertErrorMsg = status ? "activación" : "anulación"

  await homeEndpoints.changeStatusEstablishmentType({ id, status }).then(() => {
      ToastyAlert.fire(undefined, `Se ha ${alertMsg} exitosamente`, "success")
    }).catch(() => {
      ToastyAlert.fire(`¡Oops, hubo un error en la ${alertErrorMsg} del tipo de establecimiento!`, "Por favor, vuelve a intentarlo más tarde", "error")
  })

  apolloClient.cache.evict({ fieldName: "getAllTipoEstablecimientos" })

}

export const createEstablishmentType = async(data: CreateTipoEstablecimientoInput) => {

  try {
    await homeEndpoints.createEstablishmentType({ args: data })

    apolloClient.cache.evict({ fieldName: "getAllTipoEstablecimientos" })

  
  } catch (error) {
    ToastyAlert.fire("¡Oops, hubo un error en la creación del tipo de establecimiento!", "Por favor, vuelve a intentarlo más tarde", "error")
  }

  setter(produce((draft: IGeneral) => {
    draft.modalInformation = undefined
  }))

  ToastyAlert.fire(`Tipo de establecimiento: ${ data.nombre }`, "Ha sido creado exitosamente", "success")
}

export const updateEstablishmentType = async(id: number, data: UpdateTipoEstablecimientoInput) => {
  
  try {
    await homeEndpoints.updateEstablishmentType({ id, args: {
      status: data.status,
      descripcion: data.descripcion?.length === 0 ? undefined : data.descripcion,
      nombre: data.nombre?.length === 0 ? undefined : data.nombre
    } })

    apolloClient.cache.evict({ fieldName: "getAllTipoEstablecimientos" })

    ToastyAlert.fire(undefined, "Se ha actualizado la información del tipo de establecimiento correctamente", "success")

  } catch (error) {
    ToastyAlert.fire("¡Oops, hubo un error en la actualización del tipo de establecimiento!", "Por favor, vuelve a intentarlo más tarde", "error")
    
  }

  setter(produce((draft: IGeneral) => {
    draft.modalInformation = undefined
  }))

}