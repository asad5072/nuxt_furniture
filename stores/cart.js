export const useStoreCart = defineStore("cart", {
	state: () => ({ products: [] }),
	getters: {},
	actions: {
		addProduct(product, count) {
			const isInlist = this.products.find((item) => item.id === product.id);
			this.products.push({ ...product, count });
		},
	},
});
