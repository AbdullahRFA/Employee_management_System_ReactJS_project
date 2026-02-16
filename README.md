
# 🚀 TaskFlow: Pro Employee Task Management System

**TaskFlow** is a robust, React-based task management application designed to streamline the workflow between administrators and employees. It features distinct dashboards, real-time status tracking, and persistent data management using modern web technologies.

## 🛠️ Tech Stack

* **Frontend**: React.js (Hooks, Context API)
* **Styling**: Tailwind CSS
* **Icons**: SVGrepo / Custom SVGs
* **Data Persistence**: Browser LocalStorage
* **Build Tool**: Vite

## ✨ Core Features

### 🔑 Authentication System

* **Multi-Role Login**: Separate entry points for Admins and Employees with role-based dashboard redirection.
* **Session Persistence**: Automatically restores the user session and specific data state on page refresh using `localStorage`.

### 👔 Admin Dashboard

* **Task Creation & Assignment**: A specialized form with validation to create tasks and assign them to specific employees.
* **Autocomplete Search**: Integrated datalist for quick employee selection during task assignment.
* **Global Monitoring**: A real-time overview of all employees' performance, tracking counts for **Pending, Working, Completed, and Failed** tasks.

### 👥 Employee Dashboard

* **Dynamic Task Overview**: Summary cards showing the total count of tasks in different stages.
* **Interactive Task List**:
* **New Tasks**: Ability to "Accept" (Working) or "Reject" (Failed) upcoming assignments.
* **Active Tasks**: Mark tasks as "Complete" or "Failed" once accepted.


* **Status-Specific UI**: Different visual card styles for tasks based on their current state.

## 🏗️ Technical Highlights

### 1. Centralized State Management

The application uses the **React Context API** (`AuthContext`) to manage global `userData`. This allows seamless updates across the entire app when an admin creates a task or an employee changes a task status.

### 2. Global Task Update Engine

Located in `AuthProvider.jsx`, a centralized `updateTaskStatus` function manages all state transitions (New ➡️ Active ➡️ Complete/Failed). This prevents code duplication in individual components and ensures data consistency across the UI.

### 3. Smart Persistence Layer

The `LocalStorage.jsx` utility includes a "safe seeding" mechanism. It ensures that initial dummy data is only loaded if the storage is empty, preventing accidental overwrites of real user-generated tasks on page refresh.

---

## 📸 Screenshots

| Admin Dashboard | Employee Dashboard | 
|:---:|:---:|
| <img src="/ems/src/assets/ss/Screenshot 2026-02-16 at 11.13.16 PM.png" width="250"> | <img src="/ems/src/assets/ss/Screenshot 2026-02-16 at 11.13.49 PM.png" width="250"> |

## 📂 Project Structure

```text
src/
├── components/
│   ├── Auth/           # Login components
│   ├── Dashboard/      # Admin and Employee specific views
│   ├── Others/         # Shared UI: Header, CreateTask, TaskListNumbers, AllTask
│   └── TaskList/       # Individual task state components (New, Accept, etc.)
├── context/
│   └── AuthProvider.jsx # Global Context & Task Status Logic
├── utils/
│   └── LocalStorage.jsx # Data seeding and storage utilities
├── App.jsx             # Main routing and role-check logic
└── main.jsx            # Entry point with StrictMode and Context wrap

```

## 🚀 Getting Started

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/taskflow.git

```


2. **Install dependencies**:
```bash
npm install

```


3. **Run the development server**:
```bash
npm run dev

```


4. **Login Credentials**:
* **Admin**: `shakibrybmn@gmail.com` | Password: `123`
* **Employee**: `rahaman@gmail.com` | Password: `123`



## 📝 License

Distributed under the MIT License.

---

**Developed with ❤️ by Abdullah Nazmus-Sakib**