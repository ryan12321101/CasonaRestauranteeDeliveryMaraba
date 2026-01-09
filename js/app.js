// Aplicação Principal - Delivery Gourmet

// Função para renderizar produtos
function renderProducts() {
    // Renderizar cada categoria
    Object.keys(menuData).forEach(category => {
        const container = document.getElementById(category);
        if (!container) return;
        
        const products = menuData[category];
        
        container.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-footer">
                        <div class="product-price">${formatPrice(product.price)}</div>
                        <button class="btn-add" onclick="handleAddToCart('${product.id}')" ${!window.scheduleSystem.isOpenNow() ? 'disabled' : ''}>
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    });
}

// Função para adicionar ao carrinho
function handleAddToCart(productId) {
    if (!window.scheduleSystem.isOpenNow()) {
        alert('❌ Estamos fechados no momento. Confira nosso horário de funcionamento.');
        return;
    }
    
    cart.addItem(productId);
}

// Função para verificar e atualizar status dos botões
function updateButtonsStatus() {
    const isOpen = window.scheduleSystem.isOpenNow();
    const addButtons = document.querySelectorAll('.btn-add');
    
    addButtons.forEach(button => {
        button.disabled = !isOpen;
    });
}

// Inicializar aplicação
function initApp() {
    console.log('🚀 Iniciando Delivery Gourmet...');
    
    // Inicializar sistema de horários
    window.scheduleSystem.initScheduleSystem();
    
    // Renderizar produtos
    renderProducts();
    
    // Atualizar status dos botões a cada minuto
    setInterval(updateButtonsStatus, 60000);
    
    console.log('✅ Delivery Gourmet iniciado com sucesso!');
    
    // Log de boas-vindas
    console.log(`
    ╔════════════════════════════════════╗
    ║   🍽️  DELIVERY GOURMET ONLINE  🍽️   ║
    ╠════════════════════════════════════╣
    ║  Sistema de Delivery Profissional  ║
    ║  ✅ Cardápio Completo              ║
    ║  ✅ Carrinho Inteligente           ║
    ║  ✅ Pagamento Pix + Dinheiro       ║
    ║  ✅ Integração WhatsApp            ║
    ║  ✅ Horário Automático             ║
    ╚════════════════════════════════════╝
    `);
}

// Event listener para quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Prevenir zoom no iOS ao focar inputs
document.addEventListener('touchstart', function() {}, {passive: true});

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomentar quando tiver service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar classe ao scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

header.style.transition = 'transform 0.3s ease';

// Lazy loading de imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Observar imagens quando forem adicionadas
    const observeImages = () => {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    };
    
    // Executar após renderização
    setTimeout(observeImages, 100);
}

// Detectar dispositivo móvel
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    document.body.classList.add('mobile');
}

// Adicionar meta tag para PWA
const metaThemeColor = document.createElement('meta');
metaThemeColor.name = 'theme-color';
metaThemeColor.content = '#E63946';
document.head.appendChild(metaThemeColor);

// Performance: Preload de fontes críticas
const preloadLinks = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

preloadLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
});

// Função utilitária para debug
window.deliveryDebug = {
    isOpen: () => window.scheduleSystem.isOpenNow(),
    cartItems: () => cart.getItems(),
    cartTotal: () => cart.getTotal(),
    clearCart: () => cart.clearCart(),
    forceOpen: () => {
        console.warn('⚠️ Forçando status ABERTO (apenas para testes)');
        document.getElementById('status').querySelector('.status-dot').textContent = '🟢';
        document.getElementById('status').querySelector('.status-text').textContent = 'ABERTO';
        document.getElementById('closedBanner').classList.remove('active');
        document.getElementById('nextOpenBanner').classList.remove('active');
        document.getElementById('mainContent').classList.remove('disabled');
        document.querySelectorAll('.btn-add').forEach(btn => btn.disabled = false);
    }
};

// Mensagem de console para desenvolvedores
console.log('%c💻 Desenvolvedor?', 'color: #E63946; font-size: 20px; font-weight: bold;');
console.log('%cEste site foi desenvolvido com as melhores práticas de web development!', 'color: #666; font-size: 14px;');
console.log('%cUse deliveryDebug no console para ver funções úteis', 'color: #2ECC71; font-size: 12px;');
