// ========================================
// PAINEL ADMINISTRATIVO - DELIVERY GOURMET
// ========================================
// Sistema de gerenciamento de produtos do cardápio
// Permite ativar/desativar produtos que são sincronizados
// com o Firebase Firestore em tempo real
// ========================================

// Variável global para armazenar produtos
let produtosAdmin = [];

// ===== CARREGAR PRODUTOS DO FIREBASE =====
async function carregarProdutos() {
    // Verificar se Firebase está configurado
    if (typeof db === 'undefined') {
        console.error('❌ Firebase não configurado');
        mostrarErro('Firebase não está configurado. Configure o arquivo firebase.js primeiro.');
        return;
    }

    try {
        mostrarCarregando(true);
        
        // Buscar todos os produtos do Firestore
        const snapshot = await db.collection('produtos').get();
        
        produtosAdmin = [];
        snapshot.forEach((doc) => {
            produtosAdmin.push({
                id: doc.id,
                ...doc.data()
            });
        });

        // Ordenar produtos por categoria e nome
        const ordemCategorias = [
            'pratosExecutivos',
            'estrogonofes',
            'parmegianas',
            'outros',
            'panelinhas',
            'feijoada',
            'bebidas'
        ];

        produtosAdmin.sort((a, b) => {
            const indexA = ordemCategorias.indexOf(a.category);
            const indexB = ordemCategorias.indexOf(b.category);
            
            if (indexA !== indexB) {
                return indexA - indexB;
            }
            
            return a.nome.localeCompare(b.nome);
        });

        renderizarProdutos();
        atualizarEstatisticas();
        mostrarCarregando(false);
        
        console.log(`✅ ${produtosAdmin.length} produtos carregados`);
        
    } catch (error) {
        console.error('❌ Erro ao carregar produtos:', error);
        mostrarErro('Erro ao carregar produtos do Firebase: ' + error.message);
        mostrarCarregando(false);
    }
}

