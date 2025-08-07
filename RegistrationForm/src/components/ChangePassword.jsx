import React from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
    var navigate = useNavigate();
    const [opass, setOpass] = React.useState("");
    const [npass, setNpass] = React.useState("");
    const [cpass, setCpass] = React.useState("");

    React.useEffect(() => {
        var a = localStorage.getItem("isLoggedIn");
        if (a !== "true") {
            navigate("/Login");
        }
    });

    const doProcess = () => {
        var lpassword = localStorage.getItem("password");
        if (lpassword === opass) {
            if (npass === cpass) {
                if (lpassword == npass) {
                    alert("New password cannot be same as old password");
                }
                else {
                    localStorage.setItem("password", npass);
                    alert("Password changed successfully");
                    navigate("/Dashboard");
                }
            }
            else{
                alert("New password and confirm password do not match");
            }
        }
        else {
            alert("Old password is incorrect");
        }
    }

    return (
        <>
            <h1>Change Password</h1>
            Old Password:<input type="text" onChange={(e) => setOpass(e.target.value)} />
            <br />
            New Password:<input type="text" onChange={(e) => setNpass(e.target.value)} />
            <br />
            Confirm New Password:<input type="text" onChange={(e) => setCpass(e.target.value)} />
            <br />
            <button onClick={doProcess}>Change Password</button>
        </>
    )
}

export default ChangePassword;