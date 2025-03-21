import Button from "../components/Button";
function SideBar({ handelAddProject, addProject, handelClickabelTask }) {
  return (
    <div className="w-[160px] mt-[30px] rounded-r-md bg-stone-950 p-8 md:w-[320px]">
      <h2 className="text-2xl text-stone-200">YOUR PROJECTS</h2>
      <Button onClick={handelAddProject}>+ Add Project </Button>
      <ul className="list-none flex flex-col gap-2  w-[90%] text-stone-500 mt-[25px]">
        {addProject.infoProject.map((project) => (
          <li key={project.id} className="mb-[10px]">
            <button
              className="bg-stone-700 w-full text-left  text-stone-400 hover:text-stone-600 transiton-all duration-200 p-2 rounded-md"
              onClick={() => handelClickabelTask(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
