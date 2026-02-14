import Header from "../Others/Header"
import CreateTask from "../Others/CreateTask"
import AllTask from "../Others/AllTask"

function AdminDashboard() {
    return (
        <div className="h-screen w-full bg-[#1c1c1c] p-10">
            <Header />
            <CreateTask />
            <AllTask/>
        </div>
    )
}

export default AdminDashboard