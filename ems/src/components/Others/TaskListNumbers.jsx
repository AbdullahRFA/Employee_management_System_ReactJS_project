// src/components/Others/TaskListNumbers.jsx
function TaskListNumbers({ loggedUser }) {
    // Calculate counts dynamically from the user's tasks
    const taskCounts = loggedUser?.tasks?.reduce((acc, task) => {
        if (task.newTask) acc.new++;
        if (task.active) acc.active++;
        if (task.complete) acc.completed++;
        if (task.failed) acc.failed++;
        return acc;
    }, { new: 0, active: 0, completed: 0, failed: 0 });

    return (
        <div className="flex mt-10 justify-between gap-5">
            <div className="rounded-xl px-9 py-6 w-[45%] bg-blue-400">
                <h2 className="text-3xl font-semibold">{taskCounts?.new || 0}</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl px-9 py-6 w-[45%] bg-green-400">
                <h2 className="text-3xl font-semibold">{taskCounts?.active || 0}</h2>
                <h3 className="text-xl font-medium">Accepted Task</h3>
            </div>
            <div className="rounded-xl px-9 py-6 w-[45%] bg-yellow-400">
                <h2 className="text-3xl font-semibold">{taskCounts?.completed || 0}</h2>
                <h3 className="text-xl font-medium">Completed Task</h3>
            </div>
            <div className="rounded-xl px-9 py-6 w-[45%] bg-red-400">
                <h2 className="text-3xl font-semibold">{taskCounts?.failed || 0}</h2>
                <h3 className="text-xl font-medium">Failed Task</h3>
            </div>
        </div>
    );
}
export default TaskListNumbers;