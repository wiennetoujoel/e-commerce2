const mutations = {
    INCREASE_QUANTITY(state, payload) {
      const product = state.data.find(p => p.id === payload.productId);
      if (product) {
        product.quantity += payload.quantity;
      }

      console.log(`isi dari payload di increase quantity adalah ${JSON.stringify(payload)}`)
    },
  
    DECREASE_QUANTITY(state, payload) {
      const product = state.data.find(p => p.id === payload.productId);
      if (product) {
        product.quantity -= payload.quantity;
      }
    },
  
    ADD_TO_CART(state, payload) {
      const productIndex = state.cart.findIndex(p => p.id === payload.productId)
      const product = state.data.find(p => p.id === payload.productId);
      //untuk mencegah produk yang sama tapi buat baris baru di array cart

      if (product.stock < payload.quantity){
        alert('Maaf, jumlah produk tidak cukup')
      }
      else{
        if (productIndex !== -1){
          state.cart[productIndex].quantity += payload.quantity;
        }
        else{
          
          if (product) {
            state.cart.push({
              id : product.id,
              name: product.name,
              price: product.price,
              quantity: payload.quantity
            });        
          }
        }
        product.stock -= payload.quantity
        console.log(`stock produk ${JSON.stringify(product.stock)}`)
        //console.log(`isi cart menjadi ${JSON.stringify(state.cart)}`)
      }    
    },

    UPDATE_CART(state, payload) {
      state.cart = payload;
      console.log(`isi payload yang diupdate adalah ${JSON.stringify(payload)}`)
    },
  
    UPDATE_DATA(state, payload) {
      state.data = payload.data;
      console.log(payload);
    },

    DELETE_CART(state, productId) {
      const productIndex = state.cart.findIndex(p => p.id === productId);
  
      if (productIndex !== -1) {
          const product = state.cart[productIndex];
          state.cart.splice(productIndex, 1); // Menghapus produk dari keranjang
          
          // Mengembalikan quantity ke stok produk yang sesuai di state.data
          const productData = state.data.find(p => p.id === productId);
          if (productData) {
              productData.stock += product.quantity;
          }
      }
    }
  };
  
  export default mutations;