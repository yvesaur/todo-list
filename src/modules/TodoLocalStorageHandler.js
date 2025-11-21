import { stringify } from "uuid";

class TodoLocalStorageHandler {
	TODOS_LOCAL_NAME = "todos_local";

	constructor() {
		if (!this.#isTodosLocalExists()) {
			this.createTodosLocal();
		}
	}

	createTodosLocal() {
		localStorage.setItem(this.TODOS_LOCAL_NAME, JSON.stringify([]));
	}

	#isTodosLocalExists() {
		return localStorage.hasOwnProperty(this.TODOS_LOCAL_NAME);
	}

	static isTodosLocalExists() {
		return localStorage.hasOwnProperty(this.TODOS_LOCAL_NAME);
	}

	isTodosLocalEmpty() {
		return localStorage.getItem(this.TODOS_LOCAL_NAME).length <= 0;
	}

	static getTodosLocal() {
		const local_todos = JSON.parse(localStorage.getItem(this.TODOS_LOCAL_NAME));
		return local_todos;
	}

	static updateTodosLocal(updated_local_todos) {
		localStorage.setItem("todos_local", JSON.stringify(updated_local_todos));
	}

	static addTodoLocal(todos) {
		let updated_local_todos = this.getTodosLocal() || [];
		updated_local_todos.push(todos);

		this.updateTodosLocal(updated_local_todos);
	}

	static deleteTodoLocal(todo_id) {
		let local_todos = this.getTodosLocal();

		const target_index = local_todos.findIndex((todo) => todo.id === todo_id);
		if (target_index !== -1) local_todos.splice(target_index, 1);

		localStorage.setItem(this.TODOS_LOCAL_NAME, JSON, stringify(local_todos));
	}

	static updateTodosLocalItem(
		todo_id,
		new_title,
		new_type,
		new_due_date,
		new_description
	) {
		let updated_local_todos = this.getTodosLocal();

		updated_local_todos[todo_id].title = new_title;
		updated_local_todos[todo_id].type = new_type;
		updated_local_todos[todo_id].due_date = new_due_date;
		updated_local_todos[todo_id].description = new_description;

		this.updateTodosLocal(updated_local_todos);
	}
}

export default TodoLocalStorageHandler;
