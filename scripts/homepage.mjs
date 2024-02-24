"use strict";

console.log("this script is finally loaded");
// imported variables
import { baseApiUrl } from "./modules.mjs";
import { rainyProdEndPoints } from "./modules.mjs";
// Imported functions
import { doFetchData } from "./modules.mjs";

//      ------- Working on -------

// creating cart component
function createCart() {
  const cart = localStorage.getItem("cart");
  if (!cart) {
    localStorage.setItem("cart", JSON.stringify([]));
    // console.log("if there isnt a cart add one");
  }
  // console.log("yabadabadu2");
}
//  adding to cart
function addToCart(raincoat) {
  console.log("addedToCart", raincoat);
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  const prodIndex = cart.findIndex(function (currentProd) {
    console.log("currentProd");
    if (raincoat.id === raincoat.id) {
      return true;
    } else {
      return false;
    }
  });
  if (prodIndex === -1) {
    cart.push({ ...raincoat, quantity: 1 });
  } else {
    cart[prodIndex].quantity++;
  }
  console.log("prodIndex", prodIndex);
  cart.push(raincoat);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function genProdHtml(raincoat) {
  // console.log(raincoat);
  //    ------- variables -------
  const prodCardContainer = document.createElement("section");
  const productCard = document.createElement("div");
  const imgContForCard = document.createElement("div");
  const textContainer = document.createElement("div");
  const productTtl = document.createElement("p");
  const productDescription = document.createElement("p");
  const productPrice = document.createElement("p");
  //    ------- button add to cart -------
  const buyItem = document.createElement("button");
  buyItem.classList.add("buyProdButton");
  buyItem.textContent = "Add to cart ";
  buyItem.addEventListener("click", () => {
    console.log("id", raincoat.id);
    addToCart(raincoat);
  });
  // If I later filter with items on sale
  // const isProductOnSale = "";
  //                  insert image how?
  const productImg = document.createElement("img");
  // how to get the image????
  // productImg.src = raincoat.image;
  // productImg.src = raincoat.image.url;
  //       ------- declaration from api -------
  // delete the Rainy days from the title
  productTtl.textContent = raincoat.title;
  productDescription.textContent = raincoat.description;
  // Change the int of price to num
  productPrice.textContent = raincoat.price;
  //       ------- styles/classes and ids -------
  prodCardContainer.classList.add("content-container");
  productCard.classList.add("card");
  imgContForCard.classList.add("card-image");
  textContainer.classList.add("card-text-field");
  productDescription.classList.add("product-txt");
  productTtl.classList.add("product-ttl");
  productPrice.classList.add("product-price");
  //       ------- append and return -------
  // to do
  // 1. add imgs
  // 2. create a div with class card-image
  // 3. create a div with class card.
  // 4. append card-image and card

  // if appending is correct like nesting
  textContainer.append(productTtl, productDescription, productPrice, buyItem);
  productCard.append(imgContForCard, textContainer);
  prodCardContainer.append(productCard);
  return prodCardContainer;
}
// Display html to the DOM
function displayRainCoatsLi(rainCoats) {
  const displayContainer = document.querySelector("#display-container");
  rainCoats.data.forEach((rainCoat) => {
    const ProdHtml = genProdHtml(rainCoat);
    displayContainer.appendChild(ProdHtml);
  });
}
// async function main() {
//   createCart();
//   const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
//   // const raincoats = rainCoats.data;
//   displayRainCoatsLi(rainCoats);
// }

async function main() {
  createCart();
  try {
    const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
    // const rainCoats = { data: rainCoats }.data;
    displayRainCoatsLi(rainCoats);
  } catch (error) {
    console.error();
  }
}

main();
