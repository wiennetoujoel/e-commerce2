import axios from "axios";

const getAllData = async (context) => {
    let response = await axios.get("api/getAllData");

    context.commit("UPDATE_DATA", response.data);
}

const getAllCart = async (context) => {
    let response = await axios.get("api/getAllCart");

    context.commit("UPDATE_DATA", response.cart);
}


const postData = async (context, payload) => {
    let response = await axios.post("api/postData", payload);

    return response
}

const putData = async (context, payload) => {
    let response = await axios.put("api/putData", payload);

    return response
}

const patchData = async (context, payload) => {
    let response = await axios.patch("api/patchData", payload);

    return response
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
    await axios.post(`api/addToCart/${payload.productId}`, {
      quantity: payload.quantity
    });
  
    context.commit("ADD_TO_CART", payload);
  };

export default {
    increaseQuantity,
    decreaseQuantity,
    addToCartAction,
    getAllData,
    postData,
    putData,
    patchData,
    deleteData,
    getAllCart
}