// ========================================
// CONFIGURAÇÃO DO FIREBASE
// ========================================
// Este arquivo contém a configuração do Firebase Firestore
// para gerenciar o status ativo/inativo dos produtos do cardápio.
//
// INSTRUÇÕES DE USO:
// 1. Acesse o Firebase Console: https://console.firebase.google.com/
// 2. Crie um novo projeto ou selecione um existente
// 3. Ative o Firestore Database no seu projeto
// 4. Vá em Configurações do Projeto > Suas Apps > Adicionar App Web
// 5. Copie os dados de configuração e cole abaixo (DESCOMENTE AS LINHAS)
// 6. Configure as regras do Firestore para permitir leitura/escrita
//
// ESTRUTURA DO FIRESTORE:
// Coleção: "produtos"
// Documento ID: usar o mesmo ID do produto (ex: "pe-01", "es-01")
// Campos obrigatórios:
//   - nome: string
//   - preco: number
//   - ativo: boolean
//   - category: string (ex: "pratosExecutivos", "estrogonofes")
//   - description: string (opcional)
//   - image: string (opcional)
//   - images: array (opcional)
// ========================================

// ===== DESCOMENTE AS LINHAS ABAIXO E COLE SUAS CREDENCIAIS =====
/*
const firebaseConfig = {
    apiKey: "SUA_APIKEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};
*/

// ===== EXEMPLO DE CONFIGURAÇÃO (NÃO USE ESTES VALORES) =====
// const firebaseConfig = {
//     apiKey: "AIzaSyAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQq",
//     authDomain: "seu-projeto.firebaseapp.com",
//     projectId: "seu-projeto",
//     storageBucket: "seu-projeto.appspot.com",
//     messagingSenderId: "123456789012",
//     appId: "1:123456789012:web:abc123def456ghi789"
// };

// ===== INICIALIZAÇÃO DO FIREBASE =====
// Descomente após configurar suas credenciais

/*
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obter referência do Firestore
const db = firebase.firestore();

// Mensagem de sucesso
console.log('✅ Firebase inicializado com sucesso!');
*/

// ===== FUNÇÕES AUXILIARES =====

// Função para popular o Firestore com os dados iniciais do menuData
// Execute esta função UMA VEZ no console do navegador após configurar o Firebase
// para criar todos os produtos no Firestore


const firebaseConfig = {
  apiKey: "AIzaSyDK8uHud9vukHhSwayfdcpaCN2AUR4-ySg",
  authDomain: "painel-47b0e.firebaseapp.com",
  projectId: "painel-47b0e",
  storageBucket: "painel-47b0e.firebasestorage.app",
  messagingSenderId: "732719130916",
  appId: "1:732719130916:web:15b617ae946eb5a06dabb1"
};

async function popularFirestoreInicial() {
    if (typeof db === 'undefined') {
        console.error('❌ Firebase não está configurado. Configure o firebase.js primeiro.');
        return;
    }
    
    console.log('📦 Iniciando população do Firestore...');
    
    try {
        // Pegar todos os produtos do menuData
        const todasCategorias = Object.keys(menuData);
        let totalProdutos = 0;
        
        for (const categoria of todasCategorias) {
            const produtos = menuData[categoria];
            
            for (const produto of produtos) {
                // Criar documento no Firestore
                await db.collection('produtos').doc(produto.id).set({
                    nome: produto.name,
                    preco: produto.price,
                    ativo: true, // Todos começam ativos
                    category: produto.category,
                    description: produto.description || '',
                    image: produto.image || '',
                    images: produto.images || []
                });
                
                totalProdutos++;
                console.log(`✓ Produto ${produto.id} adicionado`);
            }
        }
        
        console.log(`✅ População concluída! ${totalProdutos} produtos adicionados.`);
        
    } catch (error) {
        console.error('❌ Erro ao popular Firestore:', error);
    }
}

// ===== REGRAS DO FIRESTORE (COPIE E COLE NO CONSOLE DO FIREBASE) =====
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /produtos/{produtoId} {
      // Permitir leitura para todos
      allow read: if true;
      
      // Permitir escrita para todos (em produção, adicione autenticação)
      allow write: if true;
    }
  }
}
*/

// ===== NOTAS IMPORTANTES =====
// 1. Este arquivo usa Firebase compat para funcionar sem build
// 2. Certifique-se de incluir os scripts do Firebase no HTML ANTES deste arquivo
// 3. Para produção, implemente autenticação adequada
// 4. Execute popularFirestoreInicial() apenas UMA VEZ após configurar
// 5. O painel admin (index2.html) usará estas configurações automaticamente
