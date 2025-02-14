import { Link } from "react-router-dom";

function Book({data})
{
    return (
        <div className="book">
            <h3>{data.title}</h3>
            <img src={data.coverImage} alt={data.title} />
            <p>Author: {data.author}</p>
            <p>Category: {data.category}</p>
            <Link to={`/book/${data.id}`}><button>View Details</button></Link>
        </div>
    );
}

export default Book;