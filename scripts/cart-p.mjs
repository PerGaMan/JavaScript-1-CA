// steps to display cart items

// 1. Get the  display container container
// 2. Get the items from the local storage
// 3. Loop through the items in the cart
// 4. Generate HTML from the item
// 5. Append the HTML yo the display container

console.log("hei there im connected");

// Generate html for items added
function genHtmlCartProd(raincoat) {
  //      ------- Variables -------
  const productSummary = document.querySelector("#singleCartCheckoutProd");
  const productTTL = document.querySelector("#prodTtl");
  const productPrice = document.querySelector("#prodPrice");
  const checkOutProdImg = document.querySelector("#checkOutProdImg");
  const prodQuant = document.querySelector("#prodQuant");
  const cartCalculations = document.querySelector("#cartCalculations");
  const totalPay = document.querySelector('.totalPay"');
  //       ------- declaration from items added to the cart -------
  productTTL.textContent = raincoat.title;
  productPrice.textContent = raincoat.price;
  //   maybe create an if statement to check if discounted price exist.
  //   checkOutProdImg.src = raincoat.img;
  //   checkOutProdImg.src = raincoat.img.url;
  prodQuant.textContent = raincoat.quantity;
  //       ------- styles/classes and ids -------

  //       ------- append and return -------
  productSummary.append(
    productTTL,
    productPrice,
    prodQuant,
    cartCalculations,
    totalPay
  );
  return productSummary;
}

// display cart container
function displayCartProducts() {
  const cartContainer = document.querySelector("#cartCont");
  const cart = JSON.parse(localStorage.getItem("#cart"));
  //   if (!cart) {
  //     return null;
  //   }
  cart.forEach((currentItem) => {
    const cartContainer = genHtmlCartProd(currentItem);
    cartContainer.appendChild(itemHtml);
  });
}
function main() {
  displayCartProducts();
}
