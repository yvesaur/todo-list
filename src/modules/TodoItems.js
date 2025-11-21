import { v4 as uuidv4 } from "uuid";
import TodoLocalStorageHandler from "./TodoLocalStorageHandler";

class TodoItem {
	id;
	isDone = false;
	dateCreated;
	title;
	priority;
	dueDate;
	description;

	constructor(title, priority, dueDate, description) {
		const now = new Date();

		this.id = uuidv4();
		this.dateCreated = now.toLocaleDateString("en-US");

		this.title = title;
		this.priority = priority;
		this.dueDate = dueDate;
		this.description = description;
	}

	#editTitle(new_title) {
		this.title = new_title;
	}

	#editPriority(new_priority) {
		this.type = new_priority;
	}

	#editDueDate(new_due_date) {
		this.dueDate = new_due_date;
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

	updateProperties(new_title, new_type, new_due_date, new_description) {
		this.#editTitle(new_title);
		this.#editPriority(new_type);
		this.#editDueDate(new_due_date);
		this.#editDescription(new_description);

		TodoLocalStorageHandler.updateTodosLocalItem(
			this.id,
			new_title,
			new_type,
			new_due_date,
			new_description
		);
	}
}

export default TodoItem;
