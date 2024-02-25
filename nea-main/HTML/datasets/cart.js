export let cart = JSON.parse(localStorage.getItem('cart'));


if (!cart) {
  cart = [{
    productId: 'f86823oe-9js5-6h12-j39e-g6d09jk869a7',
    quantity: 2,
    deliveryTypeId: '1'
  }, {
    productId: 'h38969uj-9ed2-7h37-w46w-g3q73wd368a8',
    quantity: 1,
    deliveryTypeId: '2'
  }];
}

function saveLocal() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;
  
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId, 
      quantity: 1, 
      deliveryTypeId: '1'
    });
  }

  saveLocal();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  })

  cart = newCart;

  saveLocal();
}

export function UDT(productId, deliveryTypeId) {
  let matchingItem;
  
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryTypeId = deliveryTypeId;

  saveLocal();
}