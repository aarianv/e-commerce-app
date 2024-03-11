import {basket} from '../../datasets/cart.js'
import {getProduct} from '../../datasets/products.js';
import {getDeliveryType} from '../../datasets/delivery.js';
import {moneyRounder} from '../utilities/money.js';

export function renderSystem() {
    let productPricePence = 0;
    let shippingCost = 0;

    basket.forEach((basketItem) => {
        const product = getProduct(basketItem.productId);
        productPricePence += product.pricePence * basketItem.quantity;

        const deliveryType = getDeliveryType(basketItem.deliveryTypeId);
        shippingCost += deliveryType.pricePence;
    });

    const totalCost = productPricePence + shippingCost;

    const summaryHTML = `
        <div class="payment-summary-title">
            Order Summary
        </div>

         <div class="payment-summary-row">
            <div>ITEMS (${basket.length}):</div>
            <div class="payment-summary-money">
                £${moneyRounder(productPricePence)}
            </div>
        </div>

        <div class="payment-summary-row">
            <div>SHIPPING &amp; HANDLING:</div>
            <div class="payment-summary-money">
                £${moneyRounder(shippingCost)}
            </div>
        </div>

        <div class="payment-summary-row total-row">
            <div>ORDER TOTAL:</div>
            <div class="payment-summary-money">
                £${moneyRounder(totalCost)}
            </div>
        </div>

        <button class="place-order-button button-primary">
            PLACE ORDER.
        </button>
    `;

    document.querySelector('.js-payment-summary')
        .innerHTML = summaryHTML;
}