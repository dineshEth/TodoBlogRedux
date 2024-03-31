import React from 'react'
import TodoCard from './TodoCard'
import { useSelector } from 'react-redux';

function Todos() {
    const todos =  useSelector(state => state.todos);
    
  return (
    <div className='flex flex-col w-full items-start'>
        <h1 className='text-2xl font-bold text-orange-500 underline'>Todos</h1>
        {todos.map((todo) => (
            <TodoCard key={todo.id} text={todo.text}  id={todo.id}/>
        ))}
    </div>
  )
}

export default Todos