// ===== RENDERIZAR LISTA DE PRODUTOS =====
function renderizarProdutos() {
    const container = document.getElementById('produtosLista');
    
    if (produtosAdmin.length === 0) {
        container.innerHTML = `
            <div class="mensagem-vazia">
                <i class="fas fa-inbox"></i>
                <p>Nenhum produto encontrado</p>
                <small>Execute popularFirestoreInicial() no console para adicionar produtos</small>
            </div>
        `;
        return;
    }

    // Agrupar produtos por categoria
    const produtosPorCategoria = {};
    produtosAdmin.forEach(produto => {
        if (!produtosPorCategoria[produto.category]) {
            produtosPorCategoria[produto.category] = [];
        }
        produtosPorCategoria[produto.category].push(produto);
    });

    // Nomes das categorias em português
    const nomesCategorias = {
        'pratosExecutivos': '🍖 Pratos Executivos',
        'estrogonofes': '🍲 Estrogonofes',
        'parmegianas': '🧀 Parmegianas',
        'outros': '🍴 Outros',
        'panelinhas': '🥘 Panelinhas Individuais',
        'feijoada': '🫘 Kit Feijoada',
        'bebidas': '🥤 Bebidas'
    };

    let html = '';

    // Renderizar cada categoria
    const ordemCategorias = [
        'pratosExecutivos',
        'estrogonofes',
        'parmegianas',
        'outros',
        'panelinhas',
        'feijoada',
        'bebidas'
    ];

    ordemCategorias.forEach(categoria => {
        if (produtosPorCategoria[categoria]) {
            html += `
                <div class="categoria-secao">
                    <h3 class="categoria-titulo">${nomesCategorias[categoria] || categoria}</h3>
                    <div class="produtos-categoria">
            `;

            produtosPorCategoria[categoria].forEach(produto => {
                const ativo = produto.ativo !== false; // Default true se não existir
                
                html += `
                    <div class="produto-item ${!ativo ? 'inativo' : ''}">
                        <div class="produto-info">
                            <img src="${produto.image || 'https://via.placeholder.com/80'}" 
                                 alt="${produto.nome}" 
                                 class="produto-img">
                            <div class="produto-detalhes">
                                <h4 class="produto-nome">${produto.nome}</h4>
                                <p class="produto-desc">${produto.description || 'Sem descrição'}</p>
                                <span class="produto-preco">R$ ${produto.preco.toFixed(2)}</span>
                                <span class="produto-id">ID: ${produto.id}</span>
                            </div>
                        </div>
                        <div class="produto-acoes">
                            <label class="switch">
                                <input type="checkbox" 
                                       ${ativo ? 'checked' : ''} 
                                       onchange="toggleProduto('${produto.id}', this.checked)">
                                <span class="slider"></span>
                            </label>
                            <span class="status-badge ${ativo ? 'ativo' : 'inativo'}">
                                ${ativo ? '✓ Ativo' : '✕ Inativo'}
                            </span>
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = html;
}

// ===== TOGGLE STATUS DO PRODUTO =====
async function toggleProduto(produtoId, ativo) {
    // Verificar se Firebase está configurado
    if (typeof db === 'undefined') {
        alert('❌ Firebase não configurado');
        return;
    }

    try {
        // Atualizar no Firestore
        await db.collection('produtos').doc(produtoId).update({
            ativo: ativo
        });

        // Atualizar no array local
        const produto = produtosAdmin.find(p => p.id === produtoId);
        if (produto) {
            produto.ativo = ativo;
        }

        // Re-renderizar
        renderizarProdutos();
        atualizarEstatisticas();

        // Mostrar feedback
        mostrarToast(
            ativo ? '✓ Produto ativado com sucesso!' : '✓ Produto desativado com sucesso!',
            ativo ? 'success' : 'info'
        );

        console.log(`✅ Produto ${produtoId} ${ativo ? 'ativado' : 'desativado'}`);

    } catch (error) {
        console.error('❌ Erro ao atualizar produto:', error);
        alert('Erro ao atualizar produto: ' + error.message);
        
        // Reverter checkbox
        renderizarProdutos();
    }
}

// ===== ATUALIZAR ESTATÍSTICAS =====
function atualizarEstatisticas() {
    const total = produtosAdmin.length;
    const ativos = produtosAdmin.filter(p => p.ativo !== false).length;
    const inativos = total - ativos;

    document.getElementById('totalProdutos').textContent = total;
    document.getElementById('produtosAtivos').textContent = ativos;
    document.getElementById('produtosInativos').textContent = inativos;
}

// ===== BUSCAR PRODUTOS =====
function buscarProdutos() {
    const termo = document.getElementById('buscaProduto').value.toLowerCase();
    
    const produtosFiltrados = produtosAdmin.filter(produto => 
        produto.nome.toLowerCase().includes(termo) ||
        produto.description.toLowerCase().includes(termo) ||
        produto.id.toLowerCase().includes(termo)
    );

    // Temporariamente substituir array para renderização
    const produtosOriginais = [...produtosAdmin];
    produtosAdmin = produtosFiltrados;
    renderizarProdutos();
    produtosAdmin = produtosOriginais;
}

// ===== ATIVAR/DESATIVAR TODOS =====
async function toggleTodos(ativar) {
    if (!confirm(`Deseja realmente ${ativar ? 'ATIVAR' : 'DESATIVAR'} TODOS os produtos?`)) {
        return;
    }

    if (typeof db === 'undefined') {
        alert('❌ Firebase não configurado');
        return;
    }

    try {
        mostrarCarregando(true);
        
        // Atualizar todos os produtos
        const batch = db.batch();
        
        produtosAdmin.forEach(produto => {
            const ref = db.collection('produtos').doc(produto.id);
            batch.update(ref, { ativo: ativar });
        });

        await batch.commit();

        // Atualizar localmente
        produtosAdmin.forEach(produto => {
            produto.ativo = ativar;
        });

        renderizarProdutos();
        atualizarEstatisticas();
        mostrarCarregando(false);

        mostrarToast(
            `✓ Todos os produtos foram ${ativar ? 'ativados' : 'desativados'}!`,
            ativar ? 'success' : 'info'
        );

    } catch (error) {
        console.error('❌ Erro ao atualizar produtos:', error);
        alert('Erro ao atualizar produtos: ' + error.message);
        mostrarCarregando(false);
    }
}

// ===== MOSTRAR LOADING =====
function mostrarCarregando(mostrar) {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = mostrar ? 'flex' : 'none';
    }
}

// ===== MOSTRAR ERRO =====
function mostrarErro(mensagem) {
    const container = document.getElementById('produtosLista');
    container.innerHTML = `
        <div class="mensagem-erro">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Erro</h3>
            <p>${mensagem}</p>
        </div>
    `;
}

// ===== MOSTRAR TOAST =====
function mostrarToast(mensagem, tipo = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensagem;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// ===== SAIR DO PAINEL =====
function sairPainel() {
    if (confirm('Deseja realmente sair do painel administrativo?')) {
        window.location.href = 'index.html';
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔧 Painel Administrativo iniciado');
    
    // Carregar produtos
    carregarProdutos();
    
    // Event listener para busca
    const inputBusca = document.getElementById('buscaProduto');
    if (inputBusca) {
        inputBusca.addEventListener('input', buscarProdutos);
    }
});

// ===== ATUALIZAÇÃO EM TEMPO REAL =====
// Ouvir mudanças no Firestore e atualizar automaticamente
if (typeof db !== 'undefined') {
    db.collection('produtos').onSnapshot((snapshot) => {
        console.log('🔄 Dados atualizados no Firestore');
        carregarProdutos();
    });
}
