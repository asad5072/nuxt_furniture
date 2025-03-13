<script setup>
const store = useStoreCart();
const { products } = storeToRefs(store);
console.log(products.value, "cart Product");
</script>
<template>
	<div class="grid grid-cols-4 gap-4 container mx-auto px-4 py-12">
		<div v-for="(item, index) in products" :key="index">
			<UCard>
				<p>{{ item.title }}</p>
			</UCard>
		</div>
	</div>
</template>
