import "./assets/styles/dark.css";
import "./assets/styles/light.css";
import "./assets/styles/modern-normalize.css";
import "./index.css";
import TodoAggregator from "./modules/TodoAggregator";
import TodoLocalStorageHandler from "./modules/TodoLocalStorageHandler";
import TodoHandler from "./modules/todoHandler";

const todo_handler = new TodoHandler();
const todo_aggregator = new TodoAggregator();
const todo_local_storage_handler = new TodoLocalStorageHandler();

window.todo_handler = todo_handler;
window.todo_aggregator = todo_aggregator;
window.todo_local_storage_handler = todo_local_storage_handler;
