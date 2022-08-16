<template>
	<li>
		<button @click="toggleCategory()">{{navCategory.productCategoryName}}</button>
		<ul v-show="isOpened">
		<template v-for="(product, index) in freighterProducts">
			<li v-if="product.productCategory === navCategory" :key="index">
			<a :href="product.productLink">{{product.productName}}</a>
			</li>
		</template>
		</ul>
	</li>
</template>
<script lang="ts" src="./NavigationCategory.ts">
</script>

<style scoped src="./NavigationCategory.css">
</style>