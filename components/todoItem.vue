<template>
	<div class="item" @click="displayTodo">
		<div class="info" @click="showDisplay">
			<h2>{{ todo.title }}</h2>
		</div>
		<div class="btns">
			<btn :class="{ green: todo.status }" @click.native="statusToggle">
				<i class="icon icon-ok" />
			</btn>
		</div>
	</div>
</template>

<script>
import btn from '~/components/btn.vue'
export default {
	components: {
		btn,
	},
	props: {
		todo: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			id: this.todo.id,
		}
	},
	methods: {
		statusToggle() {
			this.$store.dispatch('updateTodo', {
				id: this.id,
				title: this.todo.title,
				description: this.todo.description,
				status: !this.todo.status,
			})
		},
		showDisplay() {
			this.$emit('showDisplay')
		},
		displayTodo() {
			this.$store.dispatch('displayTodo', this.todo)
		},
	},
}
</script>

<style lang="scss" scoped>
$transition: all 0.2s cubic-bezier(0.31, -0.105, 0.43, 1.59);
$red: #ff1461;
$blue: #26ade4;
.item {
	width: 100%;
	height: 60px;
	border: 2px solid #e0e0e0;
	border-radius: 30px;
	background: white;
	padding: 0 20px;
	margin: 10px 0;

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	cursor: pointer;
	.info {
		display: flex;
		justify-content: flex-start;

		padding: 10px 0;
		width: 100%;
	}
	.btns {
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
	}
}
</style>
