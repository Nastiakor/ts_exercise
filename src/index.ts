import { TodosResponse } from "./types";

(async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const data: TodosResponse = await res.json();

  console.log("Total todos:", data.total);
  for (const todo of data.todos) {
    console.log(todo.id, todo.todo, todo.completed);
  }
})();
