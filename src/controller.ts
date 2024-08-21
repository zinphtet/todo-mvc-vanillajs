// @ts-nocheck
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this._renderApp();
  }

  _renderApp() {
    const todos = this.model.getAllTodos();
    this.view.renderUI(todos);
  }
}
export default Controller;
