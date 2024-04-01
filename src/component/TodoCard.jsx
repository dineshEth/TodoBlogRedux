import React, { useState } from 'react'
import { editImage, deleteImage, save } from '../assets'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todo';

function TodoCard({text, id}) {
    const [editable, setEditable] = useState(false);
    const [textValue, setTextValue] = useState(text);

    const dispatch = useDispatch();
    function handleDeleteTodo() {
        dispatch(deleteTodo(id));
    }
    function handleUpdateTodo(e) {
        e.preventDefault();
        dispatch(updateTodo({id, 'text':textValue}));
        setEditable(false);
    }
  return (
    <div className='w-full mx-auto my-4  flex bg-blue-200 py-1 px-4 rounded-sm flex-row justify-between'>
        <div className='flex flex-row items-center gap-2 justify-start'>
            <input type="checkbox" name="" id="" />
            {!editable ? (
                <p className='text-black'>{textValue}</p>
            ) : (
                <input type="text" className='' readOnly={!editable} value={textValue} onChange={(e)=>setTextValue(e.target.value)} />
            )}
            
        </div>
        <div className='flex flex-row justify-between gap-4 items-center'>
            {editable ? (
                <button 
                onClick={handleUpdateTodo}
                className='w-[32px] p-1 rounded-sm bg-gray-500'>
                    <img src={save} alt="" className='' />
                </button>) : 
                (
                <button 
                onClick={() => setEditable(true)}
                className='w-[32px] p-1 rounded-sm bg-gray-500'>
                    <img src={editImage} alt="" className='' />
                </button>
                )}
            <button
            onClick={handleDeleteTodo}
            className='w-[32px] p-1 rounded-sm bg-gray-500'>
                <img src={deleteImage} alt="" className='' />
            </button>
        </div>
    </div>
  )
}

export default TodoCard