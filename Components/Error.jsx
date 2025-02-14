import { Link } from "react-router-dom";

function Error()
{
    return(
        <>
            <h1>Page Not Found!</h1>
            <Link to={'/'}>
                <button>Back to Home</button>
            </Link>
        </>
    )
}

export default Error;