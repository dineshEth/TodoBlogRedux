import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id : 1,
            text: "Hello From redux"
        }
    ]
}

 export const todoSlices = createSlice ({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload.text
            }
            state.todos.push(todo);   
        },
        deleteTodo : (state, action) => {
            state.todos.filter((todo) => todo.id !== action.payload.id);
        }
    }
});

export const  {addTodo, deleteTodo } = todoSlices.actions;
export default todoSlices.reducer;
