import {cart, removeFromCart} from '../datasets/cart.js';
import {products} from '../datasets/products.js';
import {formatMoney} from './utilities/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryTypes} from '../datasets/delivery.js';

const today = dayjs();
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D').toLowerCase());

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  const deliveryTypeId = cartItem.deliveryTypeId;

  let deliveryType;

  deliveryTypes.forEach((type) => {
    if (type.id === deliveryTypeId) {
      deliveryType = type;
    }
  });

  const today = dayjs();
    const deliveryDate = today.add(
      deliveryType.deliveryTime, 
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

  cartSummaryHTML += `
    <div class="cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        delivery date : ${dateString.toLowerCase()}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatMoney(matchingProduct.pricePence)}
          </div>
          <div class="product-quantity">
            <span>
              quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            choose a delivery option :
          </div>
          ${deliveryTypesHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>
  `;
});

function deliveryTypesHTML(matchingProduct, cartItem) {
  let html = '';


  deliveryTypes.forEach((deliveryType) => {
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryType.deliveryTime, 
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

    const priceString = deliveryType.pricePence === 0
      ? 'free'
      : `$${formatMoney(deliveryType.pricePence)} -`; 

      const isChecked = deliveryType.id === cartItem.deliveryTypeId;

      html += `
      <div class="delivery-option">
        <input type="radio"
          ${isChecked ? 'checked' : ''}
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="delivery-option-price">
            ${priceString} shipping
          </div>
        </div>
      </div>
    `
  });

  return html;
}

document.querySelector('.js-cart')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
      `.js-cart-item-container-${productId}`
      )
      container.remove();
    })
  });