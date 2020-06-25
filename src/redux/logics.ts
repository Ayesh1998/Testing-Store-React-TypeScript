import { item } from "./../types";

export const addToCartLogic = (products: item[], item: item) => {
  return [...products, { ...item, cartAdded: 1 }];
};

export const afterAddToCartLogic = (products: item[], item: item) => {
  var indexs = products.findIndex((itemz: item) => itemz.id === item.id);
  var filtereds = products.filter((itemz: item) => itemz.id !== item.id);
  filtereds.splice(indexs, 0, { ...item, cartAdded: 1 });
  return filtereds;
};

export const toggleDropdown = (toggle: BinaryType) => {
  var temp = !toggle;
  console.log(temp);
  return temp;
};
export const removeCartItems = (cart: item[], id: Number) => {
  var filteredd = cart.filter((itemz: item) => itemz.id !== id);
  return filteredd;
};

export const removeItemformCart = (products: item[], item: item) => {
  var indexs = products.findIndex((itemz: item) => itemz.id === item.id);
  var filtereds = products.filter((itemz: item) => itemz.id !== item.id);

  filtereds.splice(indexs, 0, { ...item, cartAdded: 0 });
  return filtereds;
};
