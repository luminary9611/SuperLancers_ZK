// @ts-nocheck
import React, { useState } from "react";
import Image from "next/legacy/image";
import Header from "../components/Header";
import Button from "../components/Button"; // Assuming Button is styled as per your design
import SubmitModal from "./submit"; // Modal component for submitting work

// Task interface for type safety (if using TypeScript)
interface Task {
  id: number;
  title: string;
  organization: string;
  category: string;
  timeLeft: string;
  status: "Submit Work" | "Under Review" | "Completed";
}

const Dashboard: React.FC = () => {
  // Dummy data for the tasks on the dashboard
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Write Our Documentation",
      organization: "DevDAO",
      category: "Docs",
      timeLeft: "12 Hours",
      status: "Submit Work",
    },
    {
      id: 2,
      title: "Section A",
      organization: "DevDAO",
      category: "Docs",
      timeLeft: "4 Hours",
      status: "Under Review",
    },
    {
      id: 3,
      title: "Real Estate Homepage",
      organization: "LearnWeb3",
      category: "Frontend",
      timeLeft: "25 Days",
      status: "Completed",
    },
    // ...other tasks
  ]);

  // State to handle the visibility of the submit modal
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  // State to handle the selected task for submission
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Function to open the submit modal with the selected task
  const openSubmitModal = (task: Task) => {
    setSelectedTask(task);
    setIsSubmitModalOpen(true);
  };

  // Function to close the submit modal
  const closeSubmitModal = () => {
    setIsSubmitModalOpen(false);
    setSelectedTask(null); // Reset the selected task
  };

  // Function to update the task status in the state
  const updateTaskStatus = (taskId: number, status: Task["status"]) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto p-4">
        {/* Tasks section */}
        <section className="my-10">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dynamically generate project cards */}
            {tasks.map((task) => (
              <div
                key={task.id}
                className="task-card bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {task.organization}
                </h3>
                <p className="mb-3">{task.title}</p>
                <p className="mb-6">
                  Reward: <span className="font-bold">{task.timeLeft}</span>
                </p>
                <Button onClick={() => openSubmitModal(task)}>
                  {task.status}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* My Tasks section */}
        <section className="my-10">
          <h2 className="text-4xl font-bold mb-6">My Tasks</h2>
          {/* Tasks list */}
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-gray-700 p-4 rounded-lg mb-4"
            >
              <div>
                <p className="font-semibold">{task.title}</p>
                <p>{task.organization}</p>
              </div>
              <div>
                <p>{task.category}</p>
                <p>{task.timeLeft}</p>
              </div>
              <Button onClick={() => openSubmitModal(task)}>
                {task.status}
              </Button>
            </div>
          ))}
        </section>
      </main>
      {isSubmitModalOpen && selectedTask && (
        <SubmitModal
          task={selectedTask}
          onClose={closeSubmitModal}
          updateTaskStatus={updateTaskStatus}
        />
      )}
    </div>
  );
};

export default Dashboard;
