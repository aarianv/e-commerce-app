export function filter(products){
    let filterHTML = '';

    let filterArray = [];

    products.forEach((product) => {
        if (!filterArray.includes(products.itemType)) {
            filterArray.push(product.itemType);
        }
    })


    filterArray.forEach((item) => {
            filterHTML += `
                <div class="item-type">
                    ${product.itemType}
                </div>
            `
        }
        
    )};

    document.querySelector('.js-item-filter').innerHTML = filterHTML;
} 
