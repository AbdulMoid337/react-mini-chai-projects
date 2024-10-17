import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, searchTodo } from "../features/todo/todoSlice"; // Import searchTodo

const Addtodo = () => {
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() == "") {
      alert("please enter some thing");
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const searchTodoHandler = (e) => {
    setSearchInput(e.target.value);
    dispatch(searchTodo(e.target.value)); 
  };

  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
      <input // New input for searching todos
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-4"
        placeholder="Search Todos..."
        value={searchInput}
        onChange={searchTodoHandler} // Call search handler on change
      />
    </div>
  );
};

export default Addtodo;
