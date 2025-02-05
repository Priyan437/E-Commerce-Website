document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelectorAll('.product .pro'); 

    async function fetchProducts(url) {
        try {
            let response = await fetch(url);
            let data = await response.json();

            console.log('Fetched data:', data); 

            products.forEach((productDiv, index) => {
                if (index < data.length) {
                    let product = data[index];
                    let title = product.title || '';
                    let imageUrl = product.image || ''; 
                    let price = product.price || 'N/A';

                    productDiv.innerHTML = `
                        <img src="${imageUrl}" alt="${title}" class="product-img">
                        <div class="product-content">
                            <h2 class="product-title">${title.length > 18 ? title.substring(0, 18).concat(' ...') : title}</h2>
                            <h3 class="product-price">$${price}</h3>
                        </div>
                    `;
                }
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    fetchProducts('https://fakestoreapi.com/products');
});
