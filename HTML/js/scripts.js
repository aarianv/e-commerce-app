import {products} from '../datasets/products.js';
import {moneyRounder} from './utilities/money.js';
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

        <div class="product-price">
          £${moneyRounder(product.pricePence)}
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-img-button')
  .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        displayItem(productId);
        console.log(productId);
        list.push(productId);
      });
  });

