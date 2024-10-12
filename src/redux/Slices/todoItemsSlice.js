import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    todoItems: [],
    status: "idle",
    error: null,
};
export const fetchTodos = createAsyncThunk("todoItems/fetchTodos", async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    return response.data;
}) 


export const todoItemsSlice = createSlice({
    name: "todoItems",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoItems.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todoItems = state.todoItems.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todoItems.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed; // Toggle the completed status
            }
        },
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.todoItems = action.payload;
            state.status = "succeeded"
        })
            .addCase(fetchTodos.pending, (state) => {
            state.status = "loading";
        })
       
        .addCase(fetchTodos.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
            
        })
    }
})

export const {addTodo, deleteTodo, toggleTodo} = todoItemsSlice.actions;
export default todoItemsSlice.reducer;