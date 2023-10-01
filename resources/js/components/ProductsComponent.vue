<template>
    <div class="container">
        <h1 class="product-title">Products</h1>
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
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.stock }}</td>
                    <td>Rp{{ product.price }}</td>
                    <td>
            <div class="quantity-input">
              <button @click="updateQuantity(index, -1)">-</button>
              <input type="number" v-model.number="product.quantity" @input="updateQuantity(index, 0)" />
              <button @click="updateQuantity(index, 1)">+</button>
            </div>
          </td>
        <td>
          <button class="addButton button-68" @click="addToCart(product)">Add To Cart</button>
        </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  methods: {
    addToCart(product) {
      // Cek apakah ada stok yang cukup
      if (product.stock > 0 && product.quantity > 0 && product.stock>=product.quantity) {
        this.$emit("add-to-cart", product);
        product.stock -= product.quantity-1;
        product.quantity = product.quantity;
      } else {
        alert("Produk tidak cukup / sudah habis atau jumlah harus lebih dari 0!");
      }
    },
    updateQuantity(index, change) {
      const product = this.products[index];
      if (change === -1 && product.quantity > 0) {
        // Kurangi kuantitas
        product.quantity--;
      } else if (change === 1 && product.stock > 0) {
        // Tambah kuantitas
        product.quantity++;
      }
    },
  },
};
</script>