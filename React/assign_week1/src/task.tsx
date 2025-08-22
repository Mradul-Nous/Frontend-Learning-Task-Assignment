


type TaskProps = {
  task: string;
  deleteTask: () => void;
};

export default function Task({task, deleteTask}: TaskProps) {
  return (
   <>
    <div className="task">
      <p>{task}</p>
      <button onClick={deleteTask} type="button">Delete</button>
    </div>
   </>
  );
}