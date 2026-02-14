import React from 'react';
import "./App.css"
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'

function App(){
  return(
    <>
        {/* <Login /> */}
        <EmployeDashboard />
    </>
  )
}
export default App