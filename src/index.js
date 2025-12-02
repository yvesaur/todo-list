import "./assets/styles/buttons.css";
import "./assets/styles/dark.css";
import "./assets/styles/light.css";
import "./assets/styles/modals.css";
import "./assets/styles/modern-normalize.css";
import "./index.css";
import DomHandler from "./modules/DomHandler";
import TodoAggregator from "./modules/TodoAggregator";
import TodoHandler from "./modules/TodoHandler";
import TodoLocalStorageHandler from "./modules/TodoLocalStorageHandler";
import "./scripts/addTodo";

const todoHandler = new TodoHandler();
const todoAggregator = new TodoAggregator();
const domHandler = new DomHandler();

TodoLocalStorageHandler.initTodosToLocalStorage();
domHandler.initTodosTableItems();

window.TodoLocalStorageHandler = TodoLocalStorageHandler;
window.domHandler = domHandler;

export { domHandler, todoAggregator, todoHandler };
