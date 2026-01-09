# 📖 Guia Rápido - Delivery Gourmet

## 🚀 Como Usar o Site

### Para Clientes

1. **Acesse o site** - Abra o index.html no navegador
2. **Verifique o status** - 🟢 ABERTO ou 🔴 FECHADO
3. **Navegue pelo cardápio** - Veja todos os pratos disponíveis
4. **Adicione ao carrinho** - Clique no botão ➕ nos produtos
5. **Abra o carrinho** - Clique no ícone flutuante 🛒
6. **Ajuste quantidades** - Use ➕ e ➖ para controlar
7. **Finalize o pedido** - Clique em "Finalizar Pedido"
8. **Preencha seus dados** - Nome, endereço e telefone
9. **Escolha o pagamento** - 💵 Dinheiro ou 🔑 Pix
10. **Confirme pelo WhatsApp** - Envie a mensagem gerada

### Horário de Funcionamento

- **Segunda a Sexta:** 09:00 - 18:00
- **Sábado:** Fechado
- **Domingo:** Fechado

Clique no ícone ⏰ para ver a tabela completa.

---

## ⚙️ Para Administradores

### Personalizar Informações

#### 1. Mudar Número do WhatsApp

Arquivo: `js/checkout.js` (linha 18)

```javascript
this.whatsappNumber = '5594991514909'; // Altere aqui
```

#### 2. Mudar Chave Pix

Arquivo: `js/checkout.js` (linha 19)

```javascript
this.pixKey = '084.375.262-99'; // Altere aqui
```

#### 3. Mudar Horários

Arquivo: `js/schedule.js` (linhas 4-11)

```javascript
const businessHours = {
    1: { open: '09:00', close: '18:00', isOpen: true },  // Segunda
    2: { open: '09:00', close: '18:00', isOpen: true },  // Terça
    3: { open: '09:00', close: '18:00', isOpen: true },  // Quarta
    4: { open: '09:00', close: '18:00', isOpen: true },  // Quinta
    5: { open: '09:00', close: '18:00', isOpen: true },  // Sexta
    6: { open: null, close: null, isOpen: false },       // Sábado
    0: { open: null, close: null, isOpen: false }        // Domingo
};
```

#### 4. Adicionar Produtos

Arquivo: `js/data.js`

```javascript
const menuData = {
    pratosExecutivos: [
        {
            id: 'pe-01',               // ID único
            name: 'Nome do Prato',      // Nome
            description: 'Descrição',   // Descrição
            price: 24.00,               // Preço
            image: 'url-imagem',        // URL da imagem
            category: 'pratosExecutivos' // Categoria
        }
        // Adicione mais produtos...
    ]
};
```

#### 5. Mudar Cores

Arquivo: `css/style.css` (linhas 9-18)

```css
:root {
    --primary-red: #E63946;      /* Cor principal */
    --dark-black: #1A1A1A;       /* Cor escura */
    --pure-white: #FFFFFF;       /* Branco */
    --light-gray: #F8F9FA;       /* Cinza claro */
    /* ... outras cores ... */
}
```

#### 6. Mudar Nome do Delivery

Arquivo: `index.html` (linha 18)

```html
<h1 class="logo">🍽️ Delivery Gourmet</h1>
```

E no arquivo: `index.html` (linha 6)

```html
<title>Delivery Gourmet - Comida de Qualidade</title>
```

---

## 🧪 Testes e Debug

### Console do Navegador

Abra o console (F12) e use:

```javascript
// Verificar se está aberto
deliveryDebug.isOpen()

// Ver itens no carrinho
deliveryDebug.cartItems()

// Ver total do carrinho
deliveryDebug.cartTotal()

// Limpar carrinho
deliveryDebug.clearCart()

// Forçar status ABERTO (apenas testes)
deliveryDebug.forceOpen()
```

### Limpar Dados do LocalStorage

Para resetar completamente o carrinho:

```javascript
localStorage.clear()
location.reload()
```

---

## 📱 Testando no Mobile

### Método 1: Navegador Desktop
1. Abra o DevTools (F12)
2. Clique no ícone de dispositivo móvel (Ctrl+Shift+M)
3. Escolha um dispositivo (iPhone, Android, etc.)
4. Teste a responsividade

### Método 2: Servidor Local
1. Instale Python (se não tiver)
2. No terminal, navegue até a pasta do projeto
3. Execute: `python -m http.server 8000`
4. No celular, acesse: `http://seu-ip:8000`

### Método 3: Ngrok (Público Temporário)
1. Instale Ngrok: https://ngrok.com/
2. Execute: `ngrok http 8000`
3. Use a URL fornecida no celular

---

## 🔧 Solução de Problemas

### Problema: QR Code não aparece
**Solução:** Certifique-se de que a biblioteca QRCode.js está carregando:
```html
<script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
```

### Problema: Carrinho não salva
**Solução:** Verifique se o localStorage está habilitado no navegador.

### Problema: WhatsApp não abre
**Solução:** Verifique o número no formato correto: `55DDNUMBER` (com código do país).

### Problema: Site sempre mostra FECHADO
**Solução:** Verifique:
1. O horário do computador está correto?
2. Os horários em `schedule.js` estão corretos?
3. Use `deliveryDebug.forceOpen()` para testar

### Problema: Imagens não carregam
**Solução:** Verifique a conexão com internet (imagens vêm do Unsplash).

---

## 🚀 Deploy (Publicar Online)

### Opção 1: GitHub Pages (Grátis)
1. Crie uma conta no GitHub
2. Crie um repositório público
3. Faça upload dos arquivos
4. Vá em Settings > Pages
5. Escolha a branch `main` e salve
6. Seu site estará em: `https://seu-usuario.github.io/nome-repo`

### Opção 2: Netlify (Grátis)
1. Acesse https://netlify.com
2. Arraste a pasta do projeto
3. Pronto! Site publicado

### Opção 3: Vercel (Grátis)
1. Acesse https://vercel.com
2. Importe do GitHub ou arraste a pasta
3. Deploy automático

---

## 📞 Suporte

Se tiver dúvidas ou problemas:

1. Leia o README.md completo
2. Verifique este guia rápido
3. Use o console de debug
4. Entre em contato pelo WhatsApp: (94) 99151-4909

---

## 📝 Checklist de Implementação

Antes de publicar, verifique:

- [ ] WhatsApp configurado corretamente
- [ ] Chave Pix configurada
- [ ] Horários de funcionamento ajustados
- [ ] Produtos do cardápio verificados
- [ ] Preços atualizados
- [ ] Imagens carregando corretamente
- [ ] Teste em mobile
- [ ] Teste de pedido completo
- [ ] Mensagem WhatsApp formatada corretamente
- [ ] QR Code Pix funcionando

---

## 🎉 Pronto para Usar!

Seu site de delivery está 100% funcional e pronto para receber pedidos!

**Boa sorte com seu delivery! 🍽️❤️**
