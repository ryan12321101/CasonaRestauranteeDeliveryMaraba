// ========================================
// INTEGRAÇÃO COM FIREBASE - CARDÁPIO PÚBLICO
// ========================================
// Este arquivo adiciona funcionalidade de filtrar produtos inativos
// usando dados do Firebase Firestore em tempo real
// ========================================

// Variável para armazenar produtos ativos do Firebase
let produtosAtivosFirebase = new Set();
let firebaseCarregado = false;

// ===== CARREGAR PRODUTOS ATIVOS DO FIREBASE =====
async function carregarProdutosAtivos() {
    // Verificar se Firebase está configurado
    if (typeof db === 'undefined') {
        console.warn('⚠️ Firebase não configurado - todos os produtos serão exibidos');
        firebaseCarregado = false;
        return;
    }

    try {
        console.log('🔄 Carregando produtos ativos do Firebase...');
        
        // Buscar apenas produtos ativos
        const snapshot = await db.collection('produtos')
            .where('ativo', '==', true)
            .get();
        
        produtosAtivosFirebase.clear();
        
        snapshot.forEach((doc) => {
            produtosAtivosFirebase.add(doc.id);
        });
        
        firebaseCarregado = true;
        console.log(`✅ ${produtosAtivosFirebase.size} produtos ativos carregados do Firebase`);
        
    } catch (error) {
        console.error('❌ Erro ao carregar produtos do Firebase:', error);
        firebaseCarregado = false;
    }
}

// ===== FILTRAR PRODUTOS ATIVOS =====
// Filtra os produtos do menuData baseado no status do Firebase
function filtrarProdutosAtivos(produtos) {
    // Se Firebase não está carregado, retornar todos os produtos
    if (!firebaseCarregado || produtosAtivosFirebase.size === 0) {
        return produtos;
    }
    
    // Filtrar apenas produtos que estão ativos no Firebase
    return produtos.filter(produto => produtosAtivosFirebase.has(produto.id));
}

// ===== RENDERIZAR PRODUTOS COM FIREBASE =====
// Sobrescreve a função renderProducts do app.js original
function renderProducts() {
    // Renderizar cada categoria
    Object.keys(menuData).forEach(category => {
        const container = document.getElementById(category);
        if (!container) return;
        
        // Obter produtos da categoria
        let products = menuData[category];
        
        // Filtrar apenas produtos ativos (se Firebase estiver carregado)
        products = filtrarProdutosAtivos(products);
        
        // Se não houver produtos ativos, esconder a seção
        if (products.length === 0) {
            const section = container.closest('.menu-section');
            if (section) {
                section.style.display = 'none';
            }
            return;
        } else {
            const section = container.closest('.menu-section');
            if (section) {
                section.style.display = 'block';
            }
        }
        
        container.innerHTML = products.map(product => `
            <div class="product-card" onclick="openProductModal('${product.id}')">
                <img src="${product.image}" class="product-image" loading="lazy">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-footer">
                        <span class="product-price">${formatPrice(product.price)}</span>
                        <button class="btn-add" onclick="event.stopPropagation(); cart.addItem('${product.id}')" ${!window.scheduleSystem.isOpenNow() ? 'disabled' : ''}>
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    });
}

// ===== ATUALIZAÇÃO EM TEMPO REAL =====
// Ouvir mudanças no Firestore e atualizar automaticamente o cardápio
function iniciarAtualizacaoTempoReal() {
    if (typeof db === 'undefined') {
        console.warn('⚠️ Firebase não configurado - atualização em tempo real desativada');
        return;
    }

    // Listener para mudanças na coleção de produtos
    db.collection('produtos').onSnapshot((snapshot) => {
        console.log('🔄 Produtos atualizados no Firestore - recarregando cardápio...');
        
        // Recarregar produtos ativos
        carregarProdutosAtivos().then(() => {
            // Re-renderizar produtos
            renderProducts();
        });
    });
    
    console.log('👁️ Atualização em tempo real ativada');
}

// ===== INICIALIZAÇÃO COM FIREBASE =====
async function inicializarCardapioComFirebase() {
    console.log('🚀 Inicializando cardápio com Firebase...');
    
    // Carregar produtos ativos do Firebase
    await carregarProdutosAtivos();
    
    // Renderizar produtos
    renderProducts();
    
    // Iniciar atualização em tempo real
    iniciarAtualizacaoTempoReal();
    
    console.log('✅ Cardápio com Firebase inicializado!');
}

// ===== EXECUTAR NA INICIALIZAÇÃO =====
// Aguardar o DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Dar um pequeno delay para garantir que o Firebase foi inicializado
        setTimeout(inicializarCardapioComFirebase, 500);
    });
} else {
    setTimeout(inicializarCardapioComFirebase, 500);
}
