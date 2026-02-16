import React, { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage() 
        const { employees, admins } = getLocalStorage()
        setUserData({ employees, admins })
    }, [])

    // Central function to update any task status globally
    const updateTaskStatus = (employeeEmail, taskTitle, newStatus) => {
        const updatedEmployees = userData.employees.map(emp => {
            if (emp.email === employeeEmail) {
                emp.tasks = emp.tasks.map(task => {
                    if (task.taskTitle === taskTitle) {
                        // Reset all flags first
                        const updatedTask = { ...task, newTask: false, active: false, complete: false, failed: false };
                        // Apply the new status
                        if (newStatus === 'active') updatedTask.active = true;
                        if (newStatus === 'complete') updatedTask.complete = true;
                        if (newStatus === 'failed') updatedTask.failed = true;
                        return updatedTask;
                    }
                    return task;
                });
            }
            return emp;
        });

        setUserData({ ...userData, employees: updatedEmployees });
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    }

    return (
        <AuthContext.Provider value={[userData, setUserData, updateTaskStatus]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider