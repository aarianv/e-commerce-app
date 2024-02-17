import {cart} from '../../datasets/cart.js'
import {getProduct} from '../../datasets/products.js';
import {getDeliveryType} from '../../datasets/delivery.js';
import {formatMoney} from '../utilities/money.js';

export function renderSystem() {
    let productPricePence = 0;
    let shippingCost = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPricePence += product.pricePence * cartItem.quantity;

        const deliveryType = getDeliveryType(cartItem.deliveryTypeId);
        shippingCost += deliveryType.pricePence;
    });

    const totalCost = productPricePence + shippingCost;

    const paymentSystemHTML = `
        <div class="payment-summary-title">
            Order Summary
        </div>

         <div class="payment-summary-row">
            <div>ITEMS (${cart.length}):</div>
            <div class="payment-summary-money">
                £${formatMoney(productPricePence)}
            </div>
        </div>

        <div class="payment-summary-row">
            <div>SHIPPING &amp; HANDLING:</div>
            <div class="payment-summary-money">
                £${formatMoney(shippingCost)}
            </div>
        </div>

        <div class="payment-summary-row total-row">
            <div>ORDER TOTAL:</div>
            <div class="payment-summary-money">
                £${formatMoney(totalCost)}
            </div>
        </div>

        <button class="place-order-button button-primary">
            PLACE ORDER.
        </button>
    `;

    document.querySelector('.js-payment-summary')
        .innerHTML = paymentSystemHTML;
}