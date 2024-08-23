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

    // this.bindAddToDoHandler();
    // this.bindDeleteHandler();
    // this.bindEditHandler();
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

  bindAddToDoHandler(handler: () => {}) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      //   you can add validation here
      const inputValue = this.input.value;
      if (inputValue.trim() === "") return;
      handler(inputValue);
      this.input.value = "";
    });
  }

  bindDeleteHandler(handler) {
    this.ul.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("delete")) {
        const deleteLi = target.closest(".todo-item");
        const deleteId = deleteLi.dataset.id;
        handler(parseInt(deleteId));
      }
    });
  }

  bindToggleHandler(handler) {
    this.ul.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("toggle")) {
        const deleteLi = target.closest(".todo-item");
        const deleteId = deleteLi.dataset.id;
        handler(parseInt(deleteId));
      }
    });
  }

  bindEditHandler(handler) {
    this.ul.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("edit")) {
        const deleteLi = target.closest(".todo-item");
        const deleteId = deleteLi.dataset.id;
        let updatedText = "";
        const pText = deleteLi.querySelector("p");
        pText.setAttribute("contenteditable", true);
        pText.focus();
        pText.addEventListener("focusout", (e) => {
          console.log("focus out");
          updatedText = pText.textContent;
          handler(parseInt(deleteId), updatedText);
        });
      }
    });
  }

  renderUI(todos: Todo[]) {
    this.ul.innerHTML = "";
    let list = "";
    todos.forEach((todo) => {
      list += `<li class="todo-item ${todo.completed && "completed"}" data-id=${
        todo.id
      }> 
        <p>   ${todo.todo}</p>
    
       <div>
       <button class='delete'> delete </button>
        <button class='edit'> edit </button>
        <button class="toggle"> toggle state</button>
       </div>
      </li>`;
    });
    this.ul.innerHTML = list;
  }
}

export default View;
