import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';
import Login from './Login';
import Logout from './Logout';
import Registration from './Registration';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  return (
    <div>
      <h1>Employee Management</h1>
      {loggedIn ? (
        <div>
          <EmployeeForm />
          <EmployeeTable />
          <Logout handleLogout={handleLogout} />
        </div>
      ) : (
        <div>
          {!registered && <Registration setRegistered={setRegistered} />}
          <Login setLoggedIn={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
