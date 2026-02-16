import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data, loggedUser }) => {
    // Destructure the update function from context
    const [,, updateTaskStatus] = useContext(AuthContext)

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl shadow-xl hover:scale-[1.02] transition-transform'>
            <div className='flex justify-between items-center'>
                <span className='bg-red-600 text-xs px-3 py-1 rounded-full font-bold uppercase'>{data.category}</span>
                <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 leading-tight h-24 overflow-auto'>{data.taskDescription}</p>
            <div className='flex justify-between mt-6 gap-2'>
                <button onClick={() => updateTaskStatus(loggedUser.email, data.taskTitle, 'active')} className='bg-green-600 w-full py-2.5 text-xs rounded-lg font-bold hover:bg-green-700 shadow-md'>Accept Task</button>
                <button onClick={() => updateTaskStatus(loggedUser.email, data.taskTitle, 'failed')} className='bg-red-600 w-full py-2.5 text-xs rounded-lg font-bold hover:bg-red-700 shadow-md'>Reject Task</button>
            </div>
        </div>
    )
}
export default NewTask