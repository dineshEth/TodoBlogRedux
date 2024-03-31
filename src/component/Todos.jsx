import React from 'react'
import TodoCard from './TodoCard'

function Todos() {
  return (
    <div className='flex flex-col w-full items-start'>
        <h1 className='text-2xl font-bold text-orange-500 underline'>Todos</h1>
        <TodoCard />
    </div>
  )
}

export default Todos