import { stringify } from "uuid";
import TodoItem from "./TodoItems";

class TodoLocalStorageHandler {
	static TODOS_LOCAL_NAME = "todos_local";

	constructor() {}

	static initTodosToLocalStorage() {
		if (!this.isTodosLocalExists()) {
			this.createTodosLocal();
		}
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

	static createTodosLocal() {
		localStorage.setItem(this.TODOS_LOCAL_NAME, JSON.stringify([]));
	}

	static getTodosLocal() {
		let local_todos = JSON.parse(localStorage.getItem(this.TODOS_LOCAL_NAME));
		return this.sortToDoItems(local_todos);
	}

	static getSingleTodoLocal(todo_id) {
		const local_todos = JSON.parse(localStorage.getItem(this.TODOS_LOCAL_NAME));
		const target_index = local_todos.findIndex((todo) => todo.id === todo_id);

		return local_todos[target_index];
	}

	static updateTodosLocal(updated_local_todos) {
		localStorage.setItem("todos_local", JSON.stringify(updated_local_todos));
	}

	static updateTodosLocalItem(
		target_id,
		new_name,
		new_priority,
		new_due_date,
		new_description
	) {
		let updated_local_todos = this.getTodosLocal();
		const target_index = updated_local_todos.findIndex(
			(todo) => todo.id === target_id
		);

		updated_local_todos[target_index].name = new_name;
		updated_local_todos[target_index].new_priority = new_priority;
		updated_local_todos[target_index].due_date = new_due_date;
		updated_local_todos[target_index].description = new_description;

		this.updateTodosLocal(updated_local_todos);
	}

	static updateTodosLocalItemStatus(todo_id, new_status) {
		let updated_local_todos = this.getTodosLocal();
		const target_index = updated_local_todos.findIndex(
			(todo) => todo.id === todo_id
		);

		updated_local_todos[target_index].isDone = new_status;

		this.updateTodosLocal(updated_local_todos);
	}

	static deleteTodoLocal(todo_id) {
		let local_todos = this.getTodosLocal();

		const target_index = local_todos.findIndex((todo) => todo.id === todo_id);
		if (target_index !== -1) local_todos.splice(target_index, 1);

		this.updateTodosLocal(local_todos);
	}

	static sortToDoItems(todos_data) {
		const sorted_todos_by_date = this.sortTodoItemsByDate(todos_data);
		return this.sortTodoItemsByCompletion(sorted_todos_by_date);
	}

	static sortTodoItemsByCompletion(todos_data) {
		return todos_data.sort((a, b) => Number(a.isDone) - Number(b.isDone));
	}

	static sortTodoItemsByDate(todos_data) {
		return todos_data.sort(
			(a, b) => new Date(a.due_date) - new Date(b.due_date)
		);
	}
}

export default TodoLocalStorageHandler;
