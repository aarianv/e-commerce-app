function revealNavigation() {
    document.getElementById("overlayNav()").style.height = "100%";
}
  
function shrinkNavigation() {
    document.getElementById("overlayNav()").style.height = "0%";
}

function search_item() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let product = document.getElementsByClassName('product-container')

    for (i=0; i < product.length; i++) {
        if (!product[i].innerHTML.toLowerCase().includes(input)) {
            product[i].style.display = "none";
        }
        else {
            product[i].style.display = "list-item";
        }
    }
}

