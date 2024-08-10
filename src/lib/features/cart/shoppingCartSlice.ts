import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/types";

// Define the initial state using the ProductType
interface CartState {
  items: ProductType[];
  totalProducts: number;
  totalPrice: number;
}

// Initialize the cart state
const initialState: CartState = {
  items: [],
  totalProducts: 0,
  totalPrice: 0,
};

// Helper function to save cart to localStorage
const saveToLocalStorage = (cart: CartState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

// Helper function to load cart from localStorage
const loadFromLocalStorage = (): CartState => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : initialState;
  }
  return initialState;
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: loadFromLocalStorage(),
  reducers: {

    addProduct: (state, action: PayloadAction<ProductType>) => {
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex >= 0) {
        state.items[existingProductIndex] = action.payload;
      } else {
        state.items.push(action.payload);
      }

      state.totalProducts = state.items.length;
      state.totalPrice = state.items.reduce((total, product) => total + product.price, 0);

      saveToLocalStorage(state);
    },

    updateProduct: (state, action: PayloadAction<ProductType>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      if (index >= 0) {
        state.items[index] = action.payload;
      }

      state.totalProducts = state.items.length;
      state.totalPrice = state.items.reduce((total, product) => total + product.price, 0);

      saveToLocalStorage(state);
    },

    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.totalProducts = state.items.length;
      state.totalPrice = state.items.reduce((total, product) => total + product.price, 0);

      saveToLocalStorage(state);
    },
    
  },
});

// Export actions
export const { addProduct, updateProduct, deleteProduct } = shoppingCartSlice.actions;

// Export reducer
export default shoppingCartSlice.reducer;
