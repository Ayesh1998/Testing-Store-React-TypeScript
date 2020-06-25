import { createStore } from "redux";
import { categories, products } from "../data/dummydata";
import { reducer } from "./reducer";
import { categories as categoriestype, item } from "./../types";

export interface StoreStates {
  categories: categoriestype[];
  products: item[];
  cartItems: item[];
  toggleDropdown: any;
}

const initialState: StoreStates = {
  categories: categories,
  products: products,
  cartItems: [],
  toggleDropdown: false,
};

export const store = createStore(reducer, initialState);
