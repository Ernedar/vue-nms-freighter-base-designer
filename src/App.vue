<template>
  <div id="app">
    <NavigationSideBar></NavigationSideBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationSideBar from './components/NavigationSideBar/NavigationSideBar.vue';

@Component({
  components: {
    NavigationSideBar
  },
})
export default class App extends Vue {}
</script>

<style src="./style.css">
</style>
