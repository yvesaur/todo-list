class TodoAggregator {
	#high_priority_todos = [];
	#normal_priority_todos = [];
	#low_priority_todos = [];

	#filterHighPriorityTodos(todos) {
		this.#high_priority_todos = todos.filter((todo) => todo.priority === 3);
	}

	#filterNormalPriorityTodos(todos) {
		this.#normal_priority_todos = todos.filter((todo) => todo.priority === 2);
	}

	#filterLowPriorityTodos(todos) {
		this.#low_priority_todos = todos.filter((todo) => todo.priority === 1);
	}

	filterTodosByPriority(todos) {
		this.#filterHighPriorityTodos(todos);
		this.#filterNormalPriorityTodos(todos);
		this.#filterLowPriorityTodos(todos);
	}

	getHighPriorityTodos() {
		return this.#high_priority_todos;
	}

	getNormalPriorityTodos() {
		return this.#normal_priority_todos;
	}

	getLowPriorityTodos() {
		return this.#low_priority_todos;
	}
}

export default TodoAggregator;
