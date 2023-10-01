<template>
  <div class="container">
      <h1>Selamat datang di Toko Joel</h1>
      <Products :products="products" @add-to-cart="addToCart" />
      <Cart :cartData="cartItems" :products="products" @delete-item="deleteItem" />
  </div>
</template>

<script>
import Cart from "./Cart.vue";
import Products from "./Products.vue";

export default {
  data() {
      return {
          cartItems: [],
          products:[]
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
  },
};
</script>
