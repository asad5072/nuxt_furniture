<template>
	<header class="bg-slate-100 py-4">
		<div class="flex items-center justify-between gap-6 container mx-auto px-4">
			<div>
				<ULink class="text-2xl text-purple-500" to="/"> Logo </ULink>
			</div>
			<div>
				<nav>
					<ul class="flex items-center space-x-4">
						<li v-for="(item, index) in navItems" :key="index">
							<ULink
								class="hover:text-red-500"
								active-class="active-link"
								:to="item.path"
								>{{ item.label }}</ULink
							>
						</li>
					</ul>
				</nav>
			</div>
			<div>cart</div>
		</div>
	</header>
</template>

<script setup>
const navItems = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "About",
		path: "/about",
	},
	{
		label: "Product",
		path: "/products",
	},
	{
		label: "Cart",
		path: "/cart",
	},
];
</script>
<style scoped>
.active-link {
	color: red;
}
</style>
