import Header from "../Others/Header"

function AdminDashboard() {
    return (
        <div className="h-screen w-full bg-[#1c1c1c] p-10">
            <Header />

            <div className="mt-10 bg-[#2c2c2c] p-8 rounded-xl border border-gray-800 shadow-2xl">
                <form className="flex flex-wrap w-full items-start justify-between">
                    
                    {/* Left Section: Main Details */}
                    <div className="w-1/2 flex flex-col gap-4 px-2">
                        <div>
                            <h3 className="text-sm font-medium text-gray-300 mb-1">Task Title</h3>
                            <input 
                                className="w-full bg-transparent border-[1px] border-gray-600 py-2 px-4 rounded-lg outline-none focus:border-emerald-500 transition-colors text-white" 
                                type="text" 
                                placeholder="Make UI design" 
                            />
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-300 mb-1">Date</h3>
                            <input 
                                className="w-full bg-transparent border-[1px] border-gray-600 py-2 px-4 rounded-lg outline-none focus:border-emerald-500 transition-colors text-white" 
                                type="date" 
                            />
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-300 mb-1">Assign to</h3>
                            <input 
                                className="w-full bg-transparent border-[1px] border-gray-600 py-2 px-4 rounded-lg outline-none focus:border-emerald-500 transition-colors text-white" 
                                type="text" 
                                placeholder="Employee Name" 
                            />
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-300 mb-1">Category</h3>
                            <input 
                                className="w-full bg-transparent border-[1px] border-gray-600 py-2 px-4 rounded-lg outline-none focus:border-emerald-500 transition-colors text-white" 
                                type="text" 
                                placeholder="Design, Dev, etc." 
                            />
                        </div>
                    </div>

                    {/* Right Section: Description & Submit */}
                    <div className="w-1/2 flex flex-col items-start px-2">
                        <h3 className="text-sm font-medium text-gray-300 mb-1">Description</h3>
                        <textarea 
                            className="w-full h-44 bg-transparent border-[1px] border-gray-600 p-4 rounded-lg outline-none focus:border-emerald-500 transition-colors text-white resize-none" 
                            placeholder="Detailed Description of your task..."
                        ></textarea>
                        
                        <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg font-bold text-white transition-all active:scale-[0.95]">
                            Create Task
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AdminDashboard