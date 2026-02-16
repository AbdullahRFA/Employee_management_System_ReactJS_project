import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data, loggedUser }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const updateStatus = (status) => {
        const updatedEmployees = userData.employees.map(emp => {
            if (emp.email === loggedUser.email) {
                emp.tasks = emp.tasks.map(task => {
                    if (task.taskTitle === data.taskTitle) {
                        return status === 'complete' 
                            ? { ...task, active: false, complete: true } 
                            : { ...task, active: false, failed: true };
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
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <span className='bg-red-600 text-sm px-3 py-1 rounded font-bold'>{data.category}</span>
                <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 leading-tight h-24 overflow-auto'>{data.taskDescription}</p>
            <div className='flex justify-between mt-6 gap-2'>
                <button onClick={() => updateStatus('complete')} className='bg-green-600 w-full py-2 text-sm rounded-lg font-bold hover:bg-green-700'>Mark as Complete</button>
                <button onClick={() => updateStatus('fail')} className='bg-red-600 w-full py-2 text-sm rounded-lg font-bold hover:bg-red-700'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask