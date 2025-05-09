"use client";

import { useEffect, useState } from "react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function Todo() {
  const [userName, setUserName] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      window.location.href = "/login";
      return;
    }

    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      console.log(currentUser);
      const user = JSON.parse(currentUser);
      setUserName(user.name);
    }

    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      const demoTasks = [
        { id: "1", text: "Learning Programming by 5PM", completed: false },
        { id: "2", text: "Learn React hooks by 1PM", completed: true },
        { id: "3", text: "Learn hooks today at 3PM", completed: false },
        { id: "4", text: "Going to meet with PM", completed: false },
      ];
      setTasks(demoTasks);
      localStorage.setItem("tasks", JSON.stringify(demoTasks));
    }

    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }

    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const toggleTaskCompletion = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const addTask = () => {
    if (!newTask.trim()) {
      alert("Error Task cannot be empty");
      return;
    }

    const task = {
      id: Date.now().toString(),
      text: newTask,
      completed: false,
    };

    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNewTask("");
    setIsAddingTask(false);

    alert("Task added successfully");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  const getHourHandRotation = () => {
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    return `rotate(${hours * 30 + minutes * 0.5}deg)`;
  };

  const getMinuteHandRotation = () => {
    const minutes = time.getMinutes();
    return `rotate(${minutes * 6}deg)`;
  };

  return (
    <div className=" bg-gray-100">
      <div className="bg-[#0DD3C5] text-white p-6 rounded-b-3xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Welcome {userName}!</h1>
          </div>
          <div
            className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold"
            onClick={handleLogout}
          >
            {userName.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <p className="text-lg font-semibold text-gray-600">{greeting}</p>

        <div className="my-4">
          <div className="clock">
            <div className="clock-face">
              <div
                className="clock-hand"
                style={{ transform: getHourHandRotation() }}
              ></div>
              <div
                className="clock-hand"
                style={{
                  transform: getMinuteHandRotation(),
                  height: "60px",
                  width: "2px",
                }}
              ></div>
              <div className="clock-center"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        <h2 className="text-lg font-medium mb-4">Task list</h2>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Daily Task</h3>

          <div className="space-y-3 mt-4">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="mt-1 border-[#0DD3C5] h-5 w-5 outline"
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={`text-sm ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.text}
                </label>
              </div>
            ))}

            {isAddingTask && (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="flex-1 text-sm"
                  autoFocus
                />
                <button onClick={addTask} className="bg-[#0DD3C5]">
                  Add
                </button>
                <button onClick={() => setIsAddingTask(false)}>Cancel</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" flex justify-end p-5 ">
        <button
          className="rounded-full w-12 h-12 flex justify-center items-center bg-[#0DD3C5] hover:bg-[#0bb0a3] p-0 shadow-lg"
          onClick={() => setIsAddingTask(true)}
        >
          <div className="h-15 w-15 flex justify-center items-center">+</div>
        </button>
      </div>
    </div>
  );
}
