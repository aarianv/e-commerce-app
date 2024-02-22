import {products} from '../datasets/products.js';

products.Id = globalId;

let itemHTML = '';

itemHTML += `
    <title>RSRV - ${products.id}</title>

`

document.querySelector('.js-item-container').innerHTML = itemHTML;
