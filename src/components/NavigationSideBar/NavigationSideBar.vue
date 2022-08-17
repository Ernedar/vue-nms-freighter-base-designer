<template>
  <nav>
    <h2>Building Parts Legend</h2>
    <ul>
      <li v-for="category in freighterCategories"  :key="category.productCategoryName">
        <NavigationCategory :category="category"
        :openedCategory.sync="currentlyOpenedCategory"></NavigationCategory>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="./NavigationSideBar.ts">
</script>

<style scoped src="./NavigationSideBar.css">
</style>
