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

  products.forEach((product) => {
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
    image: 'imgs/le-fleur-cardigan.jpg',
    name: 'LACOSTE X LE FLEUR STRIPED CARDIGAN', rating: {
      stars: 5.0,
      count: 38
    }, type: 'new',
    pricePence: 50000,
    description: "Lacoste and Le FLEUR* first teamed up in 2019 for a capsule that debuted at The French Open. " +
                 "Four years later, the creative duo dream up a new collection that fully realises their shared vision, " +
                 "amalgamating Troyes-based brand’s athleisure aesthetic with Tyler, The Creator’s kaleidoscopic creations. " +
                 "A case in point? This cable-knit cardigan spun to a relaxed fit from cosy cotton, embroidered with an iconic crocodile and accented with gleaming flower-shaped buttons."
  }, {
    id: "d66734wd-6dd4-3w97-v57w-g8z34nr335n2" , 
    image: 'imgs/1017-alyx-9sm-bracelet.png', name: '1017 ALYX 9SM BUCKLE BRACELET 34', rating: {
      stars: 4.0,
      count: 98
    }, type: 'new',
    pricePence: 29500, 
    description: "Rollercoaster-buckle detail bracelet from 1017 Alyx 9SM featuring silver-tone, " +
                 "brass, cable-chain detail, engraved logo and Rollercoaster buckle fastening."
  }, {
    id: "b83021jg-0hb3-2n79-k24l-j0j23ke842kx3",
    image: 'imgs/rick-owens-pink-bolans.jpeg', name: 'RICK OWENS PINK BOLAN JEANS', rating: {
      stars: 4.5,
      count: 78,
    }, type: 'new',
    pricePence: 68500, 
    description: "Slim-fit lacquered 16 oz stretch Okayama denim jeans."
  }, {
    id: "3njkh339-8379-bmb1-337h-39031nkjnhak",
    image: 'imgs/cdg-bomber.jpg', name: 'COMME DES GARÇONS HOMME BOMBER JACKET', rating: {
      stars: 4.0,
      count: 17,
    }, type: 'new',
    pricePence: 76500,
    description: "Luxury."
  }, {
    id: "kjh39130-03j3-238j-kn32-093n17da897a",
    image: 'imgs/rick-kiss-heels.png', name: 'RICK OWENS KISS HEELS', rating: {
      stars: 5.0,
      count: 191
    }, type: 'new',
    pricePence: 100000,
    description: "Rick Owens is known for his high-octane streetwear that plays with proportion, and the Paris-based designer applies the same approach to the creation of his shoes. " + 
                 "Proof? The leather Kiss boots. Based on a classic Chelsea style but with the volume turned up, they sit on a towering stacked platform and heel. " + 
                 "Pull them on with everything from draped maxi dresses to wide-legged trousers."
  }, {
    id: "9hkd6klj9-80hk-a2ul-03j1-08dmapdj92g",
    image: 'imgs/maison-mihara.jpg', name: 'MAISON MIHARA YASUHIRO', rating: {
      stars: 3.5,
      count: 122
    }, type: 'new',
    pricePence: 31300,
    description: "Sneaker experts, Maison MIHARA YASUHIRO always go for the unconventional." +
                 " The Original is given a vintage overhaul this season with a ‘melted’ silhouette on the low-top uppers." +
                 " The OG showcases the old-school all-American sneaker in a different light, the stand out sole unit dominates the canvas uppers, with a vintage tinge."
  }, {
    id: "8j9djal23-02j2-8ojn-97la-9h08jhkd78w",
    image: 'imgs/issey-miyake-dress.jpg', name: 'ISSEY MIYAKE PLEATS PLEASE SNOWDROP DRESS', rating: {
      stars: 3.0,
      count: 28,
    }, type: 'new',
    pricePence: 62500, 
    description: "This light grey pleated midi-dress has long, curved sleeves and a round neckline." +
                 " As pattern of snowflakes is embossed on SNOWDROP, which has gentle curves at the cuffs."
  }, {
    id:"00jd8kha9-08ja-kj8d-762n-7da455254sdh",
    image: 'imgs/acne-leather-jacket.png', name: 'ACNE STUDIOS LEATHER JACKET', rating: {
      stars: 4.5,
      count: 245
    }, type: 'new',
    pricePence: 150000, 
    description: "Acne Studios dark brown/black jacket is crafted from merino shearling and crackled finish leather. " +
                 "Complete with zipper front closure and welt pockets. Cut to a relaxed fit and waist length."
  }, {
    id:"j3098j220-0o9a-8m2m-098l-802nlsdj809a",
    image: 'imgs/yohji-yamamoto-techno.jpg', name: 'YOHJI YAMAMOTO TECHNO PANTS', rating: {
      stars: 5.0,
      count: 248
    }, type: 'new',
    pricePence: 28500,
    description: "Luxury."
  }
];