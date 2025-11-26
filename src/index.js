import "./assets/styles/buttons.css";
import "./assets/styles/dark.css";
import "./assets/styles/light.css";
import "./assets/styles/modals.css";
import "./assets/styles/modern-normalize.css";
import "./index.css";
import TodoAggregator from "./modules/TodoAggregator";
import TodoLocalStorageHandler from "./modules/TodoLocalStorageHandler";
import TodoHandler from "./modules/todoHandler";

const add_todo_modal = document.querySelector(".add-todo-modal");
const add_todo_modal_form = document.querySelector(".add-todo-modal > form");
const todo_modal_close_btn = document.querySelector(
	".add-todo-modal .cancel-btn"
);
const add_todo_btn = document.querySelector(".add-todo-btn");

add_todo_btn.addEventListener("click", () => {
	add_todo_modal.showModal();
	document.body.style.overflow = "hidden";
});

todo_modal_close_btn.addEventListener("click", () => {
	add_todo_modal.close();
	document.body.style.overflow = "";
});

const todo_handler = new TodoHandler();
const todo_aggregator = new TodoAggregator();
const todo_local_storage_handler = new TodoLocalStorageHandler();

window.todo_handler = todo_handler;
window.todo_aggregator = todo_aggregator;
window.todo_local_storage_handler = todo_local_storage_handler;
