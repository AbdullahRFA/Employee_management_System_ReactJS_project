import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {
    const [userData] = useContext(AuthContext)

    return (
        <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-60">
            <div className="bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded font-bold text-black">
                <h2 className='w-1/5'>Employee</h2>
                <h3 className='w-1/5'>Pending</h3>
                <h3 className='w-1/5'>Working</h3>
                <h3 className='w-1/5'>Completed</h3>
                <h3 className='w-1/5'>Failed</h3>
            </div>
            <div className="overflow-auto h-[80%] space-y-2">
                {userData.employees.map((elem, idx) => {
                    const counts = elem.tasks.reduce((acc, task) => {
                        if (task.newTask) acc.new++;
                        if (task.active) acc.active++;
                        if (task.complete) acc.complete++;
                        if (task.failed) acc.failed++;
                        return acc;
                    }, { new: 0, active: 0, complete: 0, failed: 0 });

                    return (
                        <div key={idx} className="border border-gray-700 py-3 px-4 flex justify-between rounded-lg hover:bg-gray-800 transition-all">
                            <h2 className='w-1/5 text-white font-semibold'>{elem.name}</h2>
                            <h3 className='w-1/5 text-blue-400 font-bold'>{counts.new}</h3>
                            <h3 className='w-1/5 text-yellow-400 font-bold'>{counts.active}</h3>
                            <h3 className='w-1/5 text-green-400 font-bold'>{counts.complete}</h3>
                            <h3 className='w-1/5 text-red-500 font-bold'>{counts.failed}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default AllTask