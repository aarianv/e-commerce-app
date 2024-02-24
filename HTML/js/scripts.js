import {cart, addToCart} from '../datasets/cart.js';
import {products} from '../datasets/products.js';
import {formatMoney} from './utilities/money.js';
import {displayItem} from '../datasets/itemfinder.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
          <button class="img-button js-img-button" data-product-id="${product.id}">
            <img class="product-image"
            src="${product.image}">
          </button>
        </div>

      <div class="hide">
        <div class="product-name">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="imgs/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          £${formatMoney(product.pricePence)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
          ADD TO CART
        </button>
      </div>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      console.log(cart)
    });
  });

document.querySelectorAll('product-image-container')
  .forEach((a) => {
    product.addEventListener('click', () => {
      const copyId = a.dataset.productId;
    });
  });

document.querySelectorAll('.js-img-button')
  .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        displayItem(productId);
        console.log(productId);
        list.push(productId);
      });
  });
 