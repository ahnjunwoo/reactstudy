export type Todo = {
  id: Number,
  text: String,
  checked: Boolean
}

export type TodoProps = {
  todo: Todo,
  onRemove: (arg: Todo) => void,
  onToggle: (arg: Todo) => void,
  style: Object
}

export type TodoListProps = {
  todos: Array<Todo>,
  onRemove: (arg: Todo) => void,
  onToggle: (arg: Todo) => void
}

export type TodoInsertProps = {
  onInsert: (args: String) => void
}