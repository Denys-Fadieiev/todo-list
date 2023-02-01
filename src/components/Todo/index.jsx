import React from 'react';
import { connect } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteTodo } from '../../store/slices/todoListSlice';
import styles from './Todo.module.scss';

const {
  list,
  todoStyle,
  icons,
} = styles;

const Todo = ({ todoList, remove }) => {
  return (
    <ul className={list}>
      {todoList.map(todo => (
        <li key={todo.id} className={todoStyle}>
          <p>{JSON.stringify(todo.todo)}</p>
          <button 
            onClick={() => remove(todo.id)} 
            className={icons}
          >
            <AiOutlineDelete/>
          </button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({todoListState}) => todoListState;

const mapDispatchToProps = (dispath) => ({
  remove: id => dispath(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
