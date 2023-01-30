import React from 'react';
import Todo from '../Todo';
import TodoForm from '../TodoForm';
import TodoHead from '../TodoHead';

const TodoList = () => {
  return (
    <div>
      <TodoHead/>
      <TodoForm/>
      <Todo/>
    </div>
  );
}

export default TodoList;
