"use client";
import React, { useState, useEffect } from "react";
import Task from "./Task";
import { TaskInterface } from "../Interfaces";

const TasksList = () => {
  const [taskValue, setTaskValue] = useState<TaskInterface[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:4000/TasksData");
        if (!response.ok) {
          throw new Error("Error fetching tasks");
        }
        const tasksData = await response.json();
        setTaskValue(tasksData);
      } catch (error: any) {
        console.error("Error ", error.message);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="Tasks-List">
      <h3 className="Title">Tasks</h3>
      {taskValue.map((props) => (
        <Task key={props._id} task={props} />
      ))}
    </div>
  );
};

export default TasksList;
