import axios from "axios";

const BASE_URL = "https://rightpayonline.com/bus/getAvailableServices"

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers ={
    Authorization: "bearer "+
    TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params)=>{
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        console.log("data",data)
        return data
    } catch (error) {
        console.log({msg:error.message})
        return error
    }
}