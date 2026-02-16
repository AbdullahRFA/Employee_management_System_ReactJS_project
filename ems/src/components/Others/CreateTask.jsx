import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function CreateTask() {
    const [userData, setUserData] = useContext(AuthContext)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        // Validation: Check if employee exists
        const employeeExists = userData.employees.find(emp => emp.name === assignTo);
        if (!employeeExists) {
            alert("Employee not found! Please select a name from the list.");
            return;
        }

        const newTask = { 
            taskTitle, taskDescription, taskDate, category, 
            active: false, newTask: true, failed: false, complete: false 
        }

        const data = userData.employees.map((elem) => {
            if (assignTo === elem.name) {
                return { ...elem, tasks: [...elem.tasks, newTask] };
            }
            return elem;
        })
        
        setUserData({...userData, employees: data})
        localStorage.setItem('employees', JSON.stringify(data))

        // Professional Feedback
        alert(`Task "${taskTitle}" assigned to ${assignTo} successfully!`);
        
        setTaskTitle(''); setTaskDate(''); setAssignTo(''); setCategory(''); setTaskDescription('')
    }

    return (
        <div className="mt-10 bg-[#2c2c2c] p-8 rounded-xl shadow-lg border border-gray-800">
            <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
                <div className="w-1/2 flex flex-col gap-4 px-2">
                    <div>
                        <h3 className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-tighter">Task Title</h3>
                        <input required value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} className="w-full bg-transparent border-gray-700 border py-2.5 px-4 rounded-lg outline-none focus:border-emerald-500 transition-all" type="text" placeholder="e.g. Design Dashboard" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-tighter">Date</h3>
                        <input required value={taskDate} onChange={(e)=>setTaskDate(e.target.value)} className="w-full bg-transparent border-gray-700 border py-2.5 px-4 rounded-lg outline-none focus:border-emerald-500 transition-all" type="date" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-tighter">Assign to</h3>
                        <input list="employee-list" required value={assignTo} onChange={(e)=>setAssignTo(e.target.value)} className="w-full bg-transparent border-gray-700 border py-2.5 px-4 rounded-lg outline-none focus:border-emerald-500 transition-all" type="text" placeholder="Start typing employee name..." />
                        <datalist id="employee-list">
                            {userData?.employees.map((e, idx) => <option key={idx} value={e.name} />)}
                        </datalist>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-tighter">Category</h3>
                        <input required value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full bg-transparent border-gray-700 border py-2.5 px-4 rounded-lg outline-none focus:border-emerald-500 transition-all" type="text" placeholder="Design, Development, etc." />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col px-2">
                    <h3 className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-tighter">Description</h3>
                    <textarea required value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} className="w-full h-48 bg-transparent border-gray-700 border p-4 rounded-lg outline-none focus:border-emerald-500 transition-all resize-none"></textarea>
                    <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] py-3.5 rounded-lg font-bold text-black shadow-lg transition-all">Create Task</button>
                </div>
            </form>
        </div>
    )
}
export default CreateTask