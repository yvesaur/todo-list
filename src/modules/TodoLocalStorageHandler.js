import { stringify } from "uuid";

class TodoLocalStorageHandler {
	static TODOS_LOCAL_NAME = "todos_local";

	constructor() {}

	static initTodosToLocalStorage() {
		if (!this.isTodosLocalExists()) {
			this.createTodosLocal();
		}
	}

	static createTodosLocal() {
		localStorage.setItem(this.TODOS_LOCAL_NAME, JSON.stringify([]));
	}

	isTodosLocalExists() {
		return localStorage.hasOwnProperty(this.TODOS_LOCAL_NAME);
	}

	static isTodosLocalExists() {
		return localStorage.hasOwnProperty(this.TODOS_LOCAL_NAME);
	}

	static isTodosLocalEmpty() {
		console.log(this.getTodosLocal(this.TODOS_LOCAL_NAME));

		return this.getTodosLocal(this.TODOS_LOCAL_NAME).length <= 0;
	}

	static getTodosLocal() {
		const local_todos = JSON.parse(localStorage.getItem(this.TODOS_LOCAL_NAME));
		return local_todos;
	}

	static updateTodosLocal(updated_local_todos) {
		localStorage.setItem("todos_local", JSON.stringify(updated_local_todos));
	}

	static addTodoLocal(new_todos) {
		this.updateTodosLocal(new_todos);
	}

	static deleteTodoLocal(todo_id) {
		let local_todos = this.getTodosLocal();

		const target_index = local_todos.findIndex((todo) => todo.id === todo_id);
		if (target_index !== -1) local_todos.splice(target_index, 1);

		localStorage.setItem(this.TODOS_LOCAL_NAME, JSON, stringify(local_todos));
	}

	static updateTodosLocalItem(
		todo_id,
		new_name,
		new_type,
		new_due_date,
		new_description
	) {
		let updated_local_todos = this.getTodosLocal();

		updated_local_todos[todo_id].name = new_name;
		updated_local_todos[todo_id].type = new_type;
		updated_local_todos[todo_id].due_date = new_due_date;
		updated_local_todos[todo_id].description = new_description;

		this.updateTodosLocal(updated_local_todos);
	}
}

export default TodoLocalStorageHandler;
