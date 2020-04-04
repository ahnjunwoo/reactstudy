import { Todo } from '../../model/TodoModel';

export type TodoTypes = 'INSERT' |'REMOVE' | 'TOGGLE'

export type TodoAction = {
  type: TodoTypes,
  todo: Todo
}