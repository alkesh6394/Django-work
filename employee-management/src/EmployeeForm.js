import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateSalary = (salary) => {
    return !isNaN(salary) && salary !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, salary } = formData;

    // Validate email and salary
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!validateSalary(salary)) {
      alert('Please enter a valid salary (numeric value)');
      return;
    }

    fetch('http://localhost:8000/employees/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('New employee added:', data);
    })
    .catch(error => console.error('Error:', error));

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      salary: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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
        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
