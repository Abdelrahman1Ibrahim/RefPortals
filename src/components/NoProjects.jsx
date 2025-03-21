import imgProject from "../assets/no-projects.png";
import Button from "./Button";

function NoProjects({ handelAddProject }) {
  return (
    <section className="max-w-[500px]  pt-[60px] ml-[30px]">
      <img
        src={imgProject}
        className="mx-auto w-[100px] h-[100px] object-contain"
      />
      <div className="text-center">
        <h2 className="text-stone-600 text-[20px] my-[15px]">
          No Project Selected
        </h2>
        <p className="text-stone-400 text-4">
          Select a project or get started with a new one
        </p>
        <Button onClick={handelAddProject}>Create a new project</Button>
      </div>
    </section>
  );
}

export default NoProjects;
