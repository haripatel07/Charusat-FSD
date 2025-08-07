import React, { useState } from 'react';

function SignupFormHook() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setMessage('Please fill all fields');
      return;
    }
    localStorage.setItem('signupData', JSON.stringify(form));
    setMessage('Signup Successful!');
    setForm({ name: '', email: '', password: '' });
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <br /><br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
        <br /><br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </label>
        <br /><br />
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}