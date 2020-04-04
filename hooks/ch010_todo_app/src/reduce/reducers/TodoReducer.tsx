import { Reducer } from 'react'
import { Todo } from '../../model/TodoModel';
import { TodoAction } from '../action/TodoAction';


export const TodoReducer: Reducer<Array<Todo>, TodoAction> = (todos, action) => {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.todo.id)
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.todo.id ? {...todo, checked: !todo.checked}: todo)
    default:
      return todos
  }
}