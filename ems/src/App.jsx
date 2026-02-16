import React, { useContext, useState } from 'react';
import "./App.css"
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
// import AuthContext from './context/AuthProvider';
import { AuthContext } from './context/AuthProvider'


function App(){

const authdata = useContext(AuthContext)
// console.log(data.employees)
console.log(authdata)

  const [user, setUser] = useState(null)

const handleLogin = (email, password) => {
  // Check for Admin (using context data instead of hardcoding)
  const admin = authdata?.admins?.find((a) => email == a.email && password == a.pass);
  
  if (admin) {
    setUser("Admin");
    return;
  } 

  // Check for Employee
  if (authdata && authdata.employees) {
    const employee = authdata.employees.find((e) => {
      return email == e.email && password == e.pass;
    });

    if (employee) {
      setUser("Employee");
    } else {
      alert("Invalid credentials");
    }
  } else {
    alert("Data not loaded yet. Please refresh.");
  }
};

  return(
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "Admin" && <AdminDashboard />}

      {user === "Employee" && <EmployeDashboard />}
    </>
  )
}

export default App