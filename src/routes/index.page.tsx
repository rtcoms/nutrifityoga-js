import { Page } from "rakkasjs";
import { api } from "../../convex/_generated/api";
import { useConvexQuery } from "src/useConvexQuery";
import { useMutation } from "convex/react";
import { useState } from "react";

const HomePage: Page = function HomePage() {
  const tasks = useConvexQuery(api.tasks.get);
  const mutateTask = useMutation(api.tasks.createTask);
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutateTask({ text });
    setText("");
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
        <button type="submit">Add Task</button>
      </form>
      {tasks && (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>{task.text}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default HomePage;