import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { getBookById } from "../data/apiCall/getABookById";

    const BookById = () =>{
        const param = useParams();
        const [bookDetails, setbookDetails] = useState({});
        const [rating, setrating] = useState(0);
        const [loader, setloader] = useState(true);

        async function getTheData(){
            const result = await getBookById(param.id);

            if(result && result.status && result.status === 200){
                setbookDetails(result.data.book_details[0]);
                setrating(result.data.rating[0].rating)
               
                 
            }
            setloader(false) ; 
        }

        useEffect(() => {
            
            getTheData();    
            
        }, []);
        if(loader){
            return <div className="text-center loader">Loading....</div>;
        }
        return(
        <div className="individual">
            {
                bookDetails && bookDetails.title &&
                <div className="individualbook">
                    <div className="individualbook-sub1">
                        <img 
                        className="img-fluid individualbook-cover"
                        src={bookDetails.cover}
                        alt={`${bookDetails.title} cover image`} 
                        aria-label={`${bookDetails.title} by ${bookDetails.author_name}`}
                        />
                        <a 
                        className="btn btn-outline-warning mt-3 individualbook-lookMore"
                        target="_blank" 
                        href={`${bookDetails.website}`}>
                            Look more
                        </a>
                    </div>
                    <div>
                        <h2 className="mt-3 individualbook-title">
                            {` ${bookDetails.title}`}
                        </h2>
                        <p className=" individualbook-author">
                        by 
                        <strong> {`${bookDetails.author_name}`}</strong>
                        </p>
                        <p className="individualbook-rating">
                        Rating: 
                        <strong> {`${rating}/5`}</strong>
                        </p>
                        <p className="ps-2 rounded individualbook-category">
                        {` ${bookDetails.categories}`}
                        </p>
                         <p className="individualbook-isbn border-top border-secondary pt-3">
                            {`ISBN: ${bookDetails.isbn}`}
                        </p>
                        <p className="individualbook-pages border-secondary border-bottom pb-3">
                            {`Pages: ${bookDetails.pages}`}
                        </p>
                        <p className="individualbook-desc">
                            {bookDetails.description}
                        </p>
                    </div>
                </div>
                }
        </div>
        );
        }
        
export default BookById;