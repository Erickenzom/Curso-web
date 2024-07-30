// Função para obter os detalhes do produto da URL
function getProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');

    // Dados fictícios dos produtos
    const products = {
        '1': { name: 'Produto 1', description: 'Descrição do Produto 1', price: 'R$ 100,00', image: 'product1.jpg' },
        '2': { name: 'Produto 2', description: 'Descrição do Produto 2', price: 'R$ 150,00', image: 'product2.jpg' }
    };

    return products[productId];
}

// Função para atualizar o conteúdo da página de detalhes do produto
function updateProductDetails() {
    const product = getProductDetails();
    if (product) {
        document.getElementById('product-info').innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;
    } else {
        document.getElementById('product-info').innerHTML = '<p>Produto não encontrado.</p>';
    }
}

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const products = {
        '1': { name: 'Produto 1', price: 'R$ 100,00' },
        '2': { name: 'Produto 2', price: 'R$ 150,00' }
    };

    if (products[productId]) {
        cart.push(products[productId]);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Função para atualizar a página do carrinho
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>${item.price}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('R$ ', '').replace(',', '.')), 0).toFixed(2);

    document.getElementById('cart-items').innerHTML = cartItems;
    document.getElementById('cart-total').innerHTML = `<h3>Total: R$ ${total}</h3>`;
}

// Inicializa a página com base na URL
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('product.html')) {
        updateProductDetails();
    } else if (window.location.pathname.endsWith('cart.html')) {
        updateCart();
    }

    // Adicionar produtos ao carrinho
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            addToCart(button.getAttribute('data-id'));
        });
    });
});