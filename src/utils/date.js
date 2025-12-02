function checkIfDateIsInPast(date) {
	const dateToday = new Date();

	if (
		date > dateToday ||
		(date.getDay() === dateToday.getDay() &&
			date.getMonth() === dateToday.getMonth() &&
			date.getYear() === dateToday.getYear())
	) {
		return false;
	} else {
		return true;
	}
}

function formatDateToString(date_string) {
	const date = new Date(date_string);

	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export { checkIfDateIsInPast, formatDateToString };
