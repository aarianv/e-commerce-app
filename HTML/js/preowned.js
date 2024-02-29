import {products} from '../datasets/products.js';
import {moneyRounder} from './utilities/money.js';
import {displayItem} from '../datasets/itemfinder.js';

let preownedHTML = '';

products.forEach((product) =>  {
  if (product.type === 'preowned') {
    preownedHTML += `
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
  }
});

document.querySelector('.js-preowned-products-grid').innerHTML = preownedHTML;

document.querySelectorAll('.js-img-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            displayItem(productId);
            console.log(productId);
            list.push(productId);
        });
    });  