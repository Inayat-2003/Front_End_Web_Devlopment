import { createSlice } from "@reduxjs/toolkit";


const todoslice = createSlice({
    name: "todo",
    initialState:{
        todos:[]
    },
    reducers:{
        addtodo:(state, action)=>{
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
        },
        toggletodo:(state, action)=>{
            const todo = state.todos.find(todo=> todo.id === action.payload)
            if(todo){
                todo.completed =  !todo.completed;
            }
        },
        deletetodo:(state, action)=>{
            state.todos = state.todos.filter(todo=> todo.id !== action.payload)
        }
    }
})

export const {addtodo, toggletodo, deletetodo}= todoslice.actions;
export default todoslice.reducer;