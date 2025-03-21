import Button from "./Button";
import Input from "./Input";

function NewProjects({
  titelRef,
  descRef,
  textareaRef,
  handelSaveProject,
  setAddProject
}) {
  function handelCancelButton() {
    setAddProject((prev) => {
      return { ...prev, selectedProject: null, selectedTask: null };
    });
  }
  return (
    <div className="max-w-[500px] p-8">
      <div className="text-right">
        <button
          className="bg-stone-100 text-stone-600 mr-[20px] hover:text-stone-800 transtion-all duration-200"
          onClick={handelCancelButton}
        >
          Cancel
        </button>
        <Button onClick={handelSaveProject}> Save </Button>
      </div>
      <Input type="text" label="TITLE" ref={titelRef} />
      <Input type="textarea" label="DESCRIPTION" ref={descRef} />
      <Input type="date" label="DUE DATE" ref={textareaRef} />
    </div>
  );
}

export default NewProjects;
