# 🔥 INSTRUÇÕES DE CONFIGURAÇÃO DO FIREBASE

## 📋 O que foi adicionado?

Este projeto agora possui um **Painel Administrativo** que permite ativar/desativar produtos do cardápio usando Firebase Firestore como banco de dados.

### Novos Arquivos:
- ✅ **index2.html** - Painel administrativo (protegido por senha)
- ✅ **firebase.js** - Configuração do Firebase (comentada)
- ✅ **js/admin.js** - Lógica do painel administrativo
- ✅ **js/app-firebase.js** - Integração do Firebase com o cardápio público

### Arquivos Modificados:
- ✅ **index.html** - Adicionados scripts do Firebase e integração

---

## 🚀 PASSO A PASSO PARA CONFIGURAÇÃO

### 1️⃣ Criar Projeto no Firebase

1. Acesse: https://console.firebase.google.com/
2. Clique em **"Adicionar projeto"**
3. Dê um nome ao projeto (ex: "delivery-gourmet")
4. Desative Google Analytics (opcional)
5. Clique em **"Criar projeto"**

### 2️⃣ Ativar o Firestore Database

1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Escolha **"Modo de produção"** ou **"Modo de teste"**
4. Escolha a localização (ex: "southamerica-east1" para São Paulo)
5. Clique em **"Ativar"**

### 3️⃣ Configurar Regras do Firestore

1. Na aba **"Regras"** do Firestore, cole o seguinte código:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /produtos/{produtoId} {
      // Permitir leitura para todos (cardápio público)
      allow read: if true;
      
      // Permitir escrita para todos (em produção, adicione autenticação)
      allow write: if true;
    }
  }
}
```

2. Clique em **"Publicar"**

⚠️ **IMPORTANTE**: Estas regras permitem escrita para todos. Em produção, implemente autenticação adequada!

### 4️⃣ Obter Credenciais do Firebase

1. No menu lateral, clique no ícone de **engrenagem ⚙️** > **"Configurações do projeto"**
2. Role até **"Seus apps"**
3. Clique no ícone **</>** (Web)
4. Registre o app com um apelido (ex: "cardapio-web")
5. **NÃO marque** "Firebase Hosting"
6. Clique em **"Registrar app"**
7. Copie o objeto `firebaseConfig` que aparece

### 5️⃣ Configurar o arquivo firebase.js

1. Abra o arquivo **firebase.js** na raiz do projeto
2. Localize a seção com as linhas comentadas:

```javascript
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
```

3. **DESCOMENTE** e **SUBSTITUA** pelos seus dados reais:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQq",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456ghi789"
};
```

4. Localize e **DESCOMENTE** a seção de inicialização:

```javascript
/*
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obter referência do Firestore
const db = firebase.firestore();

// Mensagem de sucesso
console.log('✅ Firebase inicializado com sucesso!');
*/
```

5. Salve o arquivo

### 6️⃣ Popular o Firestore com os Produtos

1. Abra o arquivo **index.html** no navegador
2. Abra o **Console do Desenvolvedor** (F12)
3. Digite e execute o seguinte comando:

```javascript
popularFirestoreInicial()
```

4. Aguarde a mensagem de sucesso
5. Verifique no Firebase Console se os produtos foram criados

---

## 🎯 COMO USAR O PAINEL ADMINISTRATIVO

### Acessar o Painel

**Opção 1: Ícone Secreto**
- No cardápio público (index.html), role até o final da página
- Clique no ícone 🍔 no rodapé
- Uma nova aba será aberta com o painel admin

**Opção 2: URL Direta**
- Acesse diretamente: `index2.html`

### Login no Painel

- **Senha padrão**: `1234`
- Digite a senha e clique em "Entrar no Painel"

⚠️ **IMPORTANTE**: Esta é uma senha fixa em JavaScript (não segura). Para produção, use Firebase Authentication!

### Funcionalidades do Painel

✅ **Visualizar Estatísticas**
- Total de produtos
- Produtos ativos
- Produtos inativos

✅ **Buscar Produtos**
- Busque por nome, descrição ou ID

✅ **Ativar/Desativar Produtos**
- Use o switch ao lado de cada produto
- Mudanças são salvas automaticamente no Firebase

✅ **Ações em Massa**
- Botão "Ativar Todos"
- Botão "Desativar Todos"

