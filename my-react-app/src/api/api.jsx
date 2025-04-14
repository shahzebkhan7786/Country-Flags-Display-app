import axios from "axios"

export const BACKENDPOINT="https://xcountries-backend.azurewebsites.net/all"

export default async function countriesData(){
    try{
        const response= await axios.get(`https://xcountries-backend.azurewebsites.net/all`)
        return response.data
    }catch(e){
        console.error(e)
    }
}
