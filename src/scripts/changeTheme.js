const change_theme_btn_element = document.querySelector(".change-theme-btn");
const body_element = document.querySelector("body");

change_theme_btn_element.addEventListener("click", () => {
	if (body_element.classList.contains("light")) {
		body_element.classList.remove("light");
		body_element.classList.add("dark");

		change_theme_btn_element.textContent = "bedtime";
	} else if (body_element.classList.contains("dark")) {
		body_element.classList.remove("dark");
		body_element.classList.add("light");

		change_theme_btn_element.textContent = "sunny";
	}
});
