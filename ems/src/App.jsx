import React from 'react';
import "./App.css"
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"

function App(){
  return(
    <>
        <Login />
        {/* <EmployeDashboard /> */}
        {/* <AdminDashboard /> */}
    </>
  )
}
export default App