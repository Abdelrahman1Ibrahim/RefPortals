import { useState } from "react";

import SideBar from "./components/SideBar";
import Projects from "./components/Projects";

function App() {
  // Start with States
  const [addProject, setAddProject] = useState({
    selectedProject: null,
    infoProject: [],
    selectedTask: null,
    tasks: []
  });

  function handelAddProject() {
    setAddProject((prev) => {
      return { ...prev, selectedProject: undefined, selectedTask: null };
    });
  }

  function handelClickabelTask(id) {
    let allTaks = addProject.infoProject;
    let task = allTaks.find((task) => task.id === id);

    // Make sure this project has a tasks array in the tasks state
    const existingTaskEntry = addProject.tasks.find((t) => t.id === id);
    if (!existingTaskEntry) {
      setAddProject((prev) => {
        const updatedTasks = [...prev.tasks, { id: id, tasks: [] }];
        return {
          ...prev,
          selectedTask: task,
          tasks: updatedTasks
        };
      });
    } else {
      setAddProject((prev) => {
        return { ...prev, selectedTask: task };
      });
    }
  }

  function handelDeleteTask(id) {
    setAddProject((prev) => {
      let taskThatNotDelete = prev.infoProject.filter((task) => task.id !== id);
      let TaskNotDelete = prev.tasks.filter((filter) => filter.id !== id);

      return {
        ...prev,
        infoProject: taskThatNotDelete,
        tasks: TaskNotDelete,
        selectedTask: null
      };
    });
  }

  return (
    <main className="flex min-h-screen bg-stone-100 gap-0 md:gap-[20px] ">
      <SideBar
        handelAddProject={handelAddProject}
        addProject={addProject}
        handelClickabelTask={handelClickabelTask}
      />

      <Projects
        setAddProject={setAddProject}
        addProject={addProject}
        handelAddProject={handelAddProject}
        task={addProject.selectedTask}
        handelDeleteTask={handelDeleteTask}
      />
    </main>
  );
}

export default App;
