import React from "react";
import Link from "next/link";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import TaskButton from "./components/TaskButton";

export default function Home() {
  return (
    <main className="main-element">
      <TaskButton />
      <TasksList />
    </main>
  );
}
