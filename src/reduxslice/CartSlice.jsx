// import { createSlice } from '@reduxjs/toolkit';

// const CartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItemToCart: (state, action) => {
//       const item = action.payload;
//       const existingItem = state.items.find(i => i.id === item.id);

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...item, quantity: 1 });
//       }
//     },
//     removeItemFromCart: (state, action) => {
//       const id = action.payload;
//       state.items = state.items.filter(item => item.id !== id);
//     },
//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const item = state.items.find(i => i.id === id);

//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addItemToCart, removeItemFromCart, updateQuantity, clearCart } = CartSlice.actions;

// export default CartSlice.reducer;

//===================================================================================================

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToCartAPI,
  getCartAPI,
  updateCartItemAPI,
  removeCartItemAPI,
} from '../api/cartAPI';

export const fetchCart = createAsyncThunk('cart/fetch', async () => {
  const res = await getCartAPI();
  return res.data.cart.items;
});

export const addItemToCart = createAsyncThunk('cart/add', async (product) => {
  await addToCartAPI({ productId: product.id, quantity: product.quantity });
  return product;
});

export const updateQuantity = createAsyncThunk(
  'cart/update',
  async ({ id, quantity }) => {
    await updateCartItemAPI({ productId: id, quantity });
    return { id, quantity };
  }
);

export const removeItemFromCart = createAsyncThunk(
  'cart/remove',
  async (id) => {
    await removeCartItemAPI({ productId: id });
    return id;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.map(item => ({
          id: item.product._id,
          name: item.product.productName,
          image: item.product.images?.[0],
          price: item.product.actualPrice || item.product.price,
          quantity: item.quantity,
        }));
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        const item = action.payload;
        const existing = state.items.find((i) => i.id === item.id);
        if (existing) {
          existing.quantity += item.quantity;
        } else {
          state.items.push(item);
        }
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.items.find((i) => i.id === id);
        if (item) item.quantity = quantity;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
