import dayjs from "dayjs";
import Cookies from 'js-cookie';
import { ToastyAlert, fireToastyAlert } from "@ui/utils/Alerts";

/**
 * Gets the current date 
 * @returns 
 */
export const getCurrentDate = () => {
  let currentDate = dayjs().format('YYYY-MM-DDTHH:mm')
  return currentDate
}

/**
 * Transform a value into input date format
 * @param value 
 * @returns 
 */
export function formatToDate(value: string) {
  if (!value) return "----"
  return dayjs(value).format("DD/MM/YYYY")
}

/**
 * Download a form by Id
 * @param id 
 */
export const downloadFormById = async (id: number) => {
  const tokenCookie = Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)
  const headers = new Headers({
    Authorization: "Bearer " + tokenCookie,
  });

  try {
    const response = await fetch(`${import.meta.env.VITE_APP_GRAPH}formulario/downloadFormulatio/${id}`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      ToastyAlert.fire("¡Oops, hubo un error en la descarga del documento!", "Por favor, vuelve a intentarlo más tarde", "error")
    }

    const blob = await response.blob();
    const a = document.createElement("a");
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = `documento.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    ToastyAlert.fire("¡Oops, hubo un error en la descarga del documento!", "Por favor, vuelve a intentarlo más tarde", "error")
  }
};

/**
 * Download file
 * @param url string
 * @param fileName string
 */
export const handleDownload = async (url: string, fileName: string) => {
  try {
      const response = await fetch(url);
      const blob = await response.blob();
      const fileUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      link.click();

      URL.revokeObjectURL(fileUrl);
  } catch (error) {
      fireToastyAlert("error", "Hubo un error descargando un archivo")
  }
};

export const formatPesosColombianos = (valor: number): string => {
  if(!valor) return ""
  // Formatear el valor como pesos colombianos
  return `\$${Intl.NumberFormat('es-CO').format(valor)}`;
};



export const downloadAnnexeFromRest = async (mongoId: string, annexeName: string) => {

  const tokenCookie = Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)
  const headers = new Headers({
    Authorization: "Bearer " + tokenCookie,
  });

  try {
    const response = await fetch(`${import.meta.env.VITE_APP_GRAPH}attachment/files/download/${mongoId}`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      ToastyAlert.fire("¡Oops, hubo un error en la descarga del documento!", "Por favor, vuelve a intentarlo más tarde", "error")
      // fireToastyAlert("error","¡Oops, hubo un error en la descarga del documento!")
    }

    const blob = await response.blob();
    const a = document.createElement("a");
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = `${annexeName}`;
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    ToastyAlert.fire("¡Oops, hubo un error en la descarga del documento!", "Por favor, vuelve a intentarlo más tarde", "error")
    // fireToastyAlert("error","¡Oops, hubo un error en la descarga del documento!")
  }
}

/**
 * Function that download a blob variable
 * @param blob 
 * @param type 
 * @param fileName 
 */
export const downloadFile = (blob: Blob, type = "pdf", fileName = "impresión-gov-co") => {
  const url = window.URL.createObjectURL(new Blob([blob]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${fileName}.${type}`)
  document.body.appendChild(link)
  link.click()
  link.parentNode!.removeChild(link)
}

export const downloadImageFromBlob = (blob: Blob, fileName: string) =>  {
  // Create a URL object from the Blob
  const blobURL: string = URL.createObjectURL(blob);

  // Create a download link element
  const downloadLink: HTMLAnchorElement = document.createElement("a");
  downloadLink.href = blobURL;
  downloadLink.download = fileName; // File name for download
  downloadLink.style.display = "none";

  // Add the download link to the document
  document.body.appendChild(downloadLink);

  // Simulate a click on the download link to initiate the download
  downloadLink.click();

  // Revoke the URL object and remove the download link after the download
  URL.revokeObjectURL(blobURL);
  document.body.removeChild(downloadLink);
}


interface Marker {
  latitude: number;
  longitude: number;
}

export const calcularPuntoMedio = (markers: Marker[]): { latitud: number; longitud: number } | null => {
  if ((markers?.length ?? 0) === 0) {
    return null;
  }

  const latitudes = markers.map((marker) => marker.latitude);
  const longitudes = markers.map((marker) => marker.longitude);

  const latitudPromedio = latitudes.reduce((sum, lat) => sum + lat, 0) / latitudes.length;
  const longitudPromedio = longitudes.reduce((sum, lng) => sum + lng, 0) / longitudes.length;

  return { latitud: latitudPromedio, longitud: longitudPromedio };
};

export const generarEnlaceGoogleMaps = (markers: Marker[]): string => {
  const puntoMedio = calcularPuntoMedio(markers);

  if (puntoMedio) {
    return `https://www.google.com/maps?q=${puntoMedio.latitud},${puntoMedio.longitud}`;
  } else {
    return "";
  }
};

export function parseCoordinates(input: string): { latitude: number, longitude: number }[] | [] {
  try {
    const parsedData = JSON.parse(input);
    
    if (Array.isArray(parsedData) && parsedData.every(obj => typeof obj === 'object' && 'latitude' in obj && 'longitude' in obj)) {
      return parsedData as { latitude: number, longitude: number }[];
    }
    
    throw new Error('El formato del string no es un array de objetos con propiedades "latitude" y "longitude".');
  } catch (error) {
    console.error(`Error al parsear el string: ${error}`);
    return [];
  }
}