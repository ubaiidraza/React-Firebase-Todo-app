// import React, { useEffect, useRef, useState } from 'react'
// import { collection, addDoc , getDocs , deleteDoc , doc , updateDoc } from "firestore"; 
// import { db } from '../config';
   



// function Home() {

//   const todoVal = useRef()

  
//     let [todo , setTodo] = useState([]);

//    const addTodo = async (event) => {
//     event.preventDefault()
//      const addData = async () => {
//       const docRef = await addDoc(collection(db, "userTodo"), {
//  todo:todoVal.current.value,
// });
// console.log("Document written with ID: ", docRef.id);
// setTodo(prevTodo => [...prevTodo , {id:docRef.id , todo:todoVal.current.value}])
// console.log(todo);
//     }

    
    
//     addData();
//    }


//    const deleteBtn = async(index) => {

//     try {
//             await deleteDoc(doc(db, "userTodo", index));
//             console.log('Todo deleted with ID: ', index);
//             setTodo(prevTodos => prevTodos.filter(todo => todo.id !== index))
            
//         } catch (error) {
//             console.log(error);
            
//         }

//     console.log('delete button clicked');
    

//    }


//    const editBtn = async (id)=>{

//         const updateValue = prompt('Update your Todo');
//         if (updateValue === null || updateValue.trim() === '') {
//             return;
//         }

//         await updateDoc(doc(db, 'userTodo', id),{todo: updateValue})
//         setTodo(prevTodos => prevTodos.map(todo =>
//             todo.id === id ? { ...todo, todo: updateValue } : todo
//         ));

//     }

  



  

  


//   return (
//     <>
//     <form onSubmit={addTodo} className='flex justify-center items-center gap-3 '>
//       <div className='text-center mt-4'>
//       <input
//   type="text"
//   placeholder="Todo..."
//   className="input input-bordered input-primary w-full max-w-5xl" ref={todoVal} />

 

//     </div>
//     <div className='mt-4'>
//        <button className='btn btn-primary'>Add Todo</button>
//     </div>
//     </form>

//     {todo.length!=0 ? todo.map((item)=>{
//       return(
//        <>
//        <h1 className='text-2xl text-center m-[10vh] font-bold'>User Todo</h1>
//        <div key={item.id}>
//         <li className='list-none mt-3 flex justify-center gap-5 text-xl'>{item.todo} <button className='btn btn-warning' onClick={() => deleteBtn(item.id)}>delete</button>  <button className='btn btn-warning' onClick={()=> editBtn(item.id)}>edit</button></li>
//        </div>
//        </>
//       )

//     }): <h1 className='text-center mt-5'>No Todo found...</h1>}

 
    
//     </>
//   )
// }

// export default Home


import React, { useEffect, useRef, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"; // درست راستہ
import { db } from "../config";

function Home() {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksCollection = collection(db, "tasks");
        const taskSnapshot = await getDocs(tasksCollection);
        const taskList = taskSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTasks(taskList);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    const task = taskInputRef.current.value.trim();
    if (task === "") return;

    try {
      const docRef = await addDoc(collection(db, "tasks"), { task });
      setTasks([...tasks, { id: docRef.id, task }]);
      taskInputRef.current.value = "";
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTask = async (id, newTask) => {
    try {
      await updateDoc(doc(db, "tasks", id), { task: newTask });
      setTasks(tasks.map(task => task.id === id ? { ...task, task: newTask } : task));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-3">Todo List</h1>
      <form onSubmit={addTask} className="flex justify-center mt-5">
        <input type="text" ref={taskInputRef} placeholder="New Task" className="input input-bordered" />
        <button type="submit" className="btn btn-primary ml-2">Add Task</button>
      </form>
      <ul className="mt-5">
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center">
            <span>{task.task}</span>
            <div>
              <button onClick={() => deleteTask(task.id)} className="btn btn-error btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
