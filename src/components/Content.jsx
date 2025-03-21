import { useRef } from "react";
import Input from "./Input";

function Content({
  title,
  date,
  desc,
  id,
  handelDeleteTask,
  setAddProject,
  addProject
}) {
  const inputRef = useRef();

  function giveInternalTasks() {
    if (
      !addProject.tasks ||
      !Array.isArray(addProject.tasks) ||
      addProject.tasks.length === 0
    ) {
      return [];
    }

    const taskObj = addProject.tasks.find((task) => task.id === id);

    if (!taskObj.tasks || !Array.isArray(taskObj.tasks)) {
      return [];
    }
    return taskObj.tasks;
  }

  function handelAddTasksForInternal() {
    if (!inputRef.current || inputRef.current.value.trim() === "") {
      return;
    }

    const newTask = inputRef.current.value.trim();

    setAddProject((prev) => {
      const updatedTasks = [...prev.tasks];
      const existingTaskIndex = updatedTasks.findIndex((t) => t.id === id);

      if (existingTaskIndex >= 0) {
        const updatedTaskObj = {
          ...updatedTasks[existingTaskIndex],
          tasks: [...(updatedTasks[existingTaskIndex].tasks || []), newTask]
        };
        updatedTasks[existingTaskIndex] = updatedTaskObj;
      } else {
        // Project doesn't exist in tasks array yet
        updatedTasks.push({
          id: id,
          tasks: [newTask]
        });
      }

      return {
        ...prev,
        tasks: updatedTasks
      };
    });

    // Clear input
    inputRef.current.value = "";
  }
  function clearTask(index) {
    let newTasks = tasks.splice(index, 1);
    setAddProject((prev) => {
      return { ...prev, tasks: [...prev.tasks, { id: id, tasks: newTasks }] };
    });
  }

  const tasks = giveInternalTasks();


  return (
    <section className=" w-1/3 pt-[60px] ml-[20px] ">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold ">{title}</h1>
        <button
          className="text-stone-600 transition-all duration-200 hover:text-stone-400 "
          onClick={() => handelDeleteTask(id)}
        >
          Delete
        </button>
      </div>
      <p className="text-stone-400 my-[20px]">{date}</p>
      <p className="text-stone-500">{desc}</p>
      <div>
        <h2 className="text-xl font-semibold mt-[10px] border-t-2 border-stone-200 pt-[10px]">
          Tasks
        </h2>

        <div className="flex gap-[10px]">
          <Input type="text" ref={inputRef} />
          <button
            className="text-stone-600 transition-all duration-200 hover:text-stone-400 mt-[-10px]"
            onClick={handelAddTasksForInternal}
          >
            Add Task
          </button>
        </div>

        <ul>
          {tasks && tasks.length > 0 ? (
            tasks.map((task, index) => {
              
              return (
                <div
                  className="flex justify-between p-[20px] bg-stone-200 my-2"
                  key={task + index}
                >
                  <p className="text-stone-500">{task}</p>
                  <button
                    className="text-stone-600 transition-all duration-200 hover:text-stone-400"
                    onClick={() => clearTask(index)}
                  >
                    Clear
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-stone-500 mt-4">No tasks added yet</p>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Content;
