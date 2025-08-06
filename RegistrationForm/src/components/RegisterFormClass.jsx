// Class component
import React, { Component } from 'react';
import '../App.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
        mobile: '',
        semester: '',
        gender: '',
        message: '',
        password: '',
        confirmPassword: '',
        agree: false,
      },
      error: '',
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      mobile,
      semester,
      gender,
      message,
      password,
      confirmPassword,
      agree,
    } = this.state.form;

    // Validations
    if (
      name === '' ||
      email === '' ||
      mobile === '' ||
      semester === '' ||
      gender === '' ||
      message === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      this.setState({ error: 'Please fill all fields' });
      return;
    }

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      this.setState({ error: 'Invalid email format' });
      return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
      this.setState({ error: 'Mobile number must be 10 digits' });
      return;
    }

    if (!agree) {
      this.setState({ error: 'Please agree to Terms & Conditions' });
      return;
    }

    // Save to localStorage
    localStorage.setItem('registrationData', JSON.stringify(this.state.form));
    this.setState({ error: '' });
    alert('Registration Successful!');

    // Reset form
    this.setState({
      form: {
        name: '',
        email: '',
        mobile: '',
        semester: '',
        gender: '',
        message: '',
        password: '',
        confirmPassword: '',
        agree: false,
      },
    });
  };

  render() {
    const { form, error } = this.state;

    return (
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={form.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Mobile:
            <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile No"
              value={form.mobile}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Semester:
            <select
              name="semester"
              value={form.semester}
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </label>

          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === 'Male'}
              onChange={this.handleChange}
            />{' '}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === 'Female'}
              onChange={this.handleChange}
            />{' '}
            Female
          </label>

          <label>
            Message:
            <textarea
              name="message"
              placeholder="Enter Message"
              value={form.message}
              onChange={this.handleChange}
            ></textarea>
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              value={form.confirmPassword}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={this.handleChange}
            />
            I Agree Terms & Conditions
          </label>

          {error && <p className="error">{error}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
                            }

                            export default RegisterForm;