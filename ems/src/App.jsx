import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from './context/AuthProvider'

function App() {
  const [userData, setUserData] = useContext(AuthContext); // Destructure correctly
  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userDataParsed = JSON.parse(loggedInUser);
      setUser(userDataParsed.role);
      setLoggedUser(userDataParsed.data);
    }
  }, []);

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