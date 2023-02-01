import React from 'react';
import Todo from '../Todo';
import TodoForm from '../TodoForm';
import TodoHead from '../TodoHead';
import styles from './TodoList.module.scss';

const TodoList = () => {
  return (
    <div className={styles.container}>
      <TodoHead styles={styles}/>
      <TodoForm/>
      <Todo/>
    </div>
  );
}

export default TodoList;
