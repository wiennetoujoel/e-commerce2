<template>
    <div class="container">
        <h2>Keranjang Belanja</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Accumulation</th>
                    <th></th>
                    <th></th>
                   
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in cartData" :key="index">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>{{ product.price * product.quantity }}</td>
                    <td>
                        <button class="button-71" @click="deleteItem(index)">
                            Delete
                        </button>
                    </td>
                    
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">Total</td>
                    <td>USD {{ checkout }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    emits:[
        'delete-item'
    ],
    props: {
        cartData: {
            type: Array,
            default: () => {
                return [];
            },
        },
        products: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    computed: {
        checkout() {
            return this.cartData.reduce((sum, product) => {
                return sum += product.price * product.quantity;
            }, 0);
        },
    },

    methods: {
        deleteItem(index) {
            const deletedItem = this.cartData[index];
            console.log(`list produk tercatat di cart adalah ${this.products}`)
            this.cartData.splice(index, 1);

            this.$emit('delete-item', deletedItem, this.products)
        },
    },
};
</script>
