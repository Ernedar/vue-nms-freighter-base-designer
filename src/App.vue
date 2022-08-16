<template>
  <div id="app">
    <NavigationSideBar></NavigationSideBar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationSideBar from './components/NavigationSideBar/NavigationSideBar.vue';

export default defineComponent({
  components: {
    NavigationSideBar
  }
})
</script>

<style src="./style.css">
</style>
