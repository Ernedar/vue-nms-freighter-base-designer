<template>
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 407.436 407.436" style="enable-background:new 0 0 407.436 407.436;" xml:space="preserve" :style="{
		width: width,
		height: height,
		stroke: stroke,
		fill: fill,
		backgroundColor: background,
	}" :class="tagClasses">
		<polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "/>
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
			},
			classImport: {
				type: String,
				default: ''
			}
		},
		computed: {
			tagClasses() {
				return `${this.rotate ? 'flip' : ''} ${this.classImport}`
			}
		}
	})
</script>
<style scoped>
	svg {
		transform: rotateX(0deg);
		transition: transform var(--button-flip-time) ease-in-out;
	}
	.flip {
		transform:rotateX(180deg);
	}
</style>