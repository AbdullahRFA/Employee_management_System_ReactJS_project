import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList"

function EmployeDashboard(){
    return(
        <div className="p-10 h-screen bg-[#1C1C1C]">
                <Header />
                <TaskListNumbers />
                <TaskList />
        </div>
    )
}
export default EmployeDashboard