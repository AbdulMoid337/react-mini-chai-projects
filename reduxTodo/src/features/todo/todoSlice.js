import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  return storedTodos ? storedTodos : [];
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
  allTodos: loadTodosFromLocalStorage(),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
         id: nanoid(), text: action.payload, completed: false 
        };
      state.todos.push(newTodo);
      state.allTodos.push(newTodo); 
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text; 
        localStorage.setItem("todos", JSON.stringify(state.todos)); // Save to local storage
      }
    },
    searchTodo: (state, action) => {
        state.todos = state.allTodos.filter((todo) =>
          todo.text.includes(action.payload)
        ); 
      }
    },
  },
);

export const { addTodo, removeTodo, toggleTodo, updateTodo, searchTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
