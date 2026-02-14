function AllTask() {
    return (
        <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-60">
            
            {/* Table Header - Helps users understand what they are looking at */}
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h3 className="text-lg font-medium w-2/5">New Task</h3>
                <h5 className="text-lg font-medium w-1/5">Status</h5>
            </div>

            {/* Scrollable Container */}
            <div className="h-[80%] overflow-auto">
                <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-medium  w-1/5">Abdullah</h2>
                    <h3 className="text-lg font-medium  w-2/5">Make a UI Design</h3>
                    <h5 className="text-lg font-medium  w-1/5 text-blue-400">Status</h5>
                </div>
                <div className="border-2 border-yellow-400 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-medium  w-1/5">Abdullah</h2>
                    <h3 className="text-lg font-medium  w-2/5">Make a UI Design</h3>
                    <h5 className="text-lg font-medium  w-1/5 text-yellow-400">Status</h5>
                </div>
                <div className="border-2 border-white mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-medium  w-1/5">Abdullah</h2>
                    <h3 className="text-lg font-medium  w-2/5">Make a UI Design</h3>
                    <h5 className="text-lg font-medium  w-1/5 text-white">Status</h5>
                </div>
                <div className="border-2 border-purple-600 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-medium  w-1/5">Abdullah</h2>
                    <h3 className="text-lg font-medium  w-2/5">Make a UI Design</h3>
                    <h5 className="text-lg font-medium  w-1/5 text-purple-600">Status</h5>
                </div>
                <div className="border-2 border-red-600 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-medium  w-1/5">Abdullah</h2>
                    <h3 className="text-lg font-medium  w-2/5">Make a UI Design</h3>
                    <h5 className="text-lg font-medium  w-1/5 text-red-600">Status</h5>
                </div>
            </div>
        </div>
    )
}

export default AllTask