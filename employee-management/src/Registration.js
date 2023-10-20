import React, { useState } from 'react';

const Registration = ({ setRegistered }) => {
  const [formData, setFormData] = useState({
    username: '',  // Change from "name" to "username"
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here
    fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Registration Response:', data);

      if (data.access_token) {
        setRegistered(true);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        alert('Registration successful. Please log in.');
      } else {
        alert('Registration failed. Please try again.');
      }
    })
    .catch(error => console.error('Error:', error));

    // Clear the form after submission
    setFormData({
      username: '',  // Change from "name" to "username"
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>  {/* Change from "Name" to "Username" */}
          <input
            type="text"
            name="username"  // Change from "name" to "username"
            value={formData.username}  // Change from "name" to "username"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
