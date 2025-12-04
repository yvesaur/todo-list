import TodoItem from "./TodoItems";
import TodoLocalStorageHandler from "./TodoLocalStorageHandler";

class TodoHandler {
	#todos = [];

	constructor() {
		if (TodoLocalStorageHandler.isTodosLocalExists()) {
			this.#todos = TodoLocalStorageHandler.getTodosLocal();
		}
	}

	addTodo(id, name, priority, due_date, description) {
		this.#todos.push(new TodoItem(id, name, priority, due_date, description));

		TodoLocalStorageHandler.updateTodosLocal(this.#todos);
	}
}

export default TodoHandler;
