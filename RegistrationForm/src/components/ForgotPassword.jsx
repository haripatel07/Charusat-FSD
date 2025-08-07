import React from 'react';

function ForgotPassword(){
    const [email, setEmail] = React.useState("");
    const [msg, setMsg] = React.useState("");
    const doProcess = () => {
        var storedEmail = localStorage.getItem("email");
        if (storedEmail === email){
            setMsg("Your password is: " + localStorage.getItem("password"));
        }
        else{
            alert("Email not found");
            setMsg("");
        }
    }
    return(
        <>
            <h1>Forgot Password</h1>
            Enter your email : <input type ="text" onChange = {(e) => setEmail(e.target.email)}/>
            <br />
            <button onClick={doProcess}>Get Password</button>
            <br />
            {msg && <p>{msg}</p>}
        </>
    )

}

export default ForgotPassword;