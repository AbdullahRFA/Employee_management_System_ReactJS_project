function TaskList({ loggedUser }) {
  return (
    <div
      id="TaskList"
      className="h-[55%] w-full mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto p-5"
    >
      {/* Map through the tasks array of the logged-in user */}
      {loggedUser?.tasks?.map((task, index) => {
        
        // Logic to determine background color based on task status
        let bgColor = "bg-blue-400"; // Default
        if (task.active) bgColor = "bg-yellow-400";
        if (task.complete) bgColor = "bg-green-400";
        if (task.failed) bgColor = "bg-red-400";
        if (task.newTask) bgColor = "bg-blue-400";

        return (
          <div key={index} className={`h-full w-[300px] flex-shrink-0 ${bgColor} rounded-xl p-5`}>
            <div className="flex justify-between items-center ">
              <h3 className="bg-red-600 px-5 py-1 rounded-xl text-sm">
                {task.category}
              </h3>
              <h4 className="text-sm font-medium">{task.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
            <p className="text-sm mt-2 leading-tight">
              {task.taskDescription}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;