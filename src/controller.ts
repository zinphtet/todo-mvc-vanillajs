// @ts-nocheck
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.renderApp();
    this.view.bindAddToDoHandler(this.addTodoHandler.bind(this));
    this.view.bindDeleteHandler(this.deleteTodoHandler.bind(this));
    this.view.bindToggleHandler(this.toggleTodoHandler.bind(this));
    this.view.bindEditHandler(this.editTodoHandler.bind(this));
    // render App Again
    this.model.bindModalToController(this.renderApp.bind(this));
  }

  renderApp() {
    const todos = this.model.getAllTodos();
    console.log("this.todos", todos);
    this.view.renderUI(todos || []);
  }
  addTodoHandler(name: string) {
    this.model.addTodo(name);
  }

  deleteTodoHandler(id: number) {
    this.model.removeTodo(id);
  }
  toggleTodoHandler(id: number) {
    this.model.toggleCompleted(id);
  }
  editTodoHandler(id: number, name: string) {
    this.model.updateTodoName(id, name);
  }
}
export default Controller;
