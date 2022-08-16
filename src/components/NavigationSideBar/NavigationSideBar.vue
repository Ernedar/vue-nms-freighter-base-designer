<template>
  <div>
    <nav>
      <h2>Building Parts Legend</h2>
      <ul>
        <li v-for="category in freighterCategories" :key="category.productModule">
          <NavigationCategory :category="category"></NavigationCategory>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" src="./NavigationSideBar.ts">
</script>

<style scoped src="./NavigationSideBar.css">
</style>
