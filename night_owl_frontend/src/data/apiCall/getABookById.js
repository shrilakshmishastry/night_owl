import { api, apiInstance } from '../../config/api';

const getBookById =async (id)=>{
    
    try{
        const data = await apiInstance.get(`${api.root}${api.getAllBooks}/${id}`);
        return data;
    }catch(e){
        console.log(e);
        return e;
    }   
}

export {
    getBookById
}