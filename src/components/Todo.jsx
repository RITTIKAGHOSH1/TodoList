import { useEffect, useRef, useState } from 'react'
import todo_icon from '../components/Assests/todo-app-assets/assets/todo_icon.png'
import TodoItems from './TodoItems'
const Todo = () => {

    const [todolist, setlist] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);

    const InputRef = useRef();
    
    const add = () => {
        const inputItem = InputRef.current.value.trim()
        if (inputItem === "") {
            return null;
        }
        const newtodo={
            id: Date.now(),
            text: inputItem,
            isComplete: false
        }
        setlist((prev) => [...prev, newtodo])
        InputRef.current.value = "";
    }

    const del = (id) => {
        setlist((prev) => {
            return todolist.filter((todo)=> todo.id!== id)
        })
    }
    const toggle = (id) => {
        setlist((prev) => {
            return todolist.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete };
                }
                return todo;
            })
        })
    }
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todolist))  //u can store in String form not arrays, to convert it by stringify funct
        
    },[todolist])

  return (
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7  min-h-[550px] rounded-xl">
          
{/* -------title within middle box------------*/}

          <div className="flex items-center mt-7 gap-2">
              <img className='w-8' src={todo_icon} alt="" />
              <h1 className="text-3xl font-semibold text-orange-950 ">To-Do List</h1>
          </div>

          {/* -------input box------------*/}
          
          <div className='flex items-center mt-7 bg-gray-200 rounded-full'>
              <input ref={InputRef} className='bg-transparent border-0 outline-none flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
              <button onClick={add} className='border-none rounded-full bg-purple-400 w-32 h-14 text-white text-lg font-semibold cursor-pointer'>ADD +</button>
          </div>

          {/* -------todolist--display all items----------*/}
          <div>
              {todolist.map((item, index) => {
                  return <TodoItems key={index} text={item.text} idd={item.id} iscomp={item.isComplete} del={del} toggle={toggle} />
              })}
              
              
          </div>
    </div>
  )
}

export default Todo