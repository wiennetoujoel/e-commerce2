<template>
    <div class="container">
        <h1 class="cart-title">Cart</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in cartItems" :key="index">
                    <td>{{ item.product.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>Rp{{ item.product.price * item.quantity }}</td>
                    <td> 
                        <button class="delete-button button-71" @click="deleteItem(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2">Total</td>
                    <td class="total-amount">Rp{{ total }}</td>
                    <td></td>
                 </tr>
            </tfoot>
        </table>
        <button class="checkout-button" @click="checkout">Check Out</button>
    </div>
</template>

<script>
export default {
  props: {
    cartItems: Array,
    products: Array, // Tambahkan prop products
  },
  computed: {
    total() {
      return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    },
  },
  methods: {
    deleteItem(index) {
      const deletedItem = this.cartItems[index];
      this.cartItems.splice(index, 1);

      // Kembalikan jumlah quantity ke stok produk
      const product = deletedItem.product;
      const productIndex = this.products.findIndex((p) => p === product);
      if (productIndex !== -1) {
        this.products[productIndex].stock += deletedItem.quantity;
      }
    },
    checkout() {
      const total = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

      if (total != 0) {
        alert(`Silahkan membayar Rp${total}`);
      } else {
        alert('Anda belum memilih produk');
      }
    },
  },
};
</script>
