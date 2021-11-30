import {useNavigate} from 'react-router-dom';
const CardOfBook = ({item}) =>{
 
    const navigate = useNavigate();
    const handleDetailPageRedirection = () =>{
        navigate(`/bookdetails/${item.id}`)
    }
return(
    <div className="book"  onClick={()=>handleDetailPageRedirection()} >
        <h2 className="book-title">
            {item.title}
        </h2>
        <p className="book-author">
            { `by ${item.author_name}`}
        </p>
        <img src={item.cover}
         className="book-cover"
         alt={`${item.title} cover image`} 
         aria-label={`${item.title} by ${item.author_name}`}
         onClick={()=>handleDetailPageRedirection()}
         />
        <p className="book-desc">{`Description: ${item.description }`}</p>
    </div>
);
}
export default CardOfBook;