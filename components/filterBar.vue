<template>
	<div class="filter">
		<div class="btn" :class="{ active: filter == 'all' }" @click="changeFilter('all')">
			All
		</div>
		<div class="btn" :class="{ active: filter == 'active' }" @click="changeFilter('active')">
			Active
		</div>
		<div class="btn" :class="{ active: filter == 'completed' }" @click="changeFilter('completed')">
			Completed
		</div>
	</div>
</template>

<script>
//import btn from '~/components/btn.vue'

export default {
	computed: {
		filter() {
			return this.$store.state.filter
		},
	},
	methods: {
		changeFilter(filter) {
			this.$store.dispatch('updateFilter', filter)
		},
	},
}
</script>

<style lang="scss" scoped>
.filter {
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: 10px 0;

	.btn {
		width: 100%;
		padding: 5px 15px;
		margin: 5px;
		background: white;
		border-radius: 25px;

		text-align: center;
		cursor: pointer;
		transition: all 0.3s ease;
		&:hover {
			background: #6ad3b9;
		}

		&.active {
			background: #16ba92;
			color: white;
		}
		&:active {
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		}
	}
}
</style>
