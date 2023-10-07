<template>
    <div class="container">
        <h1>Selamat datang di Toko Joel</h1>
        <Products :products="products" @add-to-cart="addToCart" />
        <Cart :cartData="cartItems" :products="products" @delete-item="returnStock"/>
    </div>
</template>

<script>
import Cart from "./Cart.vue";
import Products from "./Products.vue";

export default {
    data() {
        return {
            cartItems: [],
            products: [
                {
                    name: "Samsung",
                    desc: "Harga medium, Kualitas Top",
                    stock: 5,
                    price: 750,
                    quantity: 0,
                },
                {
                    name: "Apple",
                    desc: " Harga Mehong,  Kualitas Top",
                    stock: 10,
                    price: 1000,
                    quantity: 0,
                },
                {
                    name: "Xiaomi",
                    desc: "Harga murmer, Kualitas Blouggg",
                    stock: 1000,
                    price: 500,
                    quantity: 0,
                },
                {
                    name: " oddo ",
                    desc: "Harga mayan lah, Kualitas dahlah",
                    stock: 1000,
                    price: 250,
                    quantity: 0,
                },
            ],
        };
    },
    components: {
        Cart,
        Products,
    },
    methods: {
        addToCart(selectedProduct) {
            const existingProductIndex = this.cartItems.findIndex(
                (product) => product.name === selectedProduct.name
            );
            if (existingProductIndex !== -1) {
                this.cartItems[existingProductIndex].quantity +=
                    selectedProduct.quantity;
            } else {
                this.cartItems.push(selectedProduct);     
            }
        },

        returnStock(deletedItem) {
            console.log(`nilai dari deletedItem adalah ${deletedItem}`)
            console.log(`nilai dari this.products adalah ${this.products}`)
            const productIndex = this.products.findIndex(
                (product) => product.name === deletedItem.name
            );

            if (productIndex !== -1) {
                this.products[productIndex].stock += deletedItem.quantity;
                console.log(`cek nilai dari ${deletedItem.quantity}`)
            } else {
                console.error(
                    `Produk dengan nama ${deletedItem.name} tidak ditemukan dalam array products.`
                );
            }
        },
    },
};
</script>
