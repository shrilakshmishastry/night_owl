import { useState,useEffect } from "react";
import { getAllBooks } from "../data/apiCall/getBooks";
import CardOfBook from "../presentational/cardOfBook";
const BookListPage = () =>{
    const [booksList, setbooksList] = useState([]);

   async function getTheData() {
    const result = await getAllBooks();
  
    if(result && result.status && result.status === 200){
        setbooksList(result.data);
    } 
   }  

  useEffect(() => {
         getTheData();
  }, []);  
return(
    <div className="list-book">
        
        {
            booksList.length === 0 ?
            <div className="loader">Loading....</div>:
            <></>
        }
        {
            booksList.map((item)=>{
              
                return(
                    <CardOfBook key={item.id} item={item} />
                );
            })
        }

    </div>
);
}

export default BookListPage;