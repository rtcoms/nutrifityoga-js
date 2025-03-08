import { Page } from "rakkasjs";
import { api } from "../../convex/_generated/api";
import { useConvexQuery } from "src/useConvexQuery";
import { useMutation } from "convex/react";
import { useState } from "react";

const HomePage: Page = function HomePage() {
  const tasks = useConvexQuery(api.tasks.get);
  const createTask = useMutation(api.tasks.createTask);
  const updateTask = useMutation(api.tasks.updateTask);
  const [text, setText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTaskId) {
      await updateTask({ id: editingTaskId, text });
      setEditingTaskId(null);
    } else {
      await createTask({ text });
    }
    setText("");
  };

  const handleEdit = (task) => {
    setText(task.text);
    setEditingTaskId(task._id);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Task text"
          required
        />
        <button type="submit">{editingTaskId ? "Update Task" : "Add Task"}</button>
      </form>
      {tasks && (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              {task.text}
              <button onClick={() => handleEdit(task)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default HomePage;