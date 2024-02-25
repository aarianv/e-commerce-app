export function getProduct(productId) {
  let matchingProduct;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    return matchingProduct;
}

export function returnProduct(matchingProduct) {
  let productId;

  products.forEach((matchingProduct) => {
    if (product.id === matchingProduct) {
      productId = matchingProduct
    }
  });

  return productId;
}

export const products = [
  {
    id: "f86823oe-9js5-6h12-j39e-g6d09jk869a7" ,
    image: 'imgs/tabi-boots.jpg', name: 'MAISON MARGIELA BLACK TABI BOOTS', rating: {
      stars: 4.5,
      count: 76,
    }, type: 'new',
    pricePence: 95000, 
    description: "For over 30 years Maison Margiela's Tabi boots have been a signature of the label. " +
                  "They're crafted from leather with the iconic split toe. " +
                  "This pair have been updated for AW19 for a more pared-back aesthetic, while still sitting on the chunky, high heel."
  }, {
    id: "h38969uj-9ed2-7h37-w46w-g3q73wd368a8" , 
    image: 'imgs/le-fleur-cardigan.jpg', name: 'LACOSTE X LE FLEUR STRIPED CARDIGAN', rating: {
      stars: 5.0,
      count: 38
    }, type: 'new',
    pricePence: 50000
  }, {
    id: "d66734wd-6dd4-3w97-v57w-g8z34nr335n2" , 
    image: 'imgs/1017-alyx-9sm-bracelet.png', name: '1017 ALYX 9SM BUCKLE BRACELET 34', rating: {
      stars: 4.0,
      count: 98
    }, type: 'new',
    pricePence: 29500 
  }, {
    id: "b83021jg-0hb3-2n79-k24l-j0j23ke842kx3",
    image: 'imgs/rick-owens-pink-bolans.jpeg', name: 'RICK OWENS PINK BOLAN JEANS', rating: {
      stars: 4.5,
      count: 78,
    }, type: 'new',
    pricePence: 68500
  }, {
    id: "3njkh339-8379-bmb1-337h-39031nkjnhak",
    image: 'imgs/cdg-bomber.jpg', name: 'COMME DES GARÇONS HOMME BOMBER JACKET', rating: {
      stars: 4.0,
      count: 17,
    }, type: 'new',
    pricePence: 76500
  }, {
    id: "kjh39130-03j3-238j-kn32-093n17da897a",
    image: 'imgs/rick-kiss-heels.png', name: 'RICK OWENS KISS HEELS', rating: {
      stars: 5.0,
      count: 191
    }, type: 'new',
    pricePence: 100000
  }, {
    id: "9hkd6klj9-80hk-a2ul-03j1-08dmapdj92g",
    image: 'imgs/maison-mihara.jpg', name: 'MAISON MIHARA YASUHIRO', rating: {
      stars: 3.5,
      count: 122
    }, type: 'new',
    pricePence: 31300
  }, {
    id: "8j9djal23-02j2-8ojn-97la-9h08jhkd78w",
    image: 'imgs/issey-miyake-dress.jpg', name: 'ISSEY MIYAKE PLEATS PLEASE SNOWDROP DRESS', rating: {
      stars: 3.0,
      count: 28,
    }, type: 'new',
    pricePence: 62500
  }, {
    id:"00jd8kha9-08ja-kj8d-762n-7da455254sdh",
    image: 'imgs/acne-leather-jacket.png', name: 'ACNE STUDIOS LEATHER JACKET', rating: {
      stars: 4.5,
      count: 245
    }, type: 'new',
    pricePence: 150000
  }, {
    id:"j3098j220-0o9a-8m2m-098l-802nlsdj809a",
    image: 'imgs/yohji-yamamoto-techno.jpg', name: 'YOHJI YAMAMOTO TECHNO PANTS', rating: {
      stars: 5.0,
      count: 248
    }, type: 'new',
    pricePence: 28500
  }
];