# 🍽️ Delivery Gourmet - Sistema Completo de Delivery Online

<div align="center">

![Status](https://img.shields.io/badge/Status-Concluído-success)
![Version](https://img.shields.io/badge/Versão-1.0.0-blue)
![Responsive](https://img.shields.io/badge/Responsivo-Mobile%20First-orange)
![License](https://img.shields.io/badge/Licença-MIT-green)

**Sistema de delivery profissional, moderno e totalmente funcional inspirado no iFood**

[Ver Demo](#) | [Reportar Bug](#) | [Solicitar Feature](#)

</div>

---

## 🚀 Início Rápido

> **Primeira vez aqui?** Leia o **[LEIA-ME-PRIMEIRO.md](LEIA-ME-PRIMEIRO.md)** para começar rapidamente!

### Teste em 30 segundos:
```bash
# 1. Abra o terminal na pasta do projeto
python3 -m http.server 8000

# 2. Abra no navegador: http://localhost:8000
```

**Ou simplesmente:** Clique duas vezes em `index.html`

### Documentação Disponível:
- 📘 **[LEIA-ME-PRIMEIRO.md](LEIA-ME-PRIMEIRO.md)** - Comece por aqui!
- 📖 **[README.md](README.md)** - Documentação completa (você está aqui)
- ⚡ **[GUIA-RAPIDO.md](GUIA-RAPIDO.md)** - Tutorial rápido de uso
- 🌐 **[INSTALACAO.md](INSTALACAO.md)** - Guia de instalação e deploy
- 📋 **[config-exemplo.txt](config-exemplo.txt)** - Template de configuração
- 📝 **[CHANGELOG.md](CHANGELOG.md)** - Histórico de versões

---

## 📋 Sobre o Projeto

O **Delivery Gourmet** é um site de delivery completo e profissional, desenvolvido com foco em experiência do usuário, design minimalista e funcionalidades reais de pedidos. O sistema oferece uma experiência comparável a aplicativos como iFood, totalmente responsivo e otimizado para dispositivos móveis.

### ✨ Destaques

- 🎨 Design minimalista e elegante (paleta vermelho, preto e branco)
- 📱 100% responsivo - Mobile First
- ⏰ Sistema automático de horário de funcionamento
- 🛒 Carrinho de compras inteligente com localStorage
- 💳 Pagamento via Pix com QR Code
- 💵 Pagamento em dinheiro
- 📞 Integração completa com WhatsApp
- 🔒 Bloqueio automático quando fechado
- 🖼️ Imagens ilustrativas profissionais
- ⚡ Performance otimizada

---

## 🚀 Funcionalidades Completas

### 1. Sistema de Horário Automático ⏰

O site verifica automaticamente o dia da semana e horário atual para determinar se está aberto ou fechado.

**Horários de Funcionamento:**
- **Segunda a Sexta:** 09:00 - 18:00 ✅
- **Sábado:** Fechado ❌
- **Domingo:** Fechado ❌

**Comportamentos:**
- 🟢 **ABERTO:** Todas as funcionalidades liberadas
- 🔴 **FECHADO:** Site bloqueado, botões desabilitados
- ⏰ **Antes do horário:** Mostra "Abre às 09:00"
- 📅 **Modal de horários:** Clique no ícone do relógio para ver a tabela completa

### 2. Cardápio Completo 🍽️

#### Pratos Executivos
Acompanhamentos: Arroz branco, batata frita, feijão, farofa, salada ou vinagrete.

| Prato | Preço |
|-------|-------|
| Bife a Cavalo | R$ 24,00 |
| Bife Acebolado | R$ 20,00 |
| Frango Grelhado | R$ 18,00 |
| Chapa Mista (Calabresa, Frango, Carne) | R$ 22,00 |
| Picanha Grelhada | R$ 30,00 |
| Filé Mignon Grelhado | R$ 26,00 |
| Bisteca Suína | R$ 19,00 |
| Peixe Grelhado | R$ 30,00 |

#### Estrogonofes
| Prato | Preço |
|-------|-------|
| Estrogonofe de Frango | R$ 20,00 |
| Estrogonofe de Filé Mignon | R$ 25,00 |

#### Parmegianas
| Prato | Preço |
|-------|-------|
| Parmegiana de Carne | R$ 25,00 |
| Parmegiana de Frango | R$ 21,00 |

#### Outros
Acompanhamentos: Arroz branco, batata, salada ou vinagrete.

| Prato | Preço |
|-------|-------|
| Almôndegas de Carne Recheada | R$ 20,00 |

#### Panelinhas Individuais
| Prato | Preço |
|-------|-------|
| Panelinha de Frango | R$ 25,00 |
| Panelinha de Filé Mignon | R$ 30,00 |
| Panelinha de Camarão | R$ 35,00 |

#### Kit Feijoada
Acompanhamentos: Arroz branco, farofa com bacon, couve crua, laranja em rodelas e torresmo.

| Porção | Preço |
|--------|-------|
| Serve 1 pessoa | R$ 25,00 |
| Serve 2 pessoas | R$ 45,00 |

#### Bebidas
| Produto | Preço |
|---------|-------|
| Coca-Cola Lata (350ml) | R$ 5,00 |
| Coca-Cola 600ml | R$ 7,00 |
| Coca-Cola 1L | R$ 9,00 |
| Coca-Cola 2L | R$ 13,00 |
| Suco Del Valle Laranja (450ml) | R$ 6,00 |
| Suco Del Valle Uva (450ml) | R$ 6,00 |

### 3. Carrinho de Compras 🛒

- ➕ Adicionar produtos ao carrinho
- ➖ Remover produtos do carrinho
- 🔢 Controle de quantidade (+/-)
- 💾 Persistência com localStorage
- 🔄 Atualização automática de valores
- 🎯 Carrinho flutuante sempre visível
- 📊 Exibição de subtotal e total
- ⚠️ Aviso sobre taxa de entrega

### 4. Finalização do Pedido 📋

**Passo 1: Dados do Cliente**
- Nome completo
- Endereço completo
- Telefone / WhatsApp (com máscara automática)

**Passo 2: Escolha da Forma de Pagamento**
- 💵 **Dinheiro**
- 🔑 **Pix**

### 5. Pagamento em Dinheiro 💵

1. Gera mensagem automática com:
   - Lista de produtos e quantidades
   - Valor total
   - Dados do cliente
   - Forma de pagamento: Dinheiro
2. Redireciona automaticamente para WhatsApp
3. Mensagem pronta para enviar

### 6. Pagamento via Pix 🔑

1. **Chave Pix (CPF):** 084.375.262-99
2. Gera QR Code com valor exato do pedido
3. Instruções claras de pagamento
4. Botão para copiar chave Pix
5. Após confirmação, envia dados para WhatsApp

### 7. Integração WhatsApp 📞

**Número:** (94) 99151-4909

**Mensagem automática inclui:**
- 👤 Dados do cliente
- 📋 Lista completa de itens
- 💰 Valor total
- 💳 Forma de pagamento
- ⚠️ Nota sobre taxa de entrega

---

## 🎨 Design e Interface

### Paleta de Cores

```css
--primary-red: #E63946;    /* Vermelho principal */
--dark-black: #1A1A1A;     /* Preto para textos */
--pure-white: #FFFFFF;     /* Branco puro */
--light-gray: #F8F9FA;     /* Fundo claro */
--border-gray: #E0E0E0;    /* Bordas */
--text-gray: #666666;      /* Textos secundários */
--success-green: #2ECC71;  /* Status aberto */
```

### Tipografia

- **Fonte Principal:** Inter (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700, 800
- **Sistema:** Sans-serif, limpa e moderna

### Layout Responsivo

- **Mobile:** 3 produtos por fileira
- **Tablet:** 3 produtos por fileira
- **Desktop:** 4 produtos por fileira

### Componentes

- Cards de produtos estilo iFood
- Modais elegantes com overlay blur
- Botões com animações suaves
- Carrinho flutuante fixo
- Badges de notificação
- Toasts de feedback

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna e responsiva
- **JavaScript (ES6+)** - Lógica e interatividade

### Bibliotecas e CDN
- **Inter Font** - Tipografia (Google Fonts)
- **Font Awesome 6.4.0** - Ícones
- **QRCode.js 1.0.0** - Geração de QR Code Pix

### Recursos
- **localStorage** - Persistência do carrinho
- **Unsplash** - Imagens ilustrativas profissionais
- **WhatsApp API** - Integração de mensagens

---

## 📁 Estrutura de Arquivos

```
delivery-gourmet/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos completos
├── js/
│   ├── data.js            # Base de dados do cardápio
│   ├── schedule.js        # Sistema de horário automático
│   ├── cart.js            # Sistema de carrinho
│   ├── checkout.js        # Sistema de checkout e pagamento
│   └── app.js             # Aplicação principal
└── README.md              # Documentação
```

---

## 🚀 Como Usar

### Instalação Local

1. **Clone ou baixe o projeto**
```bash
git clone https://github.com/seu-usuario/delivery-gourmet.git
cd delivery-gourmet
```

2. **Abra o arquivo index.html**
```bash
# Opção 1: Abrir diretamente no navegador
open index.html

# Opção 2: Usar um servidor local
python -m http.server 8000
# Acesse: http://localhost:8000

# Opção 3: Usar Live Server (VS Code)
# Clique com botão direito em index.html > Open with Live Server
```

### Personalização

#### 1. Alterar Horários de Funcionamento

Edite o arquivo `js/schedule.js`:

```javascript
const businessHours = {
    1: { open: '09:00', close: '18:00', isOpen: true },  // Segunda
    2: { open: '09:00', close: '18:00', isOpen: true },  // Terça
    // ... adicione seus horários
};
```

#### 2. Alterar WhatsApp

Edite o arquivo `js/checkout.js`:

```javascript
this.whatsappNumber = '5594991514909'; // Seu número
```

#### 3. Alterar Chave Pix

Edite o arquivo `js/checkout.js`:

```javascript
this.pixKey = '084.375.262-99'; // Sua chave
```

#### 4. Adicionar/Remover Produtos

Edite o arquivo `js/data.js`:

```javascript
const menuData = {
    pratosExecutivos: [
        {
            id: 'pe-01',
            name: 'Nome do Prato',
            description: 'Descrição',
            price: 25.00,
            image: 'url-da-imagem',
            category: 'pratosExecutivos'
        }
    ]
};
```

#### 5. Personalizar Cores

Edite o arquivo `css/style.css`:

```css
:root {
    --primary-red: #E63946;    /* Sua cor principal */
    --dark-black: #1A1A1A;     /* Sua cor secundária */
    /* ... */
}
```

---

## 🔧 Funcionalidades Técnicas

### Sistema de Horário
- Verificação em tempo real
- Atualização automática a cada minuto
- Bloqueio completo quando fechado
- Mensagens dinâmicas de próximo horário

### Carrinho de Compras
- Persistência com localStorage
- Sincronização em tempo real
- Controle de quantidade inteligente
- Validações de negócio

### Checkout
- Validação de formulários
- Máscara de telefone automática
- Geração de QR Code Pix dinâmico
- Mensagens formatadas para WhatsApp

### Performance
- Lazy loading de imagens
- Animações otimizadas com CSS
- Código JavaScript modular
- Minificação automática de recursos

---

## 📱 Recursos Mobile

- ✅ Touch gestures otimizados
- ✅ Viewport configurado corretamente
- ✅ Imagens responsivas
- ✅ Formulários mobile-friendly
- ✅ Botões com área de toque adequada
- ✅ Scroll suave
- ✅ Header sticky
- ✅ Carrinho flutuante acessível

---

## 🐛 Debug e Testes

O sistema inclui utilitários de debug no console:

```javascript
// No console do navegador
deliveryDebug.isOpen()        // Verifica se está aberto
deliveryDebug.cartItems()     // Ver itens no carrinho
deliveryDebug.cartTotal()     // Ver total do carrinho
deliveryDebug.clearCart()     // Limpar carrinho
deliveryDebug.forceOpen()     // Forçar status aberto (testes)
```

---

## 📊 Status do Projeto

### ✅ Funcionalidades Implementadas

- [x] Estrutura HTML completa
- [x] Design responsivo mobile-first
- [x] Sistema de horário automático
- [x] Cardápio completo com imagens
- [x] Carrinho de compras funcional
- [x] Checkout com formulário
- [x] Pagamento via Pix com QR Code
- [x] Pagamento em dinheiro
- [x] Integração WhatsApp
- [x] Validações e bloqueios
- [x] Animações e transições
- [x] localStorage para persistência

### 🎯 Próximas Melhorias (Sugestões)

- [ ] Sistema de cupons de desconto
- [ ] Histórico de pedidos
- [ ] Sistema de avaliações
- [ ] Chat ao vivo
- [ ] Notificações push (PWA)
- [ ] Rastreamento de entrega
- [ ] Programa de fidelidade
- [ ] Modo escuro (dark mode)
- [ ] Multi-idiomas
- [ ] Busca de produtos

---

## 📞 Informações de Contato

**Delivery Gourmet**
- 📱 WhatsApp: (94) 99151-4909
- 🔑 Chave Pix (CPF): 084.375.262-99
- ⏰ Horário: Segunda a Sexta, 09:00 - 18:00

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 💖 Mensagem

> "Seu pedido é preparado com carinho e entregue com segurança ❤️"

---

<div align="center">

**Desenvolvido com ❤️ para oferecer a melhor experiência em delivery online**

⭐ Gostou do projeto? Deixe uma estrela!

</div>
