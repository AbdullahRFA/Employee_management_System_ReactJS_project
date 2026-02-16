import React, { useContext, useEffect, useState } from 'react';
import "./App.css"
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from './context/AuthProvider'

// src/App.jsx
// ... (imports)

function App() {
  const authdata = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedUser, setloggedUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedUser(userData.data); // Restore user data on refresh
    }
  }, []);

  const handleLogOut = () => {
    setUser(null);
    setloggedUser(null);
    localStorage.removeItem("loggedInUser");
  };

  const handleLogin = (email, password) => {
    if (authdata) {
      const admin = authdata.admins.find((a) => email == a.email && password == a.pass);
      if (admin) {
        setUser("Admin");
        setloggedUser(admin);
        // Store both role and the admin object
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin", data: admin }));
        return;
      }

      const employee = authdata.employees.find((e) => email == e.email && password == e.pass);
      if (employee) {
        setUser("Employee");
        setloggedUser(employee);
        // Store both role and the employee object
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "Employee", data: employee }));
        return;
      }
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "Admin" && <AdminDashboard handleLogOut={handleLogOut} loggedUser={loggedUser} />}
      {user === "Employee" && <EmployeDashboard handleLogOut={handleLogOut} loggedUser={loggedUser} />}
    </>
  );
}

export default App;