export const useStoreCart = defineStore("cart", {
	state: () => ({
		products: [],
		productInCart: false,
	}),
	getters: {
		totalPrice: (state) =>
			state.products.reduce(
				(acc, product) => acc + product.price * product.count,
				0
			),
	},
	actions: {
		addProduct(product, count) {
			const isInlist = this.products.find((item) => item.id === product.id); //প্রথমেই দেখবে প্রডাক্ট এরের মধ্যে এই প্রডাক্ট আছে কি না
			if (isInlist) {
				// alert("product already in the cart");
				this.productInCart = true;
			} else {
				this.products.push({ ...product, count });
				this.productInCart = false;
			}
		},
		increment(id) {
			const existingProduct = this.products.find(
				(product) => product.id === id
			);
			if (existingProduct) {
				existingProduct.count++;
			}
		},
		decrement(id) {
			const existingProduct = this.products.find(
				(product) => product.id === id
			);
			if (existingProduct && existingProduct.count > 1) {
				existingProduct.count--;
			}
		},
	},
});
