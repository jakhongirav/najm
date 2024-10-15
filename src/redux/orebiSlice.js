import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: [],
  products: [],
  categories: [],
  newArrivals: [],
  bestSellers: [],
  saved: [],
  liked: [],
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    //--------------- Product Actions -----------------
    getNewArrivalsSuccess: (state, action) => {
      const newArrivals = action.payload;
      state.newArrivals = newArrivals;
    },
    getCategoriesSuccess: (state, action) => {
      const categories = action.payload;
      state.categories = categories;
    },
    getAllProductsSuccess: (state, action) => {
      const products = action.payload;
      state.products = products;
    },
    getBestSellersSuccess: (state, action) => {
      const bestSellers = action.payload;
      state.bestSellers = bestSellers;
    },
    //--------------- Cart Actions -----------------
    addToCart: (state, action) => {
      const itemInSaved = state.saved.find(
        (savedItem) => savedItem._id === action.payload._id
      );

      if (itemInSaved) {
        itemInSaved.quantity += action.payload.quantity;
      } else {
        // Adding a new item to the saved array, including quantity
        state.saved.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.saved.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.saved.find((item) => item._id === action.payload._id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.saved = state.saved.filter((item) => item._id !== action.payload);
    },
    resetCart: (state) => {
      state.saved = [];
    },
    //--------------- Saved Actions -----------------
    addToSaved: (state, action) => {
      const itemInSaved = state.liked.find(
        (savedItem) => savedItem._id === action.payload._id
      );

      if (!itemInSaved) {
        state.liked.push({
          ...action.payload,
        });
      }
    },
    deleteSaved: (state, action) => {
      state.liked = state.liked.filter((item) => item._id !== action.payload);
    },
    resetSaved: (state) => {
      state.liked = [];
    },
  },
});

export const {
  // Cart actions
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  // Product actions
  getCategoriesSuccess,
  getAllProductsSuccess,
  getBestSellersSuccess,
  // Saved actions
  addToSaved,
  deleteSaved,
  resetSaved,
} = orebiSlice.actions;
export default orebiSlice.reducer;

export function getAllProducts() {
  return async function (dispatch) {
    try {
      await axios
        .get("http://38.242.226.165/products/all-products/")
        .then((res) => {
          dispatch(orebiSlice.actions.getAllProductsSuccess(res.data));
        });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      await axios
        .get("http://38.242.226.165/products/categories/")
        .then((res) => {
          dispatch(orebiSlice.actions.getCategoriesSuccess(res.data));
        });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getNewArrivals() {
  return async function (dispatch) {
    try {
      await axios
        .get("http://38.242.226.165/products/new-products/")
        .then((res) => {
          dispatch(orebiSlice.actions.getNewArrivalsSuccess(res.data));
        });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getBestSellers() {
  return async function (dispatch) {
    try {
      await axios
        .get("http://38.242.226.165/products/best-sellers/")
        .then((res) => {
          dispatch(orebiSlice.actions.getBestSellersSuccess(res.data));
        });
    } catch (err) {
      console.log(err);
    }
  };
}
