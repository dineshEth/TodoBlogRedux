import React from 'react'
import { editImage, deleteImage } from '../assets'

function TodoCard({text, id}) {
  return (
    
    <div className='w-full mx-auto my-4  flex bg-blue-200 py-1 px-4 rounded-sm flex-row justify-between'>
        <div className='flex flex-row items-center gap-2 justify-start'>
            <input type="checkbox" name="" id="" />
            <p className='text-black'>{text}</p>
        </div>
        <div className='flex flex-row justify-between gap-4 items-center'>
            <button className='w-[32px] p-1 rounded-sm bg-gray-500'>
                <img src={editImage} alt="" className='' />
            </button>
            <button className='w-[32px] p-1 rounded-sm bg-gray-500'>
                <img src={deleteImage} alt="" className='' />
            </button>
        </div>
    </div>
  )
}

export default TodoCard