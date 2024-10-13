import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Write Code",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updatedTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
