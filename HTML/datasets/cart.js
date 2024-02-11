export const cart = [{
  productId: 'f86823oe-9js5-6h12-j39e-g6d09jk869a7',
  quantity: 2,
}, {
  productId: 'h38969uj-9ed2-7h37-w46w-g3q73wd368a8',
  quantity: 1,
}];

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
      quantity: 1
    })
  }
}
