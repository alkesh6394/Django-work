import React, { useState, useEffect } from 'react';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
    fetch('http://localhost:8000/employees/')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/employees/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
      } else {
        throw new Error('Failed to delete');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  // Simplified example of adding an employee
  const addEmployee = (employeeData) => {
    fetch('http://localhost:8000/employees/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Call fetchEmployees to refresh the table
        fetchEmployees();
      } else {
        alert('Failed to add employee');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={fetchEmployees}>Refresh Table</button>
    </div>
  );
};

export default EmployeeTable;
