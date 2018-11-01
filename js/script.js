var allProducts = [
    {
        name: 'product 1',
        price: 10,
        image: 'product1.jpg'
    },
    {
        name: 'product 2',
        price: 15,
        image: 'product2.jpg'
    },
    {
        name: 'product 3',
        price: 20,
        image: 'product3.jpg'
    }
];
var productsContainer = document.getElementById('allProducts');

for (var i = 0; i < allProducts.length; i++) {
    addProductToPage(allProducts[i]);
}

function filterProducts(){
    event.preventDefault();

    var minPrice = document.getElementById('minPrice').value;

    productsContainer.innerHTML = '';

    for (var i = 0; i < allProducts.length; i++) {

        if( allProducts[i].price >= minPrice){
            addProductToPage(allProducts[i]);
        } else {
            continue;
        }
    }
}

function addProductToPage(singleProduct){
    var productDiv = document.createElement('div');
    productDiv.className = 'card';

    productDiv.innerHTML += '<img class="card-img-top" src="images/'+singleProduct.image+'" alt="Card image cap">'
    productDiv.innerHTML += '<div class="card-body">';
    productDiv.innerHTML += '<h5 class="card-title">'+singleProduct.name+'</h5>';
    productDiv.innerHTML += '<p class="card-text">$'+singleProduct.price+'</p>';
    productDiv.innerHTML += '</div>';

    productsContainer.appendChild(productDiv);
}
