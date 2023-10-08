import axios from "axios";

const getAllData = async (context) => {
    let response = await axios.get("api/getAllData");

    context.commit("UPDATE_DATA", response.data);
}

const getAllCart = async (context) => {
    let response = await axios.get("api/getAllCart");

    context.commit("UPDATE_CART", response.data);
}

const deleteData = async (context, payload) => {
    let response = await axios.delete("api/deleteData/" + payload.id);

    return response
}

const increaseQuantity = async (context, payload) => {
    await axios.patch(`api/increaseQuantity/${payload.productId}`, {
        quantity: payload.quantity
    });

    context.commit("INCREASE_QUANTITY", payload);
};

const decreaseQuantity = async (context, payload) => {
    await axios.patch(`api/decreaseQuantity/${payload.productId}`, {
        quantity: payload.quantity
    });

    context.commit("DECREASE_QUANTITY", payload);
};
  
  const addToCartAction = async (context, payload) => {
    console.log(`addTOCartAction kebaca sampe actions.js`)
    await axios.post(`api/addToCartAction/${payload.productId}`, {
      quantity: payload.quantity
    });
  
    context.commit("ADD_TO_CART", payload);
  };

  const deleteCart = async (context, productId) => {
    await axios.delete(`api/deleteCart/${productId}`);
    
    context.commit("DELETE_CART", productId);
};


export default {
    increaseQuantity,
    decreaseQuantity,
    addToCartAction,
    getAllData,
    deleteData,
    getAllCart,
    deleteCart
}