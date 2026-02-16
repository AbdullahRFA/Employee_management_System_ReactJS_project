import React, { useEffect } from 'react';
import "./App.css"
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';

function App(){
  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  })
  return(
    <>
        <Login />
        {/* <EmployeDashboard /> */}
        {/* <AdminDashboard /> */}
    </>
  )
}
export default App