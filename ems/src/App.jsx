import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from './context/AuthProvider'

function App() {
  const [userData, setUserData] = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);

  // Sync loggedUser with userData whenever global state updates
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser && userData) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      
      // If employee, find their latest data from userData
      if (parsedUser.role === 'Employee') {
        const updatedEmployee = userData.employees.find(e => e.email === parsedUser.data.email);
        setLoggedUser(updatedEmployee);
      } else {
        setLoggedUser(parsedUser.data);
      }
    }
  }, [userData]); // Dependency on userData ensures UI updates globally

  const handleLogOut = () => {
    setUser(null);
    setLoggedUser(null);
    localStorage.removeItem("loggedInUser");
  };

  const handleLogin = (email, password) => {
    if (userData) {
      const admin = userData.admins.find((a) => email == a.email && password == a.pass);
      if (admin) {
        setUser("Admin");
        setLoggedUser(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin", data: admin }));
        return;
      }

      const employee = userData.employees.find((e) => email == e.email && password == e.pass);
      if (employee) {
        setUser("Employee");
        setLoggedUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "Employee", data: employee }));
        return;
      }
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "Admin" ? <AdminDashboard handleLogOut={handleLogOut} loggedUser={loggedUser} /> : null}
      {user === "Employee" ? <EmployeDashboard handleLogOut={handleLogOut} loggedUser={loggedUser} /> : null}
    </>
  );
}

export default App;