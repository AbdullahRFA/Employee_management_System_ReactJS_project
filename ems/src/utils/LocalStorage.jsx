const employee = [
  {
    id: 1,
    name: "Abdullah Rahman",
    email: "rahaman@gmail.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile monthly sales data",
        taskDate: "2026-02-15",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2026-02-10",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Submit Budget Plan",
        taskDescription: "Budget draft submission",
        taskDate: "2026-02-08",
        category: "Finance"
      }
    ]
  },

  {
    id: 2,
    name: "Nazmus Sakib",
    email: "sakib@company.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "UI Design",
        taskDescription: "Design dashboard layout",
        taskDate: "2026-02-16",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile responsiveness issue",
        taskDate: "2026-02-12",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate PR",
        taskDate: "2026-02-15",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Deploy Update",
        taskDescription: "Production deployment",
        taskDate: "2026-02-11",
        category: "DevOps"
      }
    ]
  },

  {
    id: 3,
    name: "Farhan Ahmed",
    email: "farhan@company.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Weekly backup process",
        taskDate: "2026-02-17",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Check system logs",
        taskDate: "2026-02-13",
        category: "Infrastructure"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve DB performance",
        taskDate: "2026-02-16",
        category: "Database"
      }
    ]
  },

  {
    id: 4,
    name: "Mahmud Hasan",
    email: "mahmud@company.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "API usage guide",
        taskDate: "2026-02-18",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "User Training",
        taskDescription: "Train new staff",
        taskDate: "2026-02-14",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "System Audit",
        taskDescription: "Security audit process",
        taskDate: "2026-02-09",
        category: "Security"
      }
    ]
  },

  {
    id: 5,
    name: "Tanvir Hossain",
    email: "tanvir@company.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Analyze competitors",
        taskDate: "2026-02-19",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Ad Campaign",
        taskDescription: "Launch social media ads",
        taskDate: "2026-02-17",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Newsletter",
        taskDescription: "Send monthly email",
        taskDate: "2026-02-12",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Client Follow-up",
        taskDescription: "Call pending clients",
        taskDate: "2026-02-10",
        category: "Sales"
      }
    ]
  }
];


const admin = [{
  "id": 100,
  "name": "Abdullah Nazmus-Sakib",
  "email": "shakibrybmn@gmail.com",
  "pass": "123"
},

];


export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(employee))
    localStorage.setItem("admins", JSON.stringify(admin))

}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admins = JSON.parse(localStorage.getItem("admins"))
    // console.log(admins,employees)

    return {employees, admins}

}