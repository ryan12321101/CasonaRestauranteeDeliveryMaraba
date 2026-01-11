// Aplicação Principal - Delivery Gourmet
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initCarousel();
    initDailyBanner();
});

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initCarousel();
    initDailyBanner(); // se quiser manter o banner
    initDailyModal();  // 🔥 modal automático
});
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
                        <div class="product-price">
  ${formatPrice(product.price)}
</div>
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


/* ========================= */
/* SEU app.js ORIGINAL AQUI */
/* ========================= */

let currentProduct = null;
let currentQty = 1;

// ===== CARROSSEL =====
let currentImages = [];
let currentImageIndex = 0;

// ================= RENDERIZA PRODUTOS =================
function renderProducts() {
    Object.keys(menuData).forEach(category => {
        const container = document.getElementById(category);
        if (!container) return;

        container.innerHTML = menuData[category].map(product => `
            <div class="product-card" onclick="openProductModal('${product.id}')">
                <img src="${product.image}" class="product-image">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-footer">
                        <span class="product-price">${formatPrice(product.price)}</span>
                        <button class="btn-add" onclick="event.stopPropagation(); cart.addItem('${product.id}')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    });
}

// ================= MODAL PRODUTO =================
function openProductModal(productId) {
    currentProduct = null;

    Object.values(menuData).forEach(category => {
        category.forEach(product => {
            if (product.id === productId) currentProduct = product;
        });
    });

    if (!currentProduct) return;

    currentQty = 1;

    // ===== IMAGENS =====
    currentImages = currentProduct.images?.length
        ? currentProduct.images
        : [currentProduct.image, currentProduct.image];

    currentImageIndex = 0;

    // ===== POPULA MODAL =====
    document.getElementById('productModalImage').src = currentImages[0];
    document.getElementById('productModalTitle').textContent = currentProduct.name;
    document.getElementById('productModalDescription').textContent = currentProduct.description;
    document.getElementById('productModalPrice').textContent = formatPrice(currentProduct.price);
    document.getElementById('productModalQty').textContent = currentQty;

    document.getElementById('productModal').classList.add('active');
}

// ================= CARROSSEL =================
function initCarousel() {
    const prev = document.querySelector('.carousel-btn.prev');
    const next = document.querySelector('.carousel-btn.next');
    const img = document.getElementById('productModalImage');

    if (!prev || !next || !img) return;

    prev.onclick = () => {
        currentImageIndex =
            (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        img.src = currentImages[currentImageIndex];
    };

    next.onclick = () => {
        currentImageIndex =
            (currentImageIndex + 1) % currentImages.length;
        img.src = currentImages[currentImageIndex];
    };
}

// ================= FECHAR MODAL =================
function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

// ================= CONTROLES =================
document.getElementById('productModalPlus').onclick = () => {
    currentQty++;
    document.getElementById('productModalQty').textContent = currentQty;
};

document.getElementById('productModalMinus').onclick = () => {
    if (currentQty > 1) currentQty--;
    document.getElementById('productModalQty').textContent = currentQty;
};

document.getElementById('productModalAdd').onclick = () => {
    for (let i = 0; i < currentQty; i++) {
        cart.addItem(currentProduct.id);
    }
    closeProductModal();
};

document.getElementById('productModalClose').onclick = closeProductModal;
document.getElementById('productModalOverlay').onclick = closeProductModal;

// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initCarousel(); // 🔥 AGORA FUNCIONA
});










function initDailyBanner() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0=Domingo

    // horário permitido
    if (hour < 9 || hour >= 18) return;

    const dailyMenu = {
        1: { id: 'ou-01', title: 'Cozidão', promo: 'Hoje tem Cozidão com preço especial!' },
        2: { id: 'pe-07', title: 'Carne de Sol', promo: 'Carne de sol suculenta hoje!' },
        3: { id: 'pm-02', title: 'Macarronada', promo: 'Macarronada feita na hora 🍝' },
        4: { id: 'fj-01', title: 'Feijoada', promo: 'Quinta é dia de feijoada!' },
        5: { id: 'pe-03', title: 'Frango Grelhado', promo: 'Promoção especial de sexta!' },
        6: { id: 'pe-02', title: 'Dia da Fejoada', promo: 'Sábado com bife acebolado 😋' },
        0: { id: 'pe-02', title: 'Dia da Fejoada', promo: 'Sábado com bife acebolado 😋' }
    };

    const dailyBannerImages = {
    1: 'img/banner/segunda.jpg',
    2: 'img/banner/terca.jpg',
    3: 'img/banner/quarta.jpg',
    4: 'img/banner/quinta.jpg',
    5: 'img/banner/Sem título.jpg',
    6: 'img/banner/sabado.jpg'
};

    const today = dailyMenu[day];
    if (!today) return;

    const banner = document.getElementById('dailyBanner');
    document.getElementById('dailyTitle').innerText =
        `Hoje é ${today.title}`;
    document.getElementById('dailyPromo').innerText =
        today.promo;

    banner.style.display = 'block';

    banner.onclick = () => {
        openProductModal(today.id);
    };
}


function initDailyModal() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 domingo

    if (hour < 9 || hour >= 18) return;

    const dailyMenu = {
        1: { id: 'ou-01', title: 'Cozidão', promo: 'Hoje tem Cozidão com preço especial!' },
        2: { id: 'pe-07', title: 'Carne de Sol', promo: 'Carne de sol suculenta hoje!' },
        3: { id: 'pm-02', title: 'Macarronada', promo: 'Macarronada fresquinha 🍝' },
        4: { id: 'fj-01', title: 'Feijoada', promo: 'Quinta é dia de feijoada!' },
        5: { id: 'pe-03', title: 'Frango Grelhado', promo: 'Promoção especial de sexta!' },
        6: { id: 'pe-02', title: 'Bife Acebolado', promo: 'Sábado especial 😋' },
        0: { id: 'pe-02', title: 'Bife Acebolado', promo: 'Sábado especial 😋' }
    };

    const today = dailyMenu[day];
    if (!today) return;

    const product = getProductById(today.id);
    if (!product) return;

    const overlay = document.getElementById('dailyModalOverlay');

    document.getElementById('dailyModalImage').src = product.image;
    document.getElementById('dailyModalTitle').innerText = today.title;
    document.getElementById('dailyModalPromo').innerText = today.promo;

    overlay.style.display = 'flex';

    // fechar
    document.getElementById('dailyClose').onclick = () => {
        overlay.style.display = 'none';
    };

    // clicar no banner
    overlay.querySelector('.daily-modal').onclick = () => {
        overlay.style.display = 'none';
        openProductModal(product.id);
    };
}





// Banner Carousel automático
let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showCarouselItem(index) {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
}

setInterval(() => {
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
    showCarouselItem(carouselIndex);
}, 4000); // troca a cada 4 segundos