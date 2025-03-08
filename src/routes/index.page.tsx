import { Page } from "rakkasjs";
import { api } from "../../convex/_generated/api";
import { useConvexQuery } from "src/useConvexQuery";
import { useMutation } from "convex/react";

const HomePage: Page = function HomePage() {
  const tasks = useConvexQuery(api.tasks.get);
  const mutateTask = useMutation(api.tasks.createTask);
  mutateTask({text: "Hello, world!"});

  return (
    <main>
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