✅ **Atualização em Tempo Real**
- O cardápio público é atualizado automaticamente
- Não é necessário recarregar a página

---

## 🔄 FUNCIONAMENTO DO SISTEMA

### Estrutura do Firestore

**Coleção**: `produtos`

**Documento** (ID = ID do produto, ex: "pe-01"):
```json
{
  "nome": "Bife a Cavalo",
  "preco": 24.00,
  "ativo": true,
  "category": "pratosExecutivos",
  "description": "Bife suculento com ovo frito...",
  "image": "https://...",
  "images": ["https://...", "https://..."]
}
```

### Categorias (em ordem):
1. `pratosExecutivos` - 🍖 Pratos Executivos
2. `estrogonofes` - 🍲 Estrogonofes
3. `parmegianas` - 🧀 Parmegianas
4. `outros` - 🍴 Outros
5. `panelinhas` - 🥘 Panelinhas Individuais
6. `feijoada` - 🫘 Kit Feijoada
7. `bebidas` - 🥤 Bebidas

### Comportamento:
- **Produto ativo (`ativo: true`)**: Aparece no cardápio público
- **Produto inativo (`ativo: false`)**: NÃO aparece no cardápio público
- **Sem Firebase configurado**: Todos os produtos aparecem (fallback)

---

## 🐛 SOLUÇÃO DE PROBLEMAS

### ❌ "Firebase não está configurado"
- Verifique se descomentou as linhas no `firebase.js`
- Verifique se os dados estão corretos
- Abra o Console (F12) e veja se há erros

### ❌ "Erro ao carregar produtos do Firebase"
- Verifique se o Firestore está ativado no projeto
- Verifique as regras do Firestore
- Execute `popularFirestoreInicial()` no console

### ❌ Produtos não aparecem no cardápio
- Verifique se os produtos estão marcados como `ativo: true` no Firestore
- Abra o Console do navegador e veja os logs
- Verifique se o Firebase foi inicializado corretamente

### ❌ Senha não funciona no painel admin
- A senha padrão é `1234`
- Para alterar, edite `index2.html` e procure por `SENHA_ADMIN`

---

## 🔒 SEGURANÇA EM PRODUÇÃO

⚠️ **ATENÇÃO**: Esta implementação é para desenvolvimento/demonstração!

Para usar em produção, você DEVE:

1. **Implementar Firebase Authentication**
   - Proteger o acesso ao painel admin
   - Usar autenticação por email/senha ou Google

2. **Atualizar Regras do Firestore**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /produtos/{produtoId} {
      // Leitura pública
      allow read: if true;
      
      // Escrita apenas para usuários autenticados
      allow write: if request.auth != null;
    }
  }
}
```

3. **Remover senha hardcoded**
   - Não usar senha fixa no JavaScript
   - Usar sistema de autenticação adequado

4. **HTTPS obrigatório**
   - Hospedar em HTTPS (Firebase Hosting, Netlify, etc)

---

## 📝 COMANDOS ÚTEIS NO CONSOLE

```javascript
// Popular Firestore com produtos iniciais (execute UMA VEZ)
popularFirestoreInicial()

// Ver produtos ativos no Firebase
produtosAtivosFirebase

// Ver todos os produtos do cardápio
menuData

// Forçar recarregar produtos
carregarProdutosAtivos().then(() => renderProducts())
```

---

## 📞 SUPORTE

Se tiver dúvidas:
1. Verifique o Console do navegador (F12) para erros
2. Verifique o Firebase Console para ver os dados
3. Leia a documentação do Firebase: https://firebase.google.com/docs/firestore

---

## ✅ CHECKLIST DE CONFIGURAÇÃO

- [ ] Projeto Firebase criado
- [ ] Firestore Database ativado
- [ ] Regras do Firestore configuradas
- [ ] Credenciais copiadas e coladas no `firebase.js`
- [ ] Linhas descomentadas no `firebase.js`
- [ ] Executado `popularFirestoreInicial()` no console
- [ ] Produtos aparecem no Firebase Console
- [ ] Testado acesso ao painel admin (index2.html)
- [ ] Testado ativar/desativar produto
- [ ] Verificado que produto desaparece do cardápio público

---

🎉 **Pronto! Seu sistema de cardápio dinâmico com Firebase está funcionando!**
