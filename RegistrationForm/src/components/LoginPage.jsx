import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    var navigate = useNavigate();

    const doCheck = () => {
        var lemail = localStorage.getItem("email");
        var lpassword = localStorage.getItem("password");

        if (lemail == email && lpassword == password){
            localStorage.setItem("isLoggedIn", true);
            navigate("/HomePage");
        }
        else{
            alert("Login Failed")
        }
    }

    return(
        <>
            <h1>Login</h1>
            Email : <input type ='text' onChange={(e) => setEmail(e.target.value)} />
            <br />
            Password : <input type ='text' onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="button" value = "Login" onClick = {doCheck} />
            <br />
            <input type="button" value = "Forgot Password" onClick = {() => navigate("/ForgotPassword")} />
            <br />
        </>
    )

}

export default LoginPage;