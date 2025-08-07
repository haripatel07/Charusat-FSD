import React from 'react';

function SignUpForm(){
  const [name, setName] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const doProcess = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("SignUp Done");
  }
  return (
    <>
      <h1>SignUp</h1>
      Name: <input type ='text' onChange = {(e) => setName(e.target.value)}/>
      <br />
      Mobile: <input type ='text' onChange = {(e) => setMobile(e.target.value)}/>
      <br />
      Email: <input type ='text' onChange = {(e) => setEmail(e.target.value)}/>
      <br />
      Password: <input type ='text' onChange = {(e) => setPassword(e.target.value)}/>
      <br />
      <input type = 'button' value = "Sign Up" onClick = {doProcess} />
    </>
  )
}

export default SignUpForm