import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({ loggedUser }) {
    // Handle Empty State
    if (!loggedUser?.tasks || loggedUser.tasks.length === 0) {
        return (
            <div className="h-[55%] w-full mt-10 flex flex-col items-center justify-center border-2 border-dashed border-gray-800 rounded-2xl">
                <img src="https://www.svgrepo.com/show/426192/empty-state.svg" className="h-24 opacity-20 mb-4" alt="empty" />
                <h2 className="text-gray-600 text-xl font-medium tracking-tight">No tasks available currently.</h2>
            </div>
        )
    }

    return (
        <div id="TaskList" className="h-[55%] w-full mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto p-5 scroll-smooth">
            {loggedUser.tasks.map((task, idx) => {
                if (task.newTask) return <NewTask key={idx} data={task} loggedUser={loggedUser} />
                if (task.active) return <AcceptTask key={idx} data={task} loggedUser={loggedUser} />
                if (task.complete) return <CompleteTask key={idx} data={task} loggedUser={loggedUser} />
                if (task.failed) return <FailedTask key={idx} data={task} loggedUser={loggedUser} />
                return null
            })}
        </div>
    )
}
export default TaskList