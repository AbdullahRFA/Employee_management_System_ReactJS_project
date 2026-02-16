import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({ loggedUser }) {
    return (
        <div id="TaskList" className="h-[55%] w-full mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto p-5">
            {loggedUser.tasks.map((task, idx) => {
                // Pass both 'data' and 'loggedUser' to every component
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