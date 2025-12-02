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

		TodoLocalStorageHandler.addTodoLocal(this.#todos);
	}

	deleteTodo(todo_id) {
		const target_index = this.getToDoItemIndex(todo_id);
		if (target_index !== -1) this.#todos.splice(target_index, 1);

		TodoLocalStorageHandler.deleteTodoLocal(todo_id);
	}

	updateToDoItemStatus(todo_id, todo_item_status) {
		const target_index = this.getToDoItemIndex(todo_id);

		this.#todos[target_index].isDone = todo_item_status;
		// console.log(this.#todos[target_index]);

		TodoLocalStorageHandler.updateTodosLocalItem(
			target_index,
			this.#todos[target_index].isDone,
			this.#todos[target_index].name,
			this.#todos[target_index].priority,
			this.#todos[target_index].due_date,
			this.#todos[target_index].description
		);
	}

	getToDoItemIndex(todo_id) {
		return this.#todos.findIndex((todo) => todo.id === todo_id);
	}

	getTodos() {
		return this.#todos;
	}
}

export default TodoHandler;
