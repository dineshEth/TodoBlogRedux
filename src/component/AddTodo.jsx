import React, { useState } from 'react'

function AddTodo() {
    const [inputText, setInputText] = useState('')
    function handleAddTodo(e)  {
        e.preventDefault();
    }
  return (
    <div className='w-full max-w-[600px]  mx-auto px-4  gap-2 flex flex-row flex-wrap justify-center items-center'>
        <input 
        value={inputText}
        maxLength={25}
        onChange={(e)=>setInputText(e.target.value)}
        type="text" className='bg-transparent flex-1 outline-none border-[1px] px-2 py-1 text-white rounded-sm ' />
        <button 
        onClick={handleAddTodo}
        disabled = {inputText.length <= 0}
        className='bg-orange-500 w-full sm:w-max px-2 text-center font-bold py-1 rounded-sm'>Add Todo</button>
    </div>
  )
}

export default AddTodo