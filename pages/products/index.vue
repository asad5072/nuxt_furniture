<template>
	<div
		class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 container mx-auto px-4"
	>
		<div v-for="item in products" :key="item?.id">
			<UCard class="">
				<ULink :to="`/products/${item.id}`">
					<NuxtImg class="max-h-40" :src="item.image" />
					<p>{{ item.title }}</p>
				</ULink>
			</UCard>
		</div>
	</div>
</template>
<script setup>
const products = await $fetch("https://fakestoreapi.com/products");
// console.log(products);
</script>
