import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

 export const todoSlices = createSlice ({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);   
        },

        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        updateTodo : (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos[index].text  = action.payload.text; 
        },
    }
});

export const  {addTodo, deleteTodo, updateTodo } = todoSlices.actions;
export default todoSlices.reducer;
