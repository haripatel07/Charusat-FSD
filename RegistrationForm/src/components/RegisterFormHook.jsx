//Hooks
import '../App.css';
import { useState } from 'react';

function RegisterForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    semester: '',
    gender: '',
    message: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validations using if, if-else
    if (
      form.name === '' ||
      form.email === '' ||
      form.mobile === '' ||
      form.semester === '' ||
      form.gender === '' ||
      form.message === '' ||
      form.password === '' ||
      form.confirmPassword === ''
    ) {
      setError('Please fill all fields');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Invalid email format');
      return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
      setError('Mobile number must be 10 digits');
      return;
    }

    if (!form.agree) {
      setError('Please agree to Terms & Conditions');
      return;
    }

    // localStorage
    localStorage.setItem('registrationData', JSON.stringify(form));
    setError('');
    alert('Registration Successful!');
    setForm({
      name: '',
      email: '',
      mobile: '',
      semester: '',
      gender: '',
      message: '',
      password: '',
      confirmPassword: '',
      agree: false,
    });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} />
        </label>

        <label>
          Mobile:
          <input type="text" name="mobile" placeholder="Enter Mobile No" value={form.mobile} onChange={handleChange} />
        </label>

        <label>
          Semester:
          <select name="semester" value={form.semester} onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </label>

        <label>
          Gender:
          <input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} /> Female
        </label>

        <label>
          Message:
          <textarea name="message" placeholder="Enter Message" value={form.message} onChange={handleChange}></textarea>
        </label>

        <label>
          Password:
          <input type="password" name="password" placeholder="Enter Password" value={form.password} onChange={handleChange} />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </label>

        <label>
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
          I Agree Terms & Conditions
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;