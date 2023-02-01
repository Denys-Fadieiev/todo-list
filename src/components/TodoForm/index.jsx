import React from 'react';
import { Form, Formik } from 'formik';
import Input from './Input';
import { connect } from 'react-redux';
import { addTodo } from '../../store/slices/todoListSlice';
import { TODOLIST_VALIDATION_SCHEMA } from '../../utils/validate/validationSchema';
import styles from './TodoForm.module.scss';

const { form, btn } = styles;

const TodoForm = ({ createNewTodo }) => {
  const initialValues = {todoText: '',};

  const handleSubmit = (values, formikBag) => {
    createNewTodo(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TODOLIST_VALIDATION_SCHEMA}
    >
      <Form className={form}>
        <Input
          type='text'
          name='todoText'
          placeholder='Add todo'
          autoFocus
          styles={styles}
        />
        <button 
          type='submit'
          className={btn}
        >
          Add todo
        </button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = (dispath) => ({
  createNewTodo: text => dispath(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
