function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const products = [{
  image: 'imgs/tabi-boots.jpg', name: 'maison  margiela  black  tabi  boots', rating: {
    stars: 4.5,
    count: 76,
  }, type: 'new',
  pricePence: 95000
}, {
  image: 'imgs/le-fleur-cardigan.jpg', name: 'lactose  x  le  fleur  striped  cardigan', rating: {
    stars: 5.0,
    count: 38
  }, type: 'new',
  pricePence: 50000
}, {
  image: 'imgs/1017-alyx-9sm-bracelet.jpg', name: '1017  alyx  9sm  buckle  bracelet  34', rating: {
    stars: 4.0,
    count: 98
  }, type: 'new',
  pricePence: 29500
} ];

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" 
        src="${product.image}">
      </div>

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
        $${(product.pricePence / 100).toFixed(2)}
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

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

console.log(productsHTML)

document.querySelector('.js-products-grid').innerHTML = productsHTML;
