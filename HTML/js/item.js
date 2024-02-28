import {getProduct, products, returnProduct} from '../datasets/products.js';
import {list} from '../datasets/itemfinder.js';
import {moneyRounder} from './utilities/money.js';
import {addInBasket} from '../datasets/cart.js';
import {basket} from '../datasets/cart.js';

const productId = list[list.length-1];

const matchingProduct = getProduct(productId)

let itemHTML = '';

itemHTML += `
    <title>${matchingProduct.name} - ARI</title>

    <div class="item-page-grid">
        
        <div class="left-grid column">
            <div class="item-stars">
                <img class="stars-size" src="imgs/ratings/rating-${matchingProduct.rating.stars * 10}.png">
            </div>
            <div class="item-rating-count">
                ${matchingProduct.rating.count}
            </div>
            <div class="item-description">
                ${matchingProduct.description}
            </div>
        </div>

        <div class="mid-grid column">
            <div class="item-product-image">
                <img class="large-image" src="${matchingProduct.image}">
            </div>
        </div>

        <div class="right-grid column">
            <div class="name-number">
                <div class="item-product-name">
                    ${matchingProduct.name}
                </div>
                <div class="item-money"> 
                    £${moneyRounder(matchingProduct.pricePence)}
                </div>
            </div>

            <div class="item-add-to-cart js-add-in-basket"
             data-product-id="${matchingProduct.id}">
                <button class="basket-button">ADD TO CART</button>
            </div>
        </div>
    </div>
`

document.querySelector('.js-item-container').innerHTML = itemHTML;

document.querySelectorAll('.js-add-in-basket')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const matchingProduct = button.dataset.matchingProduct;
      returnProduct(matchingProduct);
      console.log(productId);
      addInBasket(productId);
    });
  });

