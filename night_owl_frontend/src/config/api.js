import axios from "axios";

const api = {
    root:"http://localhost:8000",
    getAllBooks:"/api/books",    
};

const headers = {
    'Content-Type':'application/json'
};

const apiInstance = axios.create({
    baseURL: api.root,
    headers,
});

export {
    api,
    apiInstance
};