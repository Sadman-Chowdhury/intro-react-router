import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>User detail: {name}</h2>
            <p>Website: {website}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;