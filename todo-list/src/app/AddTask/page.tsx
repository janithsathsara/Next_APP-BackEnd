"use client";
import React, { useState, FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import { TaskInterface } from "../Interfaces";

const AddTask = () => {
  const router = useRouter();
  const [newTaskValue, setNewTaskValue] = useState<TaskInterface>({
    title: "",
    description: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewTaskValue((prevTaskValue) => {
      return {
        ...prevTaskValue,
        [name]: value,
      };
    });
  };
  const handleSubmitNewTask = async (task: any) => {
    task.preventDefault();
    if (!(newTaskValue.title === "")) {
      try {
        const response = await fetch("http://localhost:4000/TasksData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTaskValue),
        });
        if (!response.ok) {
          throw new Error("Error posting data");
        }
      } catch (error: any) {
        console.error("Error:", error.message);
      }
      router.push("/");
    }
  };
  return (
    <form onSubmit={handleSubmitNewTask} className="form-container">
      <h4>Task</h4>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={newTaskValue.title}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={handleChange}
        name="description"
        value={newTaskValue.description}
      />
      <input type="submit" />
    </form>
  );
};

export default AddTask;
