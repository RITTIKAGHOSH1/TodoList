import React from 'react'

import not_tick from '../components/Assests/todo-app-assets/assets/not_tick.png'
import tick from '../components/Assests/todo-app-assets/assets/tick.png'
import todo_icon from '../components/Assests/todo-app-assets/assets/todo_icon.png'
import delete_ from '../components/Assests/todo-app-assets/assets/delete_.png'

const TodoItems = ({text,idd,iscomp,del,toggle}) => {
  return (
      <div className='flex items-center my-3 gap-2' >
          <div onClick={()=>{toggle(idd)}} className='flex flex-1 items-center '>
              <img  src={iscomp ? tick :not_tick} alt="" className='w-7 cursor-pointer'/>
              <p className={`text-slate-700 ml-4 text-[17px] cursor-pointer decoration-slate-500 ${iscomp ? "line-through" : ""}`}> {text} </p>
          </div>
          
          <img onClick={()=>{del(idd)}} src={delete_} alt="" className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default TodoItems