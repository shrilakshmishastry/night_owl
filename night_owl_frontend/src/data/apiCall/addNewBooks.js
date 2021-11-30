import { api, apiInstance } from "../../config/api";
const addNewBook = async(data) =>{
    console.log(data)
    try{
        const result = await apiInstance.post(`${api.root}${api.getAllBooks}`,data);
        console.log(result);
        return result;
    }catch(e){
        console.log(e);
        return e;
    }
}
export default addNewBook;