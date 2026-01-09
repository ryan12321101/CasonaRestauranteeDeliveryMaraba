# 👋 BEM-VINDO AO DELIVERY GOURMET!

<div align="center">

# 🍽️ **DELIVERY GOURMET**
### Sistema Completo de Delivery Online

[![Status](https://img.shields.io/badge/Status-✅_Pronto-success?style=for-the-badge)]()
[![Versão](https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge)]()
[![Mobile](https://img.shields.io/badge/Mobile-Responsivo-orange?style=for-the-badge)]()

</div>

---

## 🎯 O QUE É ESTE PROJETO?

Este é um **site de delivery completo e profissional**, pronto para uso, com todas as funcionalidades necessárias para receber pedidos online, similar ao iFood.

### ✨ Funcionalidades Principais:

✅ **Sistema Automático de Horário** - Abre e fecha sozinho  
✅ **Carrinho de Compras Inteligente** - Salva os itens automaticamente  
✅ **Pagamento via Pix** - Com QR Code gerado automaticamente  
✅ **Pagamento em Dinheiro** - Opção tradicional  
✅ **Integração WhatsApp** - Pedidos enviados direto para seu número  
✅ **100% Responsivo** - Funciona perfeitamente em celulares  
✅ **Design Profissional** - Visual moderno e confiável  

---

## 🚀 COMEÇANDO AGORA!

### 📖 Guia de 3 Passos:

#### **PASSO 1:** Entenda o Projeto
- 📄 Leia o **[README.md](README.md)** - Documentação completa
- ⚡ Veja o **[GUIA-RAPIDO.md](GUIA-RAPIDO.md)** - Tutorial rápido

#### **PASSO 2:** Configure suas Informações
- 🔧 Use o **[config-exemplo.txt](config-exemplo.txt)** - Template de configuração
- 📝 Edite os arquivos indicados no guia

#### **PASSO 3:** Publique Online
- 🌐 Siga o **[INSTALACAO.md](INSTALACAO.md)** - Guia de instalação e deploy

---

## 📁 ESTRUTURA DO PROJETO

```
delivery-gourmet/
│
├── 📄 index.html                    # Página principal do site
│
├── 📁 css/
│   └── style.css                    # Todos os estilos
│
├── 📁 js/
│   ├── data.js                      # Cardápio e produtos
│   ├── schedule.js                  # Sistema de horário
│   ├── cart.js                      # Carrinho de compras
│   ├── checkout.js                  # Sistema de pagamento
│   └── app.js                       # Aplicação principal
│
└── 📚 Documentação/
    ├── README.md                    # Documentação completa
    ├── GUIA-RAPIDO.md              # Tutorial rápido
    ├── INSTALACAO.md               # Guia de instalação
    ├── CHANGELOG.md                # Histórico de versões
    └── config-exemplo.txt          # Template de configuração
```

---

## ⚡ TESTE RÁPIDO (2 minutos)

### Método Mais Rápido:

1. **Clique duas vezes** em `index.html`
2. O site abre no navegador
3. Explore as funcionalidades! 🎉

### Método Recomendado (com servidor local):

```bash
# 1. Abra o terminal na pasta do projeto
# 2. Execute:
python3 -m http.server 8000

# 3. Abra no navegador:
http://localhost:8000
```

---

## 🔧 O QUE PRECISO PERSONALIZAR?

### ⚠️ OBRIGATÓRIO (antes de usar):

1. **Número do WhatsApp**
   - Arquivo: `js/checkout.js` (linha 18)
   - Formato: `5594991514909` (código do país + DDD + número)

2. **Chave Pix**
   - Arquivo: `js/checkout.js` (linha 19)
   - Formato: CPF, Email, Telefone ou Chave Aleatória

3. **Horários de Funcionamento**
   - Arquivo: `js/schedule.js` (linhas 4-11)
   - Configure seus dias e horários

### 🎨 OPCIONAL (se quiser):

4. **Produtos do Cardápio**
   - Arquivo: `js/data.js`
   - Adicione, remova ou edite produtos

5. **Cores do Site**
   - Arquivo: `css/style.css` (linhas 9-18)
   - Personalize a paleta de cores

6. **Nome do Delivery**
   - Arquivo: `index.html` (linha 18)
   - Troque "Delivery Gourmet" pelo seu nome

---

## 📱 FUNCIONA NO CELULAR?

**SIM!** Este site foi desenvolvido com foco em dispositivos móveis (Mobile First).

### Como testar no celular:

1. **Mesma rede WiFi:**
   - Siga as instruções em [INSTALACAO.md](INSTALACAO.md)
   - Seção "Testando no Celular"

2. **Online:**
   - Publique em GitHub Pages, Netlify ou Vercel
   - Acesse de qualquer lugar!

---

## 🎨 VISUAL DO SITE

### Paleta de Cores:
- 🔴 **Vermelho Principal:** #E63946
- ⚫ **Preto:** #1A1A1A  
- ⚪ **Branco:** #FFFFFF
- 🟦 **Cinza Claro:** #F8F9FA

### Características:
- Design minimalista e elegante
- Cards de produtos estilo iFood
- Animações suaves
- Interface intuitiva
- Visual profissional

---

## 💳 COMO FUNCIONA O PAGAMENTO?

### Opção 1: Pix 🔑
1. Cliente finaliza o pedido
2. Sistema gera QR Code automaticamente
3. Cliente paga via Pix
4. Pedido é enviado para seu WhatsApp

### Opção 2: Dinheiro 💵
1. Cliente finaliza o pedido
2. Escolhe "Pagamento em Dinheiro"
3. Pedido é enviado para seu WhatsApp
4. Pagamento na entrega

---

## 📞 COMO RECEBO OS PEDIDOS?

Todos os pedidos são enviados **automaticamente** para o seu WhatsApp com:

✅ Nome do cliente  
✅ Endereço completo  
✅ Telefone  
✅ Lista de produtos  
✅ Quantidades  
✅ Valor total  
✅ Forma de pagamento  

**É só confirmar e preparar o pedido!**

---

## ⏰ HORÁRIO AUTOMÁTICO - COMO FUNCIONA?

O sistema verifica **automaticamente** dia e hora:

- 🟢 **ABERTO:** Site funciona normalmente
- 🔴 **FECHADO:** Site trava, botões desabilitados
- ⏰ **Próximo horário:** Mostra quando abre

**Configuração atual:**
- Segunda a Sexta: 09:00 - 18:00
- Sábado e Domingo: Fechado

*(Você pode alterar em `js/schedule.js`)*

---

## 🛒 CARRINHO DE COMPRAS

- Adicionar/remover produtos
- Ajustar quantidades
- Cálculo automático de valores
- Salva automaticamente (localStorage)
- Carrinho flutuante sempre visível

---

## 🆘 PRECISO DE AJUDA?

### Consulte a Documentação:

1. 📖 **[README.md](README.md)**
   - Documentação técnica completa
   - Todas as funcionalidades detalhadas

2. ⚡ **[GUIA-RAPIDO.md](GUIA-RAPIDO.md)**
   - Tutorial prático
   - Como usar cada função

3. 🌐 **[INSTALACAO.md](INSTALACAO.md)**
   - Como instalar
   - Como publicar online
   - Solução de problemas

4. 📋 **[config-exemplo.txt](config-exemplo.txt)**
   - Template de configuração
   - Checklist completo

5. 📝 **[CHANGELOG.md](CHANGELOG.md)**
   - Histórico de versões
   - O que há de novo

### Debug no Console:

Pressione **F12** no navegador e use:

```javascript
deliveryDebug.isOpen()        // Verifica se está aberto
deliveryDebug.cartItems()     // Ver carrinho
deliveryDebug.cartTotal()     // Ver total
deliveryDebug.clearCart()     // Limpar carrinho
deliveryDebug.forceOpen()     // Forçar aberto (teste)
```

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] ✏️ WhatsApp configurado
- [ ] ✏️ Chave Pix configurada
- [ ] ✏️ Horários ajustados
- [ ] ✏️ Produtos do cardápio verificados
- [ ] ✏️ Preços atualizados
- [ ] 🧪 Teste de adicionar ao carrinho
- [ ] 🧪 Teste de finalização
- [ ] 🧪 Teste de Pix (QR Code)
- [ ] 🧪 Teste de WhatsApp
- [ ] 📱 Teste no celular
- [ ] 🌐 Site publicado online
- [ ] 💾 Backup dos arquivos

---

## 🎉 ESTÁ PRONTO PARA USAR!

Este site está **100% funcional** e pronto para receber pedidos reais!

### Próximos Passos:

1. ✅ **Configure** suas informações
2. ✅ **Teste** todas as funcionalidades  
3. ✅ **Publique** online
4. ✅ **Comece** a receber pedidos!

---

## 📞 INFORMAÇÕES DE CONTATO

**Delivery Gourmet**
- 📱 WhatsApp: (94) 99151-4909
- 🔑 Pix: 084.375.262-99
- ⏰ Horário: Segunda a Sexta, 09:00 - 18:00

---

## 📄 LICENÇA

Este projeto está sob a licença MIT.  
Você pode usar, modificar e distribuir livremente.

---

<div align="center">

## 💖 MENSAGEM FINAL

**"Seu pedido é preparado com carinho e entregue com segurança ❤️"**

---

### 🌟 Gostou do projeto?

**Compartilhe com outros donos de delivery!**

---

**Desenvolvido com ❤️ para revolucionar seu delivery**

🍽️ **BOA SORTE COM SEU NEGÓCIO!** 🚀

</div>
