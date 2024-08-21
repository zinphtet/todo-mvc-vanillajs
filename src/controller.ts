// @ts-nocheck
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.renderApp();
    this.view.bindAddToDoHandler(this.addTodoHandler.bind(this));
    this.model.bindModalToController(this.renderApp.bind(this));
  }

  renderApp() {
    console.log("render working");
    const todos = this.model.getAllTodos();
    this.view.renderUI(todos);
  }

  renderAppAgain() {
    this.renderApp();
  }
  addTodoHandler(name: string) {
    this.model.addTodo(name);

    console.log("all todos", this.model.getAllTodos());
    console.log("successfully added todo");
  }
}
export default Controller;
