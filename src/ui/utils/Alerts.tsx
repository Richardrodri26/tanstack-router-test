import Swal, { SweetAlertCustomClass, SweetAlertIcon } from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

const warningIcon = (warningColor: string) => `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
<path d="M38.66 38.41C38.6887 39.014 38.5669 39.6156 38.3056 40.1609C38.0443 40.7062 37.6515 41.178 37.1627 41.5339C36.6739 41.8899 36.1044 42.1188 35.5052 42.2001C34.906 42.2815 34.296 42.2127 33.73 42C33.0402 41.7694 32.4394 41.3296 32.0111 40.7418C31.5828 40.1539 31.3482 39.4473 31.34 38.72C31.34 31.2267 31.34 23.7367 31.34 16.25C31.3761 15.3148 31.77 14.4291 32.4404 13.7761C33.1108 13.123 34.0064 12.7524 34.9422 12.7409C35.8781 12.7293 36.7826 13.0777 37.4689 13.714C38.1552 14.3503 38.5709 15.226 38.63 16.16C38.7 19.93 38.63 23.71 38.63 27.48C38.67 31.09 38.7 34.75 38.66 38.41ZM34.94 57.31C34.2098 57.304 33.4978 57.0815 32.8941 56.6707C32.2904 56.2598 31.8222 55.6791 31.5488 55.002C31.2753 54.3249 31.2089 53.5819 31.3579 52.8671C31.5069 52.1522 31.8647 51.4976 32.3859 50.9862C32.9071 50.4748 33.5684 50.1295 34.2859 49.9941C35.0035 49.8587 35.7451 49.9392 36.4169 50.2255C37.0886 50.5118 37.6604 50.9909 38.0597 51.6023C38.459 52.2137 38.6679 52.9298 38.66 53.66C38.6468 54.6361 38.2485 55.5674 37.5517 56.2511C36.8549 56.9347 35.9162 57.3154 34.94 57.31ZM35 0C28.0777 0 21.3108 2.05271 15.5551 5.89856C9.79934 9.74441 5.3133 15.2107 2.66423 21.6061C0.0151648 28.0015 -0.677952 35.0388 0.672531 41.8282C2.02301 48.6175 5.35644 54.8539 10.2513 59.7487C15.1461 64.6436 21.3825 67.977 28.1718 69.3275C34.9612 70.6779 41.9985 69.9848 48.3939 67.3358C54.7893 64.6867 60.2556 60.2007 64.1014 54.4449C67.9473 48.6892 70 41.9223 70 35C70 25.7174 66.3125 16.815 59.7487 10.2513C53.185 3.68749 44.2826 0 35 0Z" fill="var(--${warningColor}_color)" style="&#10;" />
</svg>`


export const ToastyAlert = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const confirmButtonStyle: { [key: string]: string } = {
    "warning": "warning__sweet",
    "error": "error__sweet",
    "success": "sucess__sweet"
}
    
export const currentCustomeClass = (type: string): SweetAlertCustomClass => ({
    title: `sweet__title ${type} text-3xl font-semibold`,
    cancelButton: `cancel__sweet !rounded-[21px] px-6 py-[8px] text-base font-medium`,
    confirmButton: `!ring-transparent ring-0 !rounded-[21px] px-6 py-[8px] text-base font-medium ${confirmButtonStyle[type]}`,
    icon: "sweet__custome__icon",
    popup: "rounded-xl",
})

export const SwalAlertWarning = (type = "warning", showCancelButton = true) => Swal.mixin({
    showCancelButton: showCancelButton,
    iconHtml: warningIcon(type),
    cancelButtonText: "Cancelar",
    confirmButtonText: "Entendido",
    allowOutsideClick: false,
    focusConfirm: false,
    allowEscapeKey: false,
    customClass: {
        ...currentCustomeClass(type),
    }
})

export const SwalAlertSuccess = Swal.mixin({
    showCancelButton: false,
    iconHtml: "<img src='/alerts/successIcon.svg'/>",
    confirmButtonText: "Entendido",
    customClass: {
        ...currentCustomeClass("success"),
    }
})

export const fireToastyAlert = async (icon: SweetAlertIcon, title: string, functionEnd?: () => void) => {
    await ToastyAlert.fire({
        icon,
        title
    }).finally(() => {
        if (functionEnd) {
            functionEnd();
        }
    })
}
