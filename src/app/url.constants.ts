const relacionUrls = [
   {client: 'http://localhost:4200', backend: 'http://localhost:8080/'},
   {client: 'https://centros-recreativos-ufps.herokuapp.com', backend: 'https://centros-recreativos-ufps-back.herokuapp.com/'},
]
const getURlBackend = () => {

   let client = window.location.origin

   let actual = relacionUrls.filter(item => item.client == client)

   if (actual && actual.length==1) {
      return actual[0].backend
   }
   return client
}

export const REST = "https://centros-recreativos-ufps-back.herokuapp.com/";
export const API_REST = REST+"api/";

export const TOKEN = {
   TOKEN_KEY: 'AuthToken',
   USUARIO_KEY: 'AuthUser'
}
export const NAME_APP = "Centros Recreativos - UFPS"
