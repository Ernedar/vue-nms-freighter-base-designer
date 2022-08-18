<template>
	<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" :style="{
		width: width,
		height: height,
		stroke: stroke,
		fill: fill,
		backgroundColor: background,
	}">
		<path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 13 10 L 13 12 L 18.5625 12 L 9.28125 21.28125 L 10.71875 22.71875 L 20 13.4375 L 20 19 L 22 19 L 22 10 Z"/>
	</svg>
</template>
<script lang="ts">
	import { defineComponent } from 'vue';
	export default defineComponent({
		name: 'IconExternalLink',
		props: {
			width?: {
				type: String || Number,
				default: '1rem'
			},
			height?: {
				type: String || Number,
				default: '1rem'
			},
			stroke?: {
				type: String || Number,
				default: ''
			},
			fill?: {
				type: String || Number,
				default: ''
			},
			background?: {
				type: String || Number,
				default: ''
			},
			styleImport?: {
				type: String,
				default: ''
			},
			rotate: {
				type: Boolean,
				default: false
			}
		}
	})
</script>
<style scoped>
	svg {
		margin-left: 0.1rem;
	}
</style>