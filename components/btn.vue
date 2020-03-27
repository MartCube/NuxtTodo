<template>
	<div class="btn">
		<slot>slot</slot>
	</div>
</template>

<style lang="scss" scoped>
$transition: all 0.3s cubic-bezier(0.31, -0.105, 0.43, 1.59);
$red: #ff1461;
$blue: #26ade4;
$green: #16ba92;
$yellow: #f6ec35;
$grey: #e0e0e0;

.btn {
	width: 40px;
	height: 40px;
	margin: 5px;
	background: white;
	border-radius: 50%;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;
	color: $grey;
	i {
		text-align: center;
		text-decoration: none;
		font-size: 1.2em;
	}

	&.red {
		color: $red;
	}
	&.blue {
		color: $blue;
	}
	&.green {
		color: $green;
	}
	&.yellow {
		color: $yellow;
	}
	&.grey {
		color: $grey;
	}

	transition: $transition;
	box-shadow: 0px 0px 2px 0px rgba(52, 58, 64, 0.3);

	&:hover {
		transform: scale(1.1);
	}
	&:active {
		box-shadow: 0px 0px 2px 0px rgba(52, 58, 64, 0.6);
		transform: scale(1);
	}
}
</style>
