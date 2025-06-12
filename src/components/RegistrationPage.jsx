import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';
//import axios from 'axios';

const RegistrationPage = () => {
  const navigate = useNavigate();
  //const [message, setMessage] = useState('');
  //const [respMsg, setRespMsg] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // ---->>>FOR BACKEND CONNECTIVITY

    // const payload = {
    //   fullName: formData.firstName,
    //   surname: formData.surname,
    //   email: formData.email,
    //   contactNumber: formData.contactNumber,
    //   password: formData.password,
    // };

    // try {
    //   console.log('Payload data submitted:', payload);
    //   const response = await axios.post('http://localhost:8081/api/student/signup', payload);
    //    setRespMsg(response.data)
    //   alert(respMsg.toString);
    //   //navigate('/login');
    // } catch (err) {
    //   if (err.response && err.response.data) {
    //     console.error('Server error:', err.response.data);
    //     alert(err.response.data.message || 'Registration failed.');
    //   } else {
    //     console.error('Unexpected error:', err);
    //     alert('Something went wrong. Please try again.');
    //   }
    // }

     alert('You have successfully Registered!');
  };


  return (
    <div className="form-container">
      <h2>REGISTER</h2>
      {/* <p>{respMsg}</p> */}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="surname">SURNAME</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">CONTACT NUMBER</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">CREATE PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="register-btn">
          REGISTER
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-muted small">
          Already have an account?{' '}
          <button
            type="button"
            className="btn btn-link p-0 ms-1"
            onClick={() => navigate('/')}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
