import React, { useRef, useState } from 'react';

const Home = () => {
  const todo = useRef();
  const [todoRender, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    if (todo.current.value.trim() !== "") {
      setTodos([...todoRender, todo.current.value]);
      todo.current.value = '';
    }
  };

  const deleteTodo = (index) => {
    console.log("delete", index);
    const updatedTodos = todoRender.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    console.log("edit", index);
    const editVal = prompt("Enter Todo", todoRender[index]);
    if (editVal && editVal.trim() !== "") {
      const updatedTodos = [...todoRender];
      updatedTodos[index] = editVal;
      setTodos(updatedTodos);
    }
  };

  return (
    <>
      <div className='text-center'>
        <h1 className='text-4xl mt-5'>Todo App</h1>
        <form onSubmit={addTodo} className='mt-5'>
          <input
            type="text"
            placeholder="Enter Todo"
            className="border border-gray-300 rounded p-2 w-80"
            ref={todo}
          />
          <button className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600">
            Add Todo
          </button>
        </form>
      </div>
      <ul className='mt-5'>
        {todoRender.map((item, index) => (
          <div key={index} className='flex justify-center gap-5 mt-3'>
            <li className='border-b-2 pb-1'>{item}</li>
            <button onClick={() => editTodo(index)} className="bg-green-500 text-white p-1 rounded hover:bg-green-600">
              Edit
            </button>
            <button onClick={() => deleteTodo(index)} className="bg-red-500 text-white p-1 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Home;
