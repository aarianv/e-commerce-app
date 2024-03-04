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
                    <button class="filter-button js-filter-button">
                        ${item}
                    </button>
                </div>
            `
        }
        
    );

    document.querySelector('.js-item-filter').innerHTML = filterHTML;

    document.querySelectorAll('.js-filter-button')
        .forEach((button) => {
            button.addEventListener('click', () => {
                
            })
        })
};
