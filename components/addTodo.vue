<template>
	<div class="addTodo">
		<div class="header">
			<h2>Add ToDo</h2>
		</div>
		<div class="form">
			<label for="title">
				Title
			</label>
			<input v-model="title" v-focus name="title" type="text" @keyup.esc="cancelAdding" />
			<label for="title">
				Description
			</label>
			<textarea v-model="description" name="description" rows="8" @keyup.enter="addTodo" @keyup.esc="cancelAdding"></textarea>
			<div class="btns">
				<btn class="red" @click.native="cancelAdding">
					cancel
				</btn>
				<btn class="blue" @click.native="addTodo">
					add
				</btn>
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
			ID: 3,
			title: '',
			description: '',
		}
	},
	methods: {
		cancelAdding() {
			this.$emit('cancelAdd')
		},
		addTodo() {
			if (this.title.trim().length == 0 || this.description.trim().length == 0) {
				return
			}

			this.$store.dispatch('addTodo', {
				id: this.ID,
				title: this.title,
				description: this.description,
			})

			this.$emit('cancelAdd')

			this.title = ''
			this.description = ''
			this.ID++
		},
	},
}
</script>

<style lang="scss" scoped>
.addTodo {
	width: 100%;
	max-width: 500px;
	height: 100vh;
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
	}

	.form {
		margin: 20px;
		label {
			margin: 5px;
		}
		input,
		textarea {
			margin: 5px 0;
		}
		.btn {
			width: 50%;
			border-radius: 5%;
		}
		.btns {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			align-content: center;
			margin-top: 10px;
		}
	}
}
</style>
