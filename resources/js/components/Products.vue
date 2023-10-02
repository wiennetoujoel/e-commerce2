<template>
    <div class="container">
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
                <tr v-for="(product, index) in products" :key="index">
                    <td>{{product.name}}</td>
                    <td>{{product.desc}}</td>
                    <td>{{product.stock}}</td>
                    <td>{{product.price}}</td>
                    <td>
                        <button @click="substractQuantity(index)">-</button>
                        <input
                            type="number"
                            v-model.number="product.quantity"
                            placeholder="Masukkan jumlah"
                        />
                        <button @click="addQuantity(index)">+</button>
                    </td>
                    <td>
                        <button
                            type="button"
                            class="button"
                            @click="addToCart(index)"
                        >
                            Add to Cart
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    emits: ["add-to-cart"],

    props:{
        products :{
            type : Array,
            default : ()=>{
                return[]
            }
        }
    },

    data() {
        return {
            
        };
    },

    methods: {
        substractQuantity(index) {
            if (this.products[index].quantity > 0) {
                this.products[index].quantity--;
                console.log(
                    `Barang ${this.products[index].name} dipesan sebanyak ${this.products[index].quantity}`
                );
            } else {
                alert("Masa mau kasih gua barang???");
            }
        },

        addQuantity(index) {
            if (this.products[index].quantity < this.products[index].stock) {
                this.products[index].quantity++;
                console.log(
                    `Barang ${this.products[index].name} dipesan sebanyak ${this.products[index].quantity}`
                );
            } else {
                alert("Barang habis gan");
            }
        },

        addToCart(index) {
            console.log(index);
            console.log(`produk yang ditambahkan adalah ${JSON.stringify(this.products[index])}`);
            const selectedProduct = this.products[index];
            if (
                selectedProduct.quantity > 0 &&
                selectedProduct.quantity <= selectedProduct.stock
            ) {
                console.log(selectedProduct);
                this.$emit("add-to-cart", { ...selectedProduct }, this.products);
                selectedProduct.stock -= selectedProduct.quantity;
            } else {
                alert("Barang tidak cukup atau sudah habis");
            }
            console.log(
                `Barang yang dipesan adalah ${selectedProduct.name} dengan jumlah pesanan ${selectedProduct.quantity}, sisa stok ${selectedProduct.stock}`
            );
            console.log(`cek apakah list masih terkirim semua dengan ${JSON.stringify(this.products)}`)
        },
    },
};
</script>
