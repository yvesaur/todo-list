import { checkIfDateIsInPast } from "../utils/date";

function getAddTodoFormInputsData(form_element) {
	const formData = new FormData(form_element);

	const data = Object.fromEntries(formData.entries());

	return data;
}

function isInputPriorityValid(form_element, priority) {
	const formPriorityInput = form_element.querySelector("select");

	if (typeof priority === "undefined") {
		reportInputValidity(formPriorityInput, "Please select a task priority");
		return false;
	} else {
		return true;
	}
}

function isInputDateValid(form_element, date) {
	const formDateInput = form_element.querySelector('input[name="due_date"]');

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

function validateTodoFormInputs(form_element, todo_data) {
	if (
		isInputPriorityValid(form_element, todo_data.priority) &&
		isInputDateValid(form_element, todo_data.due_date)
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

export {
	getAddTodoFormInputsData,
	isInputDateValid,
	isInputPriorityValid,
	validateTodoFormInputs,
};
