// @ts-nocheck

const initialTodos = [
  {
    id: 1,
    todo: "Read JS Book",
    completed: false,
  },
  {
    id: 2,
    todo: "Read Design Patterns Book",
    completed: false,
  },
];
class Modal {
  constructor() {
    this.todos = [...initialTodos];
  }

  bindModalToController(handler) {
    this.todoListChanged = handler;
  }

  addTodo(name: string) {
    const length = this.todos.length;
    this.todos.push({
      id: length + 1,
      todo: name,
      completed: false,
    });
    this.todoListChanged();
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  updateTodoName(id: number, name: string) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          name: name,
        };
      }
      return todo;
    });
  }

  updateCompleted(id: number, state: boolean) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: state,
        };
      }
      return todo;
    });
  }

  getAllTodos() {
    return this.todos;
  }
}

export default Modal;
