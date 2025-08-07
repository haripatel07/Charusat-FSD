import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Dashboard(){
    const [name, setName] = React.useState("");
    const navigate = useNavigate();
    React.useEffect(() => {
        var isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn){
            setName(localStorage.getItem("name"));
        }
        else{
            navigate('/login')
        }
    }, [])
    return(
        <>
        <h1>Hi {name}</h1>
        <Link to="/changePassword">Change Password</Link>
        <br />
        <Link to="/editProfile">Edit Profile</Link>
        </>
    )
}

export default Dashboard;