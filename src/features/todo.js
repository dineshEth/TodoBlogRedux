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
                text : action.payload
            }
            state.todos.push(todo);   
        },

        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        updateTodo : (state, action) => {
            state.todos = state.todos.map(
                (todo) => todo.id === action.payload ? todo.text = todo.payload : todo
            )
        }
    }
});

export const  {addTodo, deleteTodo, updateTodo } = todoSlices.actions;
export default todoSlices.reducer;
