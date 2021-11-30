import { api, apiInstance } from '../../config/api';

const getAllBooks =async ()=>{
    try{
        const data = await apiInstance.get(`${api.root}${api.getAllBooks}`);
        return data;
    }catch(e){
        console.log(e);
        return e;
    }   
}

export {
    getAllBooks
}