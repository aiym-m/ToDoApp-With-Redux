import { configureStore } from "@reduxjs/toolkit";
import todoItemsReducer from "./Slices/todoItemsSlice";
export const store = configureStore({
    reducer: {
        todoItems: todoItemsReducer
    }
})