import React from 'react';

function EditProfile(){
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");

    React.useEffect(() => {
        var isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            setName(localStorage.getItem("name"));
            setEmail(localStorage.getItem("email"));
            setMobile(localStorage.getItem("mobile"));
        } else {
            alert("You must be logged in to edit your profile.");
        }
    }, []);

    const handleSave = () => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("mobile", mobile);
        alert("Profile updated successfully!");
    };

    return (
        <div>
            <h1>Edit Profile</h1>
            Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            Email:<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            Phone:<input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <br />
            <button onClick={handleSave}>Save Changes</button>
        </div>
    );
}

export default EditProfile;