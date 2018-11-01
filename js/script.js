var  allProducts = [
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

for (var i = 0; i < allProducts.length; i++) {
    var productDiv = document.createElement('div');
    productDiv.className = 'card';

    productDiv.innerHTML += '<div class="card-body">';
    productDiv.innerHTML += '<h5 class="card-title">'+allProducts[i].name+'</h5>';
    productDiv.innerHTML += '</div>';











    var productsContainer = document.getElementById('allProducts');
    productsContainer.appendChild(productDiv);
}
