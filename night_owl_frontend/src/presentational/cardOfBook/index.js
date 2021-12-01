import { useNavigate } from 'react-router-dom';
const CardOfBook = ({ item }) => {

    const navigate = useNavigate();
    const handleDetailPageRedirection = () => {
        navigate(`/bookdetails/${item.id}`)
    }
    return (
        <div className="book" onClick={() => handleDetailPageRedirection()} >
            <h2 className="book-title">
                {item.title}
            </h2>
            <p className=" individualbook-author">
                by
                <strong> {`${item.author_name}`}</strong>
            </p>

            <img src={item.cover}
                className="book-cover"
                alt={`${item.title} cover image`}
                aria-label={`${item.title} by ${item.author_name}`}
                onClick={() => handleDetailPageRedirection()}
            />
            <p className="mt-4 book-desc">{`Description: ${item.description}`}</p>

            <p className="ps-2 rounded individualbook-category">
                {` ${item.categories}`}
            </p>
        </div>
    );
}
export default CardOfBook;