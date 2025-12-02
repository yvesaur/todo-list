import { v4 as uuidv4 } from "uuid";
import { todoHandler } from "..";
import {
	getAddTodoFormInputsData,
	validateTodoFormInputs,
} from "../scripts/todoFormInputValidation";
import { formatDateToString } from "../utils/date";
import { toCapitalizeFirstLetter } from "../utils/string";
import TodoLocalStorageHandler from "./TodoLocalStorageHandler";

class DomHandler {
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
	add_todo_modal = document.querySelector(".add-todo-modal");
	add_todo_modal_form = document.querySelector(".add-todo-modal > form");
	todo_modal_cancel_btn = document.querySelector(".add-todo-form .cancel-btn");
	todo_modal_add_btn = document.querySelector(".add-todo-form .add-btn");
	add_todo_btn = document.querySelector(".add-todo-btn");
	update_todo_btn = document.querySelector(".edit-todo-btn");

	constructor() {}

	addTodoItemToTable(todo_data) {
		const table_row_structure = `								
								<tr
									data-id="${todo_data.id}"
								>
									<td>
										<input
											class="status-checkbox"
											type="checkbox"
											name="isDone" 
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

		this.renderTodoItemToCorrectTable(
			todo_data.id,
			todo_data.priority,
			table_row_structure
		);
	}

	renderTodoItemToCorrectTable(id, priority, table_row_structure) {
		this.sortTodoItemToCorrectTable(priority, table_row_structure);
		this.addEventListenerToToDoStatusCheckbox(id);
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

	addEventListenerToToDoStatusCheckbox(id) {
		const statusCheckboxElement = document.querySelector(
			`[data-id="${id}"] > td:first-child > input`
		);

		statusCheckboxElement.addEventListener("change", (e) => {
			console.log(e.target.checked);
			todoHandler.updateToDoItemStatus(id, e.target.checked);
		});
	}

	changePriorityFlagColor(priority) {
		return this.PriorityFlagColor[priority.toUpperCase()];
	}

	initTodosTableItems() {
		if (TodoLocalStorageHandler.isTodosLocalExists()) {
			const local_todos = TodoLocalStorageHandler.getTodosLocal();

			for (let i = 0; i < local_todos.length; i++) {
				this.addTodoItemToTable(local_todos[i]);
			}
		} else {
			console.log("Local Todos does not exists");
		}
	}

	initFABEventListeners() {
		this.add_todo_btn.addEventListener("click", (e) => {
			e.preventDefault();
			this.add_todo_modal.showModal();
			document.body.style.overflow = "hidden";
		});
	}

	initToDoFormEventListeners() {
		this.todo_modal_cancel_btn.addEventListener("click", (e) => {
			e.preventDefault();
			this.add_todo_modal.close();
			console.log("THIS IS CLICKED");
			document.body.style.overflow = "";
		});

		this.todo_modal_add_btn.addEventListener("click", (e) => {
			e.preventDefault();
			const todo_item_id = uuidv4();

			let todo_data = getAddTodoFormInputsData(this.add_todo_modal_form);
			console.log("TODO INPUT DATA: ");
			console.table(todo_data);
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
	}
}

export default DomHandler;
