import { item, StoreActionTypes } from "./../types";

export const addToCart = (item: item): StoreActionTypes => ({
  type: "ADD_CART",
  payload: item,
});

export const toggleDropdown = (): StoreActionTypes => ({
  type: "TOGGLE_DROPDOWN",
});

export const removeItemFromCart = (item: item): StoreActionTypes => ({
  type: "REMOVE_CART",
  payload: item,
});
