import React, { useState } from 'react';
import "./App.css"
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"

function App(){

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {

    if(email === "shakibrybmn@gmail.com" && password === "123"){
      setUser("Admin")
    }
    else if(email === "shakib@gmail.com" && password === "123"){
      setUser("Employee")
    }
    else{
      alert("Invalid credentials")
    }
  }

  return(
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "Admin" && <AdminDashboard />}

      {user === "Employee" && <EmployeDashboard />}
    </>
  )
}

export default App