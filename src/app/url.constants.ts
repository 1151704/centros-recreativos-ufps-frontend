const getURlBackend = () => {

   let client = `${window.location.protocol}//${window.location.hostname}`
   let portBackend = 8089;

   return `${client}:${portBackend}/`
}

export const REST = "https://centros-recreativos-ufps-back.herokuapp.com/";
export const API_REST = REST+"api/";

export const TOKEN = {
   TOKEN_KEY: 'AuthToken',
   USUARIO_KEY: 'AuthUser'
}
export const NAME_APP = "Centros Recreativos - UFPS"
