<template>
	<fragment>
		<button @click="toggleCategory(category.productCategoryName)">{{category.productCategoryName}}<icon-chevron-up fill="var(--text-light)" width="1.5rem" height="1.5rem" :rotate="isOpened" /></button>
		<transition name="roll">
			<ul v-show="isOpened">
				<li v-for="(product, index) in filteredProducts" :key="index">
					<p>
						<a class="nav-link" :href="product.productLink" target="_blank" rel="noreferrer noopener">{{product.productName}}</a>
					</p>
					<icon-external-link fill="var(--text-light)"/>
				</li>
			</ul>
		</transition>
	</fragment>
</template>
<script lang="ts" src="./NavigationCategory.ts">
</script>

<style scoped src="./NavigationCategory.css">
</style>