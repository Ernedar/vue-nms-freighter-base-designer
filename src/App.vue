<script setup lang="ts">
	import Vue, { defineComponent } from 'vue';
	import navigation from './components/Navigation/Navigation.vue';

export default defineComponent({
  name: 'app',
  components: {navigation}
});
</script>

<template>
	<div id="app">
		<navigation></navigation>
	</div>
</template>

<style src="./style.css">
</style>