const mutations = {
    INCREASE_QUANTITY(state, payload) {
      const product = state.data.find(p => p.id === payload.productId);
      if (product) {
        product.quantity += payload.quantity;
      }
    },
  
    DECREASE_QUANTITY(state, payload) {
      const product = state.data.find(p => p.id === payload.productId);
      if (product) {
        product.quantity -= payload.quantity;
      }
    },
  
    ADD_TO_CART(state, payload) {
      const product = state.data.find(p => p.id === payload.productId);
      if (product) {
        state.cart.push({
          name: product.name,
          price: product.price,
          quantity: payload.quantity
        });
      }
    },
  
    UPDATE_DATA(state, payload) {
      state.data = payload.data;
      console.log(payload);
    }
  };
  
  export default mutations;