import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Oops!! G*a mara kheye gelam.</h1>
            <p>{error.statusText || error.message}</p>
            {error.status ===404 && <div>
                <h3>Page not found</h3>
                <p>Go back</p>
                <Link to="/"><button>Go back</button></Link>
                </div>}
        </div>
    );
};

export default ErrorPage;