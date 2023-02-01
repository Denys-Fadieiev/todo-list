import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {todoList: [], },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({ 
        todo: action.payload,
        
        id: v4(),
      });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },
  },
});

const { reducer, actions } = todoListSlice;
export const { addTodo, deleteTodo } = actions;

export default reducer;