<template>
	<div class="designer-playground-wrapper">
		<div class="floor-plan-wrapper">
			<table>
				<tr v-for="(levelRow, index) in baseLevels[0]" :key="index">
					<td v-for="(levelCell, index) in levelRow" :key="index">
						{{levelCell}}
					</td>
				</tr>
			</table>
		</div>
		<FloorElevator></FloorElevator>
	</div>
</template>
<script lang="ts" src="./DesignerPlayground.ts"></script>
<style src="./DesignerPlayground.css"></style>