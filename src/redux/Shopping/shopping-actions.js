import cartApi from '../../apis/cartApi';
import productApi from '../../apis/productApi';
import * as actionTypes from './shopping-types';

export const addToCart = (productId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      productId: productId,
    },
  };
};
export const saveToCart = (product) => {
  return {
    type: actionTypes.SAVE_CART,
    payload: product
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_CART_ITEM,
    payload: {
      itemId: itemId,
    }
  }
}

export const saveCartItem = (item) => {
  return {
    type: actionTypes.SAVE_CART_ITEM,
    payload: item,
  }
}

export const increaseQtyItem = (item) => {
  return {
    type: actionTypes.INCREASE_QTY_ITEM,
    payload: item.quantity,
  }
}

export const decreaseQtyItem = (item) => {
  return {
    type: actionTypes.DECREASE_QTY_ITEM,
    payload: item.quantity,
  }
}

export const toggleOpenCart = () => {
  return {
    type: actionTypes.TOGGLE_OPEN_CART,
  };
};

export const fetchProductsRequest = () => {
  return (dispatch) => {
    (async () => {
      try {
        const res = await productApi.getAll();
        dispatch(fetchProducts(res.data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const fetchCartRequest = () => {
  return (dispatch) => {
    (async () => {
      try {
        const res = await cartApi.getAll();
        dispatch(fetchCart(res.data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const fetchCartPost = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        const res = await cartApi.add(data);
        dispatch(addToCart(res.data.id));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const fetchCartPut = (id, index, data) => {
  return (dispatch) => {
    (async () => {
      try {
        data[index].quantity += 1
        let item = data.find(a => a.id === id)
        await cartApi.put(id, item);
        // console.log(data);
        dispatch(saveToCart(data))
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
export const fetchCartDelete = (data) => {
  return (dispatch) => {
    (async () => {
      try {
        await cartApi.remove(data);

        dispatch(removeFromCart(data));
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

const fetchProducts = (products) => ({
  type: actionTypes.FETCH_PRODUCT_LIST,
  payload: products,
});
const fetchCart = (products) => ({
  type: actionTypes.FETCH_CART,
  payload: products,
});
