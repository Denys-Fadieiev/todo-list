import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from './slices/todoListSlice';

const store = configureStore({
  reducer: {
    todoListState: todoListReducer,
  },
});

export default store;