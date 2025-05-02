
import { axiosInstance } from '../axios/axiosConfig.js';

export const pingApi = async ()=>{

    try{
       const response = await axiosInstance.get('/api/v1/ping');
        if(response.status === 200){
            console.log("Ping API response: ", response.data);  
            return response.data;
        }
    }catch(error){
        console.error("Error in pingApi: ", error);
        throw error;
    }
}