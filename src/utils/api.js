import axios from "axios";

const BASE_URL = "https://rightpayonline.com/bus/getAvailableServices"


const headers ={
    Authorization: "bearer "
};

export const fetchDataFromApi = async(url,params)=>{
    try {
        const {data} = await axios.post(BASE_URL + url,
            {
                sourceId: "3",
                destinationId: "5",
                doj: "2023-12-30"
                },
            {
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