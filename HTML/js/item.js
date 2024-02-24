import {getProduct, products} from '../datasets/products.js';
import {list} from '../datasets/itemfinder.js';

const productId = list[list.length-1];

const matchingProduct = getProduct(productId)

let itemHTML = '';

itemHTML += `
    <title>RSRV - ${matchingProduct.name}</title>

    <div class="item-page-grid">
        <div class="item-product-image">
            <img class="large-image" src="${matchingProduct.image}">
        </div>
    </div>

    <div class="right-grid">
        <div class="item-product-name">
            ${matchingProduct.name}
        </div>
        <div class="item-stars">
            ${matchingProduct.stars}
        </div>
        <div class="item-add-to-cart">
            <button>ADD TO CART</button>
        </div>
    </div>

`

document.querySelector('.js-item-container').innerHTML = itemHTML;
