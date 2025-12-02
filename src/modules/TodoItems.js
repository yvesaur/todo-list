import TodoLocalStorageHandler from "./TodoLocalStorageHandler";

class TodoItem {
	id;
	isDone = false;
	dateCreated;
	name;
	priority;
	due_date;
	description;

	constructor(id, name, priority, due_date, description) {
		const now = new Date();

		this.id = id;
		this.dateCreated = now.toLocaleDateString("en-US");

		this.name = name;
		this.priority = priority;
		this.due_date = due_date;
		this.description = description;
	}

	#editName(new_name) {
		this.name = new_name;
	}

	#editPriority(new_priority) {
		this.type = new_priority;
	}

	#editDueDate(new_due_date) {
		this.due_date = new_due_date;
	}

	#editDescription(new_description) {
		this.description = new_description;
	}

	completeToDo() {
		this.isDone = true;
	}

	uncompleteToDo() {
		this.isDone = false;
	}

	updateProperties(new_name, new_type, new_due_date, new_description) {
		this.#editName(new_name);
		this.#editPriority(new_type);
		this.#editDueDate(new_due_date);
		this.#editDescription(new_description);

		TodoLocalStorageHandler.updateTodosLocalItem(
			this.id,
			new_name,
			new_type,
			new_due_date,
			new_description
		);
	}
}

export default TodoItem;
