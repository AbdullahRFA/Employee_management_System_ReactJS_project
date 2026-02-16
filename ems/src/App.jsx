import React, { useContext, useEffect, useState } from 'react';
import "./App.css"
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from './context/AuthProvider'

function App() {
  const authdata = useContext(AuthContext)
  const [user, setUser] = useState(null)

  // 1. Fix: Parse the JSON string from localStorage to access the .role property
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser) // Must parse the string back into an object
      setUser(userData.role)
    }
  }, []) // Empty dependency array ensures this runs once on mount

  const handleLogin = (email, password) => {
    if (authdata) {
      // 2. Fix: Check for Admin and set state/localStorage ONLY if found
      const admin = authdata.admins.find((a) => email == a.email && password == a.pass);
      if (admin) {
        setUser("Admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin" }));
        return; // Exit function if admin is found
      }

      // 3. Fix: Check for Employee and set state/localStorage ONLY if found
      const employee = authdata.employees.find((e) => email == e.email && password == e.pass);
      if (employee) {
        setUser("Employee");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "Employee" }));
        return; // Exit function if employee is found
      }

      alert("Invalid credentials");
    } else {
      alert("Data not loaded yet. Please refresh.");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "Admin" && <AdminDashboard />}
      {user === "Employee" && <EmployeDashboard />}
    </>
  )
}

export default App