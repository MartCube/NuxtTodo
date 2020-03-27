<template>
	<div class="displayTodo">
		<div class="header">
			<h2>ToDo details</h2>
			<div class="btns">
				<btn class="yellow" title="Go Back" @click.native="goBack">
					<i class="icon icon-back" />
				</btn>
				<btn class="blue" title="Edit" @click.native="editTodo">
					<i class="icon icon-pencil" />
				</btn>
				<btn class="red" title="Delete" @click.native="deleteTodo">
					<i class="icon icon-trash" />
				</btn>
			</div>
		</div>
		<div class="details">
			<div v-if="!editing" class="info">
				<h2>{{ todoItem.title }}</h2>
				<p>{{ todoItem.description }}</p>
			</div>
			<div v-else>
				<label for="title">
					Title
				</label>
				<input v-model="title" v-focus name="title" type="text" @keyup.esc="cancelEdit" />
				<label for="title">
					Description
				</label>
				<textarea v-model="description" name="description" rows="8" @keyup.enter="doneEdit" @keyup.esc="cancelEdit"></textarea>
				<div class="btns">
					<btn class="red" @click.native="cancelEdit">
						cancel
					</btn>
					<btn class="blue" @click.native="doneEdit">
						save
					</btn>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import btn from '~/components/btn.vue'

export default {
	components: {
		btn,
	},
	directives: {
		focus: {
			inserted: function (el) {
				el.focus()
			},
		},
	},
	data() {
		return {
			display: true,
			editing: false,
			title: 'title',
			description: 'description',
		}
	},
	computed: {
		todoItem() {
			return this.$store.getters.todoItem
		},
	},
	methods: {
		goBack() {
			this.editing = false
			this.$emit('returnBack')
		},
		deleteTodo() {
			if (this.todoItem.id == 0) {
				return
			} else {
				this.$store.dispatch('deleteTodo', this.todoItem.id)
				this.$emit('returnBack')
			}
		},
		editTodo() {
			if (this.todoItem.id == 0) {
				return
			}
			this.editing = true
			this.title = this.todoItem.title
			this.description = this.todoItem.description
		},
		cancelEdit() {
			this.editing = false
		},
		doneEdit() {
			this.editing = false

			this.$store.dispatch('updateTodo', {
				id: this.todoItem.id,
				title: this.title,
				description: this.description,
				status: this.todoItem.status,
			})
			console.log('doneEdit')
		},
	},
}
</script>

<style lang="scss" scoped>
.displayTodo {
	width: 100%;
	max-width: 500px;
	height: 100vh;
	background-color: white;

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

		.btns {
			display: flex;
		}
	}

	.details {
		margin: 20px;
		.info {
			text-align: left;
			h2 {
				margin-bottom: 10px;
			}
		}
		label {
			margin: 5px;
		}
		input,
		textarea {
			margin: 5px 0;
		}
		.btns {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			align-content: center;
			margin-top: 10px;

			.btn {
				width: 50%;
				border-radius: 5%;
			}
		}
	}
}
</style>
