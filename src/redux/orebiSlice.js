import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../assets/images/index";

const initialState = {
  userInfo: [],
  products: [],
  categories: [],
  newArrivals: [],
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
          dispatch(
            orebiSlice.actions.getAllProductsSuccess([
              {
                _id: 1001,
                img: spfOne,
                productName: "Cap for Boys",
                price: "35.00",
                color: "Blank and White",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1002,
                img: spfTwo,
                productName: "Tea Table",
                price: "180.00",
                color: "Gray",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1003,
                img: spfThree,
                productName: "Headphones",
                price: "25.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1004,
                img: spfFour,
                productName: "Sun glasses",
                price: "15.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1005,
                img: bestSellerOne,
                productName: "Flower Base",
                price: "35.00",
                color: "Blank and White",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1006,
                img: bestSellerTwo,
                productName: "New Backpack",
                price: "180.00",
                color: "Gray",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1007,
                img: bestSellerThree,
                productName: "Household materials",
                price: "25.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1008,
                img: bestSellerFour,
                productName: "Travel Bag",
                price: "220.00",
                color: "Black",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1009,
                img: newArrOne,
                productName: "Round Table Clock",
                price: "44.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1010,
                img: newArrTwo,
                productName: "Smart Watch",
                price: "250.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1011,
                img: newArrThree,
                productName: "cloth Basket",
                price: "80.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1012,
                img: newArrFour,
                productName: "Funny toys for babies",
                price: "60.00",
                color: "Mixed",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1013,
                img: newArrTwo,
                productName: "Funny toys for babies",
                price: "60.00",
                color: "Mixed",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },

              {
                _id: 1014,
                img: newArrTwo,
                productName: "Smart Watch",
                price: "250.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1015,
                img: newArrFour,
                productName: "Funny toys for babies",
                price: "60.00",
                color: "Mixed",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1016,
                img: newArrTwo,
                productName: "Smart Watch",
                price: "250.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1017,
                img: bestSellerFour,
                productName: "Travel Bag",
                price: "220.00",
                color: "Black",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1018,
                img: newArrOne,
                productName: "Round Table Clock",
                price: "44.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1019,
                img: newArrTwo,
                productName: "Smart Watch",
                price: "250.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1020,
                img: newArrThree,
                productName: "cloth Basket",
                price: "80.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1021,
                img: spfThree,
                productName: "Headphones",
                price: "25.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1022,
                img: spfFour,
                productName: "Sun glasses",
                price: "220.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1023,
                img: bestSellerOne,
                productName: "Flower Base",
                price: "35.00",
                color: "Blank and White",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1024,
                img: spfOne,
                productName: "Cap for Boys",
                price: "35.00",
                color: "Blank and White",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1025,
                img: spfTwo,
                productName: "Tea Table",
                price: "180.00",
                color: "Gray",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1026,
                img: spfThree,
                productName: "Headphones",
                price: "25.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1027,
                img: spfFour,
                productName: "Sun glasses",
                price: "220.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1028,
                img: bestSellerOne,
                productName: "Flower Base",
                price: "35.00",
                color: "Blank and White",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1029,
                img: bestSellerTwo,
                productName: "New Backpack",
                price: "180.00",
                color: "Gray",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1030,
                img: bestSellerThree,
                productName: "Household materials",
                price: "25.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1031,
                img: bestSellerFour,
                productName: "Travel Bag",
                price: "220.00",
                color: "Black",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1032,
                img: newArrOne,
                productName: "Round Table Clock",
                price: "44.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1033,
                img: newArrTwo,
                productName: "Smart Watch",
                price: "250.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1034,
                img: newArrThree,
                productName: "cloth Basket",
                price: "80.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1035,
                img: newArrFour,
                productName: "Funny toys for babies",
                price: "60.00",
                color: "Mixed",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1036,
                img: newArrTwo,
                productName: "Funny toys for babies",
                price: "60.00",
                color: "Mixed",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1037,
                img: newArrFour,
                productName: "Funny toys for babies",
                price: "60.00",
                color: "Mixed",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1038,
                img: newArrTwo,
                productName: "Smart Watch",
                price: "250.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1039,
                img: bestSellerFour,
                productName: "Travel Bag",
                price: "220.00",
                color: "Black",
                badge: false,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1040,
                img: newArrOne,
                productName: "Round Table Clock",
                price: "44.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1041,
                img: newArrTwo,
                productName: "Smart Watch",
                price: "250.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1042,
                img: newArrThree,
                productName: "cloth Basket",
                price: "80.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1043,
                img: spfThree,
                productName: "Headphones",
                price: "25.00",
                color: "Mixed",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1044,
                img: spfFour,
                productName: "Sun glasses",
                price: "220.00",
                color: "Black",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1045,
                img: bestSellerOne,
                productName: "Flower Base",
                price: "35.00",
                color: "Blank and White",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
              {
                _id: 1046,
                img: spfOne,
                productName: "Cap for Boys",
                price: "35.00",
                color: "Blank and White",
                badge: true,
                des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
              },
            ])
          );
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
