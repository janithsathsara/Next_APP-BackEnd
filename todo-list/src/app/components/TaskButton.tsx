import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const TaskButton = () => {
  return (
    <div className="task-Button">
      <Link href="/AddTask" className="task-link">
        <h1 className="text-white">
          Add a task <FaPlus size={25} color={"white"} />
        </h1>
      </Link>
    </div>
  );
};

export default TaskButton;
