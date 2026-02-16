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

        const newTask = { 
            taskTitle, 
            taskDescription, 
            taskDate, 
            category, 
            active: false, 
            newTask: true, 
            failed: false, 
            complete: false 
        }

        const data = userData.employees
        
        data.forEach((elem) => {
            if (assignTo === elem.name) {
                elem.tasks.push(newTask)
            }
        })
        
        setUserData({...userData, employees: data})
        localStorage.setItem('employees', JSON.stringify(data))

        setTaskTitle(''); setTaskDate(''); setAssignTo(''); setCategory(''); setTaskDescription('')
    }

    return (
        <div className="mt-10 bg-[#2c2c2c] p-8 rounded-xl">
            <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
                <div className="w-1/2 flex flex-col gap-4 px-2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
                        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className="w-full bg-transparent border-gray-600 border py-2 px-4 rounded" type="text" placeholder="Design UI" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Date</h3>
                        <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className="w-full bg-transparent border-gray-600 border py-2 px-4 rounded" type="date" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
                        <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} className="w-full bg-transparent border-gray-600 border py-2 px-4 rounded" type="text" placeholder="Employee Name" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-1">Category</h3>
                        <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-transparent border-gray-600 border py-2 px-4 rounded" type="text" placeholder="Design, Dev, etc" />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col px-2">
                    <h3 className="text-sm text-gray-300 mb-1">Description</h3>
                    <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className="w-full h-44 bg-transparent border-gray-600 border p-4 rounded resize-none"></textarea>
                    <button className="w-full mt-4 bg-emerald-500 py-3 rounded font-bold">Create Task</button>
                </div>
            </form>
        </div>
    )
}
export default CreateTask