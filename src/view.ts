//@ts-nocheck

class View {
  constructor() {
    this.app = this.qs("#app");

    this.h1 = this.createEl("h1");
    this.h1.textContent = "TodoMVC App";

    this.form = this.createEl("form", "form");
    this.input = this.createEl("input");
    this.button = this.createEl("button");
    this.button.textContent = "Add ";

    this.ul = this.createEl("ul", "todo-list");

    this.form.appendChild(this.input);
    this.form.appendChild(this.button);
    // append Heading one
    this.app.appendChild(this.h1);
    this.app.appendChild(this.form);
    this.app.appendChild(this.ul);
  }

  qs(selector: string) {
    return document.querySelector(selector);
  }
  qsa(selector: string) {
    return document.querySelectorAll(selector);
  }
  createEl(type: string, className: string) {
    const element = document.createElement(type);
    if (className) {
      element.className += className;
    }
    return element;
  }

  renderUI(todos: Todo[]) {
    this.ul.innerHTML = "";
    let list = "";
    todos.forEach((todo) => {
      list += `<li class="todo-item"> ${todo.todo}</li>`;
    });
    this.ul.innerHTML = list;
  }
}

export default View;
