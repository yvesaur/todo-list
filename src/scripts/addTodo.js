import { v4 as uuidv4 } from "uuid";
import { domHandler, todoHandler } from "..";
import { checkIfDateIsInPast, formatDateToString } from "../utils/date";

const add_todo_modal = document.querySelector(".add-todo-modal");
const add_todo_modal_form = document.querySelector(".add-todo-modal > form");
const todo_modal_cancel_btn = document.querySelector(
	".add-todo-modal .cancel-btn"
);
const todo_modal_add_btn = document.querySelector(".add-todo-form .add-btn");
const add_todo_btn = document.querySelector(".add-todo-btn");

add_todo_btn.addEventListener("click", () => {
	add_todo_modal.showModal();
	document.body.style.overflow = "hidden";
});

todo_modal_cancel_btn.addEventListener("click", (e) => {
	e.preventDefault();
	add_todo_modal.close();
	document.body.style.overflow = "";
});

todo_modal_add_btn.addEventListener("click", (e) => {
	const todo_item_id = uuidv4();
	e.preventDefault();

	let todo_data = getAddTodoFormInputsData();
	console.log("TODO INPUT DATA: ");
	console.table(todo_data);
	todo_data.id = todo_item_id;
	todo_data.due_date = formatDateToString(todo_data.due_date);

	if (validateTodoFormInputs(todo_data)) {
		todoHandler.addTodo(
			todo_data.id,
			todo_data.name,
			todo_data.priority,
			todo_data.due_date,
			todo_data.description
		);
		domHandler.addTodoItemToTable(todo_data);

		add_todo_modal_form.reset();
		add_todo_modal.close();
		document.body.style.overflow = "";
	}
});

function getAddTodoFormInputsData() {
	const formData = new FormData(add_todo_modal_form);

	const data = Object.fromEntries(formData.entries());

	return data;
}

function isInputPriorityValid(priority) {
	const formPriorityInput = add_todo_modal_form.querySelector("select");

	if (typeof priority === "undefined") {
		reportInputValidity(formPriorityInput, "Please select a task priority");
		return false;
	} else {
		return true;
	}
}

function isInputDateValid(date) {
	const formDateInput = add_todo_modal_form.querySelector(
		'input[name="due_date"]'
	);

	if (checkIfDateIsInPast(new Date(date))) {
		reportInputValidity(
			formDateInput,
			"Please select a date that was not in the past"
		);

		return false;
	} else {
		return true;
	}
}

function validateTodoFormInputs(todo_data) {
	if (
		isInputPriorityValid(todo_data.priority) &&
		isInputDateValid(todo_data.due_date)
	) {
		return true;
	} else {
		return false;
	}
}

function reportInputValidity(input_element, message) {
	input_element.setCustomValidity(message);
	input_element.reportValidity();
}
