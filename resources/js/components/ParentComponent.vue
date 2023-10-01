<template>
    <div>
      <h1>Selamat Datang di Toko Joel</h1>
      <products-component :products="products" @add-to-cart="addToCart" />
      <cart-component :cart-items="cartItems" :products="products" />
    </div>
  </template>
  
  <script>
  import ProductsComponent from "./ProductsComponent.vue";
  import CartComponent from "./CartComponent.vue";
  
  export default {
    data() {
      return {
        products: [
          { name: "Produk A", description: "Anda Sopan Kami Segan", stock: 10, price: 10000, quantity: 0 },
          { name: "Produk B", description: "Anda Baik Kami Curiga", stock: 20, price: 20000, quantity: 0 },
          { name: "Produk C", description: "Pinjam dulu seratus", stock: 30, price: 30000, quantity: 0 },
        ],
        cartItems: [],
      };
    },
    components: {
      "products-component": ProductsComponent,
      "cart-component": CartComponent,
    },
    methods: {
        addToCart(product) {
      // Cari referensi produk yang sesuai di dalam array products
      const productIndex = this.products.findIndex((p) => p === product);
      if (productIndex !== -1) {
        const existingItem = this.cartItems.find((item) => item.product === product);
        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
          this.cartItems.push({ product, quantity: product.quantity });
        }
        this.products[productIndex].stock--;
      }
    },
    },
  };
  </script>
  