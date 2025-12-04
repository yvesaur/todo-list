import "./assets/styles/buttons.css";
import "./assets/styles/dark.css";
import "./assets/styles/light.css";
import "./assets/styles/modals.css";
import "./assets/styles/modern-normalize.css";
import "./index.css";
import DomHandler from "./modules/DomHandler";
import TodoHandler from "./modules/TodoHandler";
import TodoLocalStorageHandler from "./modules/TodoLocalStorageHandler";
import "./scripts/form";

const todoHandler = new TodoHandler();
const domHandler = new DomHandler();

TodoLocalStorageHandler.initTodosToLocalStorage();
domHandler.initTodosTableItems();
domHandler.initFABEventListeners();
domHandler.initToDoFormEventListeners();

window.todoHandler = todoHandler;
window.TodoLocalStorageHandler = TodoLocalStorageHandler;
window.domHandler = domHandler;

export { domHandler, todoHandler };
