<template>
	<div class="container">
		<div v-show="showMain" class="main">
			<div class="header">
				<h2>ToDo App</h2>
				<btn class="blue" @click.native="addTodo">
					<i class="icon icon-plus" />
				</btn>
			</div>
			<transition-group name="fade-item" tag="div" class="list">
				<todoItem v-for="todo in todoListFiltered" :key="todo.id" :todo="todo" @showDisplay="displayTodo" />
			</transition-group>
			<filterBar />
		</div>

		<displayTodo v-show="showDisplay" @returnBack="displayTodo" />

		<addTodo v-show="showAdd" @cancelAdd="addTodo" />
	</div>
</template>

<script>
import todoItem from '~/components/todoItem.vue'
import filterBar from '~/components/filterBar.vue'
import displayTodo from '~/components/displayTodo.vue'
import addTodo from '~/components/addTodo.vue'
import btn from '~/components/btn.vue'

export default {
	components: {
		todoItem,
		filterBar,
		displayTodo,
		addTodo,
		btn,
	},
	data() {
		return {
			showAdd: false,
			showDisplay: false,
			showMain: true,
		}
	},
	computed: {
		todoListFiltered() {
			return this.$store.getters.todosFiltered
		},
	},
	methods: {
		addTodo() {
			this.showAdd = !this.showAdd
			this.showMain = !this.showMain
		},
		displayTodo() {
			this.showDisplay = !this.showDisplay
			this.showMain = !this.showMain
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	align-content: center;

	.main {
		max-width: 500px;
		width: 100%;
		height: 100vh;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: center;

		.filter {
			align-self: flex-end;
		}

		.header {
			width: 100%;
			height: 80px;

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			align-content: center;

			padding: 5px 20px;
			background-color: #16ba92;
			color: white;
		}

		.list {
			width: 100%;
			flex-grow: 1;
			overflow-y: scroll;
			overflow-x: hidden;
		}
	}
}
</style>
