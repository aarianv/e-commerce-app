export function filter(products){
    let filterHTML = '';

    let filterArray = [];

    products.forEach((product) => {
        if (!filterArray.includes(product.itemType)) {
            filterArray.push(product.itemType);
        }
    })


    filterArray.forEach((item) => {
            filterHTML += `
                <div class="item-type">
                    ${item}
                </div>
            `
        }
        
    );

    document.querySelector('.js-item-filter').innerHTML = filterHTML;
};
