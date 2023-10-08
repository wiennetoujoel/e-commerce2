<template>
    <div class="container">
        <h1>Selamat Datang di Toko Joel</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.desc }}</td>
                    <td>{{ product.stock }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                        <button @click="decreaseQuantity(product.id)">-</button>
                        <input
                            type="number"
                            v-model.number="product.quantity"
                            placeholder="Masukkan jumlah"
                        />
                        <button @click="increaseQuantity(product.id)">+</button>
                    </td>
                    <td>
                        <button type="button" class="button" @click="addToCart(product.id)">
                            Add to Cart
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <ul>isi dari cart adalah {{ carts }}</ul>
        <button @click="goToCart">Go To Cart</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            products: "example/getData",
            carts: "example/getCart",
        }),
    },
    created() {
        this.$store.dispatch("example/getAllData");
        this.$store.dispatch("example/getAllCart");
    },
    methods: {
       
        increaseQuantity(productId) {
            const product = this.products.find((p) => p.id === productId);
            
            if (product && product.quantity < product.stock) {
                this.$store.dispatch("example/increaseQuantity", {
                    productId,
                    quantity: 1,
                });
            }
        },

        decreaseQuantity(productId) {
            
            const product = this.products.find((p) => p.id === productId);
            

            if (product && product.quantity > 0) {
                this.$store.dispatch("example/decreaseQuantity", {
                    productId,
                    quantity: 1,
                });
            }
        },

        addToCart(productId) {
            const product = this.products.find((p) => p.id === productId);
            
            
            console.log(`isi dari cart.json adalah ${JSON.stringify(this.carts)}`)
            console.log(`produk detected ${JSON.stringify(product)}`)
            if (product && product.quantity > 0) {
                this.$store.dispatch("example/addToCartAction", {
                    productId,
                    quantity: product.quantity,
                });
            }
        },

        goToCart() {
            this.$router.push({ name: "cart" });
        },
    },
};
</script>
