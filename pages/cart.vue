<script setup>
const store = useStoreCart();
const { increment, decrement } = store;
const { products, totalPrice } = storeToRefs(store);
console.log(products, "cart Product");
</script>
<template>
	<div class="flex items-start justify-between gap-6 container mx-auto px-4">
		<div class="grid grid-cols-4 gap-4 container mx-auto px-4 py-12">
			<div v-for="(item, index) in products" :key="index">
				<UCard>
					<p>{{ item.title }}</p>
					<p>Price: {{ item.price }}</p>
					<div class="flex">
						<button @click="increment(item.id)" class="w-10 border">+</button>
						<input
							type="text"
							:value="item.count"
							class="w-10 border-t border-b text-center focus:outline-none"
						/>
						<button @click="decrement(item.id)" class="w-10 border">-</button>
					</div>
				</UCard>
			</div>
		</div>
		<div>
			<p>Total Price:{{ totalPrice.toFixed(2) }}</p>
		</div>
	</div>
</template>
