import './App.css';
import SignUpForm from './components/SignupFormHook.jsx';
import LoginPage from './components/LoginPage.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import ChangePassword from './components/ChangePassword.jsx';
import EditProfile from './components/EditProfile.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <nav>
            <Link to="/Signup">Sign Up </Link>
            <Link to="/Login">Login </Link>
            <Link to="/Dashboard">Dashboard </Link>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Welcome to the App</h1>} />
        <Route path='/Signup' element={<SignUpForm />}></Route>
        <Route path='/Login' element={<LoginPage />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='ChangePassword' element={<ChangePassword />}></Route>
        <Route path='/EditProfile' element={<EditProfile />}></Route>
        <Route path='/ForgotPassword' element={<ForgotPassword />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
