import {cart, removeFromCart, UDT} from '../../datasets/cart.js';
import {products, getProduct} from '../../datasets/products.js';
import {formatMoney} from '../utilities/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryTypes, getDeliveryType} from '../../datasets/delivery.js';
import {renderSystem} from './paymentSystem.js';

const today = dayjs();
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D').toLowerCase());

 export function renderBasket() {

  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryTypeId = cartItem.deliveryTypeId;

    const deliveryType = getDeliveryType(deliveryTypeId);

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
          DELIVERY DATE: ${dateString.toUpperCase()}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              £${formatMoney(matchingProduct.pricePence)}
            </div>
            <div class="product-quantity">
              <span>
                QUANTITY: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                UPDATE
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                DELETE
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              CHOOSE A DELIVERY OPTION:
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
        ? 'FREE'
        : `£${formatMoney(deliveryType.pricePence)} -`; 

        const isChecked = deliveryType.id === cartItem.deliveryTypeId;

        html += `
        <div class="delivery-option js-delivery-type"
          data-product-id="${matchingProduct.id}"
          data-delivery-type-id="${deliveryType.id}">
          <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString.toUpperCase()}
            </div>
            <div class="delivery-option-price">
              ${priceString} SHIPPING
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

        renderSystem();
      })
    });

  document.querySelectorAll('.js-delivery-type')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const {productId, deliveryTypeId} = element.dataset;
        UDT(productId, deliveryTypeId);
        renderBasket();
        renderSystem();
      });
    });
}