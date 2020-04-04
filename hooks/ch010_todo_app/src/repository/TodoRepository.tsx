import { Todo } from '../model/TodoModel';

export function createBulkTodos(count: Number) {
  const array: Array<Todo> = []
  for (let i = 1; i <= count; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }
  return array
}