import React, { useState } from 'react';
import { addTodo, updateTodo } from '../features/todo';
import { useDispatch } from 'react-redux';

function AddTodo() {
    const [inputText, setInputText] = useState('');
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    function handleAddTodo(e)  {
      e.preventDefault();
        if(inputText.length <= 0 ) return;
        dispatch(addTodo(inputText));
        setInputText('');
    }
    function handleEditButton(){
      e.preventDefault();
      if(inputText.length <=0) return;
      dispatch(updateTodo({id:"", text:inputText}));
      setEdit(!edit);
      setInputText('');
    }
  return (
    <div className='w-full max-w-[600px]  mx-auto px-4  gap-2 flex flex-row flex-wrap justify-center items-center'>
        <input 
          value={inputText}
          maxLength={25}
          onChange={(e)=>setInputText(e.target.value)}
          type="text" className='bg-transparent flex-1 outline-none border-[1px] px-2 py-1 text-white rounded-sm ' />
        {!edit ? (
          <button 
          onClick={handleAddTodo}
          disabled = {inputText.length <= 0}
          className='bg-orange-500 w-full sm:w-max px-2 text-center font-bold py-1 rounded-sm'>Add Todo</button>
        ) : 
        (
          <button 
          onClick={handleEditButton}
          disabled = {inputText.length <= 0}
          className='bg-orange-500 w-full sm:w-max px-2 text-center font-bold py-1 rounded-sm'>Update</button>
        )}
    </div>
  )
}

export default AddTodo