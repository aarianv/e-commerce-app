export let basket = JSON.parse(localStorage.getItem('basket'));


if (!basket) {
  basket = [{
    productId: 'f86823oe-9js5-6h12-j39e-g6d09jk869a7',
    quantity: 2,
    deliveryTypeId: '1'
  }, {
    productId: 'h38969uj-9ed2-7h37-w46w-g3q73wd368a8',
    quantity: 1,
    deliveryTypeId: '3'
  }];
}

function saveLocal() {
  localStorage.setItem('basket', JSON.stringify(basket));
}

export function addInBasket(productId) {
  let matchingItem;
  
  basket.forEach((basketItem) => {
    if (productId === basketItem.productId) {
      matchingItem = basketItem;
    }
  });
  
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    basket.push({
      productId: productId, 
      quantity: 1, 
      deliveryTypeId: '1'
    });
  }

  saveLocal();
}

export function removeFromCart(productId) {
  const newBasket = [];

  basket.forEach((basketItem) => {
    if (basketItem.productId !== productId) {
      newBasket.push(basketItem);
    }
  })

  basket = newBasket;

  saveLocal();
}

export function UDT(productId, deliveryTypeId) {
  let matchingItem;
  
  basket.forEach((basketItem) => {
    if (productId === basketItem.productId) {
      matchingItem = basketItem;
    }
  });

  matchingItem.deliveryTypeId = deliveryTypeId;

  saveLocal();
}