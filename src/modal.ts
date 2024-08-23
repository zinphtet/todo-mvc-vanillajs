// @ts-nocheck

const initialTodos = [
  // {
  //   id: 1,
  //   todo: "Read JS Book",
  //   completed: false,
  // },
  // {
  //   id: 2,
  //   todo: "Read Design Patterns Book",
  //   completed: false,
  // },
];
class Modal {
  constructor() {
    this.todos = this.getAllTodos();
  }

  bindModalToController(handler) {
    this.todoListChanged = handler;
  }
  _commitDB() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.todoListChanged();
  }

  addTodo(name: string) {
    const length = this.todos.length;
    this.todos.push({
      id: length + 1,
      todo: name,
      completed: false,
    });
    this._commitDB();
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this._commitDB();
  }
  updateTodoName(id: number, name: string) {
    console.log("update TOdo Name", name, id);
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          todo: name,
        };
      }
      return todo;
    });
    this._commitDB();
  }

  toggleCompleted(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this._commitDB();
  }

  getAllTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    return todos || [];
  }
}

export default Modal;
