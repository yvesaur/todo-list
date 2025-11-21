import TodoItem from "./TodoItems";
import TodoLocalStorageHandler from "./TodoLocalStorageHandler";

class TodoHandler {
	#todos = [];

	constructor() {
		if (TodoLocalStorageHandler.isTodosLocalExists()) {
			this.#todos = TodoLocalStorageHandler.getTodosLocal();
		}
	}

	addTodo(title, priority, dueDate, description) {
		this.#todos.push(new TodoItem(title, priority, dueDate, description));

		TodoLocalStorageHandler.addTodoLocal(this.#todos);
	}

	deleteTodo(todo_id) {
		const target_index = this.#todos.findIndex((todo) => todo.id === todo_id);
		if (target_index !== -1) this.#todos.splice(target_index, 1);

		TodoLocalStorageHandler.deleteTodoLocal(todo_id);
	}

	getTodos() {
		return this.#todos;
	}
}

export default TodoHandler;
