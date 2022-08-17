<template>
	<fragment>
		<button @click="toggleCategory(navCategory.productCategoryName)">{{navCategory.productCategoryName}}</button>
		<transition>
			<ul v-show="isOpened">
			<template v-for="(product, index) in freighterProducts">
				<li v-if="product.productCategory === navCategory" :key="index">
				<p>
				<a :href="product.productLink" target="_blank" rel="noreferrer noopener">{{product.productName}}</a>
				</p>
				</li>
			</template>
			</ul>
		</transition>
	</fragment>
</template>
<script lang="ts" src="./NavigationCategory.ts">
</script>

<style scoped src="./NavigationCategory.css">
</style>