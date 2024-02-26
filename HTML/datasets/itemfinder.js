export let list = JSON.parse(localStorage.getItem('list'))

if (!list) {
    list =['f86823oe-9js5-6h12-j39e-g6d09jk869a7'];
}

export function displayItem(productId) {
    open("item.html");

    list.push(productId);

    function saveLocal() {
        localStorage.setItem('list', JSON.stringify(list));
    }

    saveLocal();
}