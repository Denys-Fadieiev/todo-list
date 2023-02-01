import * as yup from 'yup';

export const TODOLIST_VALIDATION_SCHEMA = yup.object({
  todoText: yup
    .string()
    .trim()
    .min(2)
    .required(),
});