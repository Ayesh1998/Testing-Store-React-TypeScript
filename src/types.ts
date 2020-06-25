export interface categories {
  name: String;
  url: String;
  id: Number;
  active: Number;
}

export interface item {
  name: String;
  url: String;
  id: Number;
  pricepre: Number;
  pricenow: Number;
  cartAdded: Number;
}

export interface StoreStates {
  categories: categories[];
  products: any;
  cartItems: any;
  toggleDropdown: any;
}

export const ADD_CART = "ADD_CART";
export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";
export const REMOVE_CART = "REMOVE_CART";

interface AddCartAction {
  type: typeof ADD_CART;
  payload: item;
}

interface RemoveCartAction {
  type: typeof REMOVE_CART;
  payload: item;
}

interface ToggledropdownAction {
  type: typeof TOGGLE_DROPDOWN;
}

export type StoreActionTypes =
  | AddCartAction
  | RemoveCartAction
  | ToggledropdownAction;
