<template>
  <div id="app">
    <NavigationSideBar></NavigationSideBar>
    <MainLayout></MainLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationSideBar from './components/NavigationSideBar/NavigationSideBar.vue';
import MainLayout from './components/MainLayout/MainLayout.vue';

export default defineComponent({
  components: {
    NavigationSideBar,
    MainLayout
}
})
</script>

<style src="./style.css">
</style>
