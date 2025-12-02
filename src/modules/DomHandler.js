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

	constructor() {
		// initHighPriorityTodosTable();
	}

	addTodoItemToTable(todo_item_id, todo_data) {
		console.log(todo_data);
		const table_row_structure = `								
								<tr
									data-id="${todo_item_id}"
								>
									<td>
										<input
											class="status-checkbox"
											type="checkbox"
											name="isDone" />
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

		this.sortTodoItemToCorrectTable(todo_data.priority, table_row_structure);
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

	initTodosTable() {
		if (TodoLocalStorageHandler.isTodosLocalExists()) {
			console.log("Local Todos exists");
			const local_todos = TodoLocalStorageHandler.getTodosLocal();
			console.log(local_todos);
		} else {
			console.log("Local Todos does not exists");
		}
	}
}

export default DomHandler;
