const CompleteTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <span className='bg-red-600 text-sm px-3 py-1 rounded font-bold'>{data.category}</span>
                <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 leading-tight h-24 overflow-auto'>{data.taskDescription}</p>
            <div className='mt-4'>
                <button className='w-full bg-green-600 py-2 text-sm rounded-lg font-bold cursor-default'>Completed ✅</button>
            </div>
        </div>
    )
}
export default CompleteTask