<script setup>
const toast = useToast();
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

//fetch the product
const product = await $fetch(uri, { key: id });
const { addProduct } = useStoreCart();

// add to cart
async function addToCart(product) {
	try {
		await addProduct(product, 1);
		toast.add({
			title: "Product added successfully!",
			color: "green",
		});
	} catch (err) {
		console.error("Error Add in Cart:", err);
		toast.add({
			title: "Failed to add product!",
			color: "red",
		});
	}
}
</script>

<template>
	<div class="container m-auto bg-slate-50 min-h-screen px-4">
		<p>{{ product.title }}</p>
		<p>Price:{{ product.price }}</p>
		<UButton
			size="md"
			color="black"
			label="Add to cart"
			@click="addToCart(product)"
		/>
		<div></div>
	</div>
</template>
