import { v4 as uuidv4 } from "uuid";
import { todoHandler } from "..";
import { getTodoFormInputsData, validateTodoFormInputs } from "../scripts/form";
import { formatDateToString } from "../utils/date";
import { toCapitalizeFirstLetter } from "../utils/string";
import TodoLocalStorageHandler from "./TodoLocalStorageHandler";

class DomHandler {
	#currentUserMode = 0;
	#target_todo_id;
	#high_priority_todo_table = document.querySelector(
		".high-priority table > tbody"
	);
	#normal_priority_todo_table = document.querySelector(
		".normal-priority table > tbody"
	);
	#low_priority_todo_table = document.querySelector(
		".low-priority table > tbody"
	);
	PriorityFlagColor = Object.freeze({
		HIGH: "--error",
		NORMAL: "--primary",
		LOW: "--secondary",
	});
	#userModes = Object.freeze({
		0: "normal",
		1: "edit",
		2: "deletion",
	});
	add_todo_btn = document.querySelector(".add-todo-btn");
	add_todo_modal = document.querySelector(".add-todo-modal");
	add_todo_modal_form = document.querySelector(".add-todo-modal > form");
	add_todo_modal_cancel_btn = document.querySelector(
		".todo-form.add-todo .cancel-btn"
	);
	add_todo_modal_add_btn = document.querySelector(
		".todo-form.add-todo .add-btn"
	);

	update_todo_btn = document.querySelector(".edit-todo-btn");
	edit_todo_modal = document.querySelector(".edit-todo-modal");
	edit_todo_modal_form = document.querySelector(".edit-todo-modal > form");
	edit_todo_modal_cancel_btn = document.querySelector(
		".todo-form.edit-todo .cancel-btn"
	);
	edit_todo_modal_edit_btn = document.querySelector(
		".todo-form.edit-todo .edit-btn"
	);

	constructor() {}

	switchToNormalMode() {
		return (this.#currentUserMode = 0);
	}

	switchToEditMode() {
		return (this.#currentUserMode = 1);
	}

	switchToDeletionMode() {
		return (this.#currentUserMode = 2);
	}

	addTodoItemToTable(todo_data) {
		const table_row_structure = this.generateTableRowStructure(todo_data);

		this.renderTodoItemToCorrectTable(todo_data.priority, table_row_structure);

		if (this.#currentUserMode === 0) {
			this.addEventListenerToToDoStatusCheckbox(todo_data.id);
		} else if (this.#currentUserMode === 1) {
			this.addEventListenerToToDoItemsEditBtn(todo_data.id);
		}
	}

	generateTableRowStructure(todo_data) {
		if (this.#currentUserMode === 0) {
			return `
								<tr
									data-id="${todo_data.id}"
								>
									<td>
										<input
											class="status-checkbox"
											type="checkbox"
											name="isDone"
											data-id="${todo_data.id}" 
											${todo_data.isDone && "checked"}/>
									</td>
									<td>${todo_data.name}</td>
									<td>
										<span
											class="material-symbols-outlined high"
											style="font-variation-settings: 'FILL' 1;
											color: var(${this.changePriorityFlagColor(todo_data.priority)})"
											>flag_2</span
										>
										${toCapitalizeFirstLetter(todo_data.priority)}
									</td>
									<td>
										${todo_data.description}
									</td>
									<td>${todo_data.due_date}</td>
								</tr>
			`;
		} else {
			return `
								<tr
									data-id="${todo_data.id}"
								>
									<td>
										<button
											data-id="${todo_data.id}"
											class="material-symbols-outlined edit-todo-item-btn">
											edit_square
										</button>
									</td>
									<td>${todo_data.name}</td>
									<td>
										<span
											class="material-symbols-outlined high"
											style="font-variation-settings: 'FILL' 1;
											color: var(${this.changePriorityFlagColor(todo_data.priority)})"
											>flag_2</span
										>
										${toCapitalizeFirstLetter(todo_data.priority)}
									</td>
									<td>
										${todo_data.description}
									</td>
									<td>${todo_data.due_date}</td>
								</tr>
			`;
		}
	}

	renderTodoItemToCorrectTable(priority, table_row_structure) {
		this.sortTodoItemToCorrectTable(priority, table_row_structure);
	}

	sortTodoItemToCorrectTable(priority, table_row_structure) {
		if (priority === "high") {
			this.#high_priority_todo_table.innerHTML += table_row_structure;
		} else if (priority === "normal") {
			this.#normal_priority_todo_table.innerHTML += table_row_structure;
		} else {
			this.#low_priority_todo_table.innerHTML += table_row_structure;
		}
	}

	changePriorityFlagColor(priority) {
		return this.PriorityFlagColor[priority.toUpperCase()];
	}

	clearTodoTableContents() {
		this.#high_priority_todo_table.innerHTML = "";
		this.#normal_priority_todo_table.innerHTML = "";
		this.#low_priority_todo_table.innerHTML = "";
	}

	initFABEventListeners() {
		this.add_todo_btn.addEventListener("click", (e) => {
			e.preventDefault();
			this.add_todo_modal.showModal();
			document.body.style.overflow = "hidden";
		});

		this.update_todo_btn.addEventListener("click", (e) => {
			e.preventDefault();

			if (this.#currentUserMode === 1) {
				this.switchToNormalMode();
				this.clearTodoTableContents();
				console.log("You are on Normal mode.");
			} else {
				this.switchToEditMode();
				console.log("You are on Edit mode.");
			}

			// Render to todo items to edit mode or normal mode
			this.initTodosTableItems();
		});
	}

	initToDoFormEventListeners() {
		this.add_todo_modal_add_btn.addEventListener("click", (e) => {
			e.preventDefault();
			const todo_item_id = uuidv4();

			let todo_data = getTodoFormInputsData(this.add_todo_modal_form);
			todo_data.id = todo_item_id;
			todo_data.due_date = formatDateToString(todo_data.due_date);

			if (validateTodoFormInputs(this.add_todo_modal_form, todo_data)) {
				todoHandler.addTodo(
					todo_data.id,
					todo_data.name,
					todo_data.priority,
					todo_data.due_date,
					todo_data.description
				);
				this.addTodoItemToTable(todo_data);

				this.add_todo_modal_form.reset();
				this.add_todo_modal.close();
				document.body.style.overflow = "";
			}
		});

		this.add_todo_modal_cancel_btn.addEventListener("click", () => {
			this.add_todo_modal.close();
			document.body.style.overflow = "";
		});

		this.edit_todo_modal_cancel_btn.addEventListener("click", () => {
			this.edit_todo_modal.close();
			document.body.style.overflow = "";
		});

		this.edit_todo_modal_edit_btn.addEventListener("click", (e) => {
			e.preventDefault();

			let updated_todo_data = getTodoFormInputsData(this.edit_todo_modal_form);
			updated_todo_data.due_date = formatDateToString(
				updated_todo_data.due_date
			);

			if (
				validateTodoFormInputs(this.edit_todo_modal_form, updated_todo_data)
			) {
				TodoLocalStorageHandler.updateTodosLocalItem(
					this.#target_todo_id,
					updated_todo_data.name,
					updated_todo_data.priority,
					updated_todo_data.due_date,
					updated_todo_data.description
				);

				this.edit_todo_modal.close();
				document.body.style.overflow = "";

				// Render the updated item to UI
				this.initTodosTableItems();

				console.log(`ToDo Item #${this.#target_todo_id} has been updated.`);
			}
		});
	}

	initTodosTableItems() {
		if (this.#currentUserMode === 1 || this.#currentUserMode === 2) {
			this.clearTodoTableContents();
		}

		if (TodoLocalStorageHandler.isTodosLocalExists()) {
			const local_todos = TodoLocalStorageHandler.getTodosLocal();

			if (local_todos.length <= 0)
				return console.log("Local Todos is empty. No items to be rendered.");

			// Render Todo item to each table
			for (let i = 0; i < local_todos.length; i++) {
				this.addTodoItemToTable(local_todos[i]);
			}

			// Add the event listener for each To Do Item
			this.addEventListenerToEachToDoItems();
		} else {
			console.log("Local Todos does not exists");
		}
	}

	addEventListenerToToDoStatusCheckbox() {
		const statusCheckboxElements = document.querySelectorAll(
			`tr > td:first-child > input[type="checkbox"]`
		);

		for (let i = 0; i < statusCheckboxElements.length; i++) {
			statusCheckboxElements[i].addEventListener("click", (e) => {
				todoHandler.updateToDoItemStatus(
					statusCheckboxElements[i].dataset.id,
					e.target.checked
				);
			});
		}
	}

	addEventListenerToToDoItemsEditBtn() {
		const editTodoBtnElements = document.querySelectorAll(
			`tr > td:first-child > button`
		);

		for (let i = 0; i < editTodoBtnElements.length; i++) {
			editTodoBtnElements[i].addEventListener("click", () => {
				const target_id = editTodoBtnElements[i].dataset.id;
				this.edit_todo_modal.show();
				this.renderEditFormModalInputValues(target_id);
				this.#target_todo_id = target_id;
				document.body.style.overflow = "hidden";
			});
		}
	}

	addEventListenerToEachToDoItems() {
		if (this.#currentUserMode === 0) {
			this.addEventListenerToToDoStatusCheckbox();
		} else if (this.#currentUserMode === 1) {
			this.addEventListenerToToDoItemsEditBtn();
		}
	}

	renderEditFormModalInputValues(id) {
		const target_todo_data = TodoLocalStorageHandler.getSingleTodoLocal(id);

		const new_name_input =
			this.edit_todo_modal_form.querySelector(`input[name="name"]`);
		const new_priority_input = this.edit_todo_modal_form.querySelector(
			`select[name="priority"]`
		);
		const new_description_input = this.edit_todo_modal_form.querySelector(
			`textarea[name="description"]`
		);
		const new_due_date_input = this.edit_todo_modal_form.querySelector(
			`input[name="due_date"]`
		);

		new_name_input.value = target_todo_data.name;
		new_priority_input.value = target_todo_data.priority;
		new_description_input.value = target_todo_data.description;
		new_due_date_input.value = new Date(
			target_todo_data.due_date
		).toLocaleDateString("en-CA");
	}
}

export default DomHandler;
