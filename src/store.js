import { getStorageItem, setStorageItem } from "./utils.js";
let store = getStorageItem("store");
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem("store", store);
};
// console.log(store);
const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

// same as export let store; export const setUpStore

// to give alias below you go store as story, instead of :
export { store, setupStore, findProduct };
