// The object that holds your data
export const state = () => ({
	filter: 'all',
	todoList: [
		{
			id: 1,
			title: 'Your First Todo',
			description: 'this is description.',
			status: false,
		},
	],
	todoItem: {
		id: 0,
		title: '',
		description: '',
		status: false,
	},
})

// Functions that return back data contained in the state.
export const getters = {
	todosFiltered(state) {
		if (state.filter == 'all') {
			return state.todoList
		} else if (state.filter == 'active') {
			return state.todoList.filter((todo) => !todo.status)
		} else if (state.filter == 'completed') {
			return state.todoList.filter((todo) => todo.status)
		}
		return state.todoList
	},
	todoItem(state) {
		return state.todoItem
	},
}

// Functions that directly mutate the state.
export const mutations = {
	addTodo(state, todo) {
		state.todoList.push({
			id: todo.id,
			title: todo.title,
			description: todo.description,
			status: false,
		})
	},
	deleteTodo(state, id) {
		const index = state.todoList.findIndex((item) => item.id == id)
		state.todoList.splice(index, 1)
		console.log('deleted id:' + id)

		state.todoItem.id = 0
		state.todoItem.title = ''
		state.todoItem.description = ''
		state.todoItem.status = false
	},
	updateTodo(state, todo) {
		if (todo.id == 0) return
		else {
			const index = state.todoList.findIndex((item) => item.id == todo.id)
			state.todoList.splice(index, 1, Object.assign(todo))
		}
		console.log('updateTodo')
	},
	updateFilter(state, filter) {
		state.filter = filter
	},
	displayTodo(state, todo) {
		state.todoItem = Object.assign(todo)
	},
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	addTodo(context, todo) {
		context.commit('addTodo', todo)
	},
	deleteTodo(context, id) {
		context.commit('deleteTodo', id)
	},
	updateTodo(context, todo) {
		context.commit('updateTodo', todo)
		context.commit('displayTodo', todo)
	},
	updateFilter(context, filter) {
		context.commit('updateFilter', filter)
	},
	displayTodo(context, todo) {
		context.commit('displayTodo', todo)
	},
}
