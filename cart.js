// Sistema de Carrinho de Compras

// Classe para gerenciar o carrinho
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.modal = document.getElementById('cartModal');
        this.overlay = document.getElementById('cartModalOverlay');
        this.closeBtn = document.getElementById('cartModalClose');
        this.cartButton = document.getElementById('cartButton');
        this.cartBadge = document.getElementById('cartBadge');
        this.cartItems = document.getElementById('cartItems');
        this.cartEmpty = document.getElementById('cartEmpty');
        this.cartSummary = document.getElementById('cartSummary');
        this.cartSubtotal = document.getElementById('cartSubtotal');
        
        this.initEventListeners();
        this.updateCartDisplay();
    }
    
    // Carregar carrinho do localStorage
    loadCart() {
        const savedCart = localStorage.getItem('deliveryCart');
        return savedCart ? JSON.parse(savedCart) : [];
    }
    
    // Salvar carrinho no localStorage
    saveCart() {
        localStorage.setItem('deliveryCart', JSON.stringify(this.items));
    }
    
    // Adicionar item ao carrinho
    addItem(productId) {
        // Verificar se está aberto
        if (!window.scheduleSystem.isOpenNow()) {
            alert('❌ Estamos fechados no momento. Confira nosso horário de funcionamento.');
            return;
        }
        
        const product = getProductById(productId);
        if (!product) return;
        
        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.updateCartDisplay();
        this.showAddedToast(product.name);
    }
    
    // Remover item do carrinho
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
    }
    
    // Atualizar quantidade
    updateQuantity(productId, change) {
        const item = this.items.find(item => item.id === productId);
        if (!item) return;
        
        item.quantity += change;
        
        if (item.quantity <= 0) {
            this.removeItem(productId);
        } else {
            this.saveCart();
            this.updateCartDisplay();
        }
    }
    
    // Calcular total
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    // Obter quantidade total de itens
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    
    // Limpar carrinho
    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartDisplay();
    }
    
    // Atualizar display do carrinho
    updateCartDisplay() {
        const totalItems = this.getTotalItems();
        const total = this.getTotal();
        
        // Atualizar badge
        this.cartBadge.textContent = totalItems;
        
        // Atualizar modal do carrinho
        if (this.items.length === 0) {
            this.cartEmpty.style.display = 'block';
            this.cartItems.style.display = 'none';
            this.cartSummary.style.display = 'none';
        } else {
            this.cartEmpty.style.display = 'none';
            this.cartItems.style.display = 'flex';
            this.cartSummary.style.display = 'block';
            
            // Renderizar itens
            this.cartItems.innerHTML = this.items.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                        <div class="cart-item-controls">
                            <button class="btn-quantity" onclick="cart.updateQuantity('${item.id}', -1)">-</button>
                            <span class="cart-item-quantity">${item.quantity}</span>
                            <button class="btn-quantity" onclick="cart.updateQuantity('${item.id}', 1)">+</button>
                        </div>
                    </div>
                    <button class="btn-remove" onclick="cart.removeItem('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
            
            // Atualizar total
            this.cartSubtotal.textContent = formatPrice(total);
        }
    }
    
    // Mostrar toast de adicionado
    showAddedToast(productName) {
        // Criar elemento de toast
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 24px;
            background: #2ECC71;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 9999;
            animation: slideIn 0.3s ease;
            font-weight: 600;
        `;
        toast.innerHTML = `<i class="fas fa-check-circle"></i> ${productName} adicionado!`;
        
        document.body.appendChild(toast);
        
        // Remover após 2 segundos
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }
    
    // Inicializar event listeners
    initEventListeners() {
        // Abrir modal do carrinho
        this.cartButton.addEventListener('click', () => {
            if (!window.scheduleSystem.isOpenNow()) {
                alert('❌ Estamos fechados no momento. Confira nosso horário de funcionamento.');
                return;
            }
            this.modal.classList.add('active');
        });
        
        // Fechar modal
        this.overlay.addEventListener('click', () => {
            this.modal.classList.remove('active');
        });
        
        this.closeBtn.addEventListener('click', () => {
            this.modal.classList.remove('active');
        });
        
        // Botão de checkout
        const checkoutBtn = document.getElementById('checkoutBtn');
        checkoutBtn.addEventListener('click', () => {
            if (this.items.length === 0) {
                alert('❌ Seu carrinho está vazio!');
                return;
            }
            
            if (!window.scheduleSystem.isOpenNow()) {
                alert('❌ Estamos fechados no momento. Não é possível finalizar pedidos agora.');
                return;
            }
            
            this.modal.classList.remove('active');
            window.checkoutManager.openCheckout();
        });
    }
    
    // Obter itens do carrinho
    getItems() {
        return this.items;
    }
}

// Adicionar animações ao CSS global
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Instância global do carrinho
const cart = new ShoppingCart();
