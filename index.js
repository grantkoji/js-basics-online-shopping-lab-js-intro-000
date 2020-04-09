var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(1+(Math.random()*100));
  var itemAndPrice = `{ itemName: ${item}, itemPrice: ${price} }`;
  cart.push(itemAndPrice);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }
  else {
    var cartview = 'In your cart, you have'
    if (cart.length === 1) {
      return `${cartview} ${cart.itemName[0]} at $${cart.itemPrice[0]}.`
    }
    else {
      for (i = 0; i < (cart.length - 1); i++) {
      cartview = `${cartview} ${cart.itemName[i]} at $${cart.itemPrice[i]},`
      }
      return `${cartview} and ${cart.itemName[(cart.length - 1)]} at $${cart.itemPrice[(cart.length - 1)]}.`
    }
  }
}

function total() {
  if (cart.length === 0) {
    return 0
  }
  else {
    var total = 0;
    for (i = 0; i < cart.length; i++ ) {
      total = total + cart.itemPrice[i];
    }
    return total;
  }
}

function removeFromCart(item) {

  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
