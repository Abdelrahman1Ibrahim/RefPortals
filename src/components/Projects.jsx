import { useRef } from "react";

import NewProjects from "./NewProjects";
import Modal from "./Modal";
import NoProjects from "./NoProjects";
import Content from "./Content";

function Projects({
  setAddProject,
  addProject,
  handelAddProject,
  task,
  handelDeleteTask
}) {
  const titelRef = useRef();
  const descRef = useRef();
  const textareaRef = useRef();
  const dialog = useRef();

  function handelSaveProject() {
    if (
      !titelRef.current.value.trim("") ||
      !descRef.current.value.trim("") ||
      !textareaRef.current.value.trim("")
    ) {
      dialog.current.open();
      return;
    } else {
      setAddProject((prev) => {
        let dataInfo = Array.isArray(prev.infoProject)
          ? [...prev.infoProject]
          : [];
       
        let id = Math.random().toString();
        dataInfo.push({
          title: titelRef.current.value.trim(""),
          desc: descRef.current.value.trim(""),
          date: textareaRef.current.value.trim(""),
          id: id
        });
        let dataTasks = Array.isArray(prev.tasks) ? [...prev.tasks] : [];
        dataTasks.push({ id: id, tasks: [] });

        return {

          ...prev,
          tasks: dataTasks,
          infoProject: dataInfo,
          selectedProject: null
        };
      });
    }
  }

  return (
    <>
      <Modal ref={dialog} />
      {addProject.selectedProject === undefined ? (
        <NewProjects
          handelSaveProject={handelSaveProject}
          textareaRef={textareaRef}
          descRef={descRef}
          titelRef={titelRef}
          setAddProject={setAddProject}
        />
      ) : addProject.selectedTask === null ? (
        <NoProjects handelAddProject={handelAddProject} />
      ) : (
        <Content
          title={task.title}
          date={task.date}
          desc={task.desc}
          id={task.id}
          handelDeleteTask={handelDeleteTask}
          setAddProject={setAddProject}
          addProject={addProject}
        />
      )}
    </>
  );
}

export default Projects;
