import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo, updateTodo } from '../features/todo/todoSlice'
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa' // Importing icons from react-icons

const Todos = () => {
    const todos = useSelector(state => state.todos) || [] // Ensure todos is an array
    const all = useSelector(state => state.allTodos) // Ensure todos is an array
    const dispatch = useDispatch()
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleEdit = (todo) => {
        setEditId(todo.id)
        setEditText(todo.text)
    }

    const handleUpdate = () => {
        dispatch(updateTodo({ id: editId, text: editText }))
        setEditId(all.id)
        setEditText('')
    }

    return (
        <>
            <div className="text-2xl font-bold mb-4">Todos</div>
            {todos.length === 0 ? (
                <div className="text-red-500">
                    No Results... 
                    <ul className="list-none">
                        {all.map((todo) => (
                           <li
                           className={`mt-4 flex flex-col sm:flex-row justify-between items-center px-4 py-2 rounded transition-colors duration-300 ${todos.completed ? 'bg-green-500 text-white line-through' : 'bg-gray-800 text-gray-100'}`}
                           key={todo.id}
                       >
                           <div className='flex items-center w-full sm:w-auto'>
                               <input
                                   type="checkbox"
                                   checked={todos.completed}
                                   onChange={() => dispatch(toggleTodo(todo.id))}
                                   className="mr-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                               />
                                    <span className={`${todos.completed ? 'line-through' : ''}`}>{todo.text}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <ul className="list-none">
                    {todos.map((todo) => (
                        <li
                            className={`mt-4 flex flex-col sm:flex-row justify-between items-center px-4 py-2 rounded transition-colors duration-300 ${todo.completed ? 'bg-green-500 text-white line-through' : 'bg-gray-800 text-gray-100'}`}
                            key={todo.id}
                        >
                            <div className='flex items-center w-full sm:w-auto'>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => dispatch(toggleTodo(todo.id))}
                                    className="mr-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                {editId === todo.id ? (
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="bg-gray-700 text-white rounded px-2 py-1 w-full sm:w-auto"
                                        onBlur={handleUpdate}
                                    />
                                ) : (
                                    <span onClick={() => handleEdit(todo)} className="cursor-pointer">{todo.text}</span>
                                )}
                            </div>
                            <div className="flex items-center mt-2 sm:mt-0 sm:ml-4">
                                {editId === todo.id ? (
                                    <button
                                        onClick={handleUpdate}
                                        className={`text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded text-md mr-2 ${todo.completed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={todo.completed}
                                    >
                                        <FaSave className="h-5 w-5" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(todo)}
                                        className={`text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded text-md mr-2 ${todo.completed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={todo.completed}
                                    >
                                        <FaEdit className="h-5 w-5" />
                                    </button>
                                )}
                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
                                >
                                    <FaTrash className="h-5 w-5" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )} 
        </> 
    ) 
}

export default Todos
