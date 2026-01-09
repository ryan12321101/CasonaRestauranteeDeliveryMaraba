# 🚀 Guia de Instalação - Delivery Gourmet

## 📦 Requisitos

- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)
- **Editor de texto** (VS Code, Sublime, Notepad++, etc.)
- **Conexão com internet** (para CDN e imagens)

### Opcional (para desenvolvimento):
- **Python 3.x** (para servidor local)
- **Node.js** (para ferramentas de desenvolvimento)
- **Git** (para controle de versão)

---

## 💻 Instalação Local (Testando no Computador)

### Método 1: Abrir Diretamente (Mais Simples)

1. **Baixe o projeto** (se ainda não tiver)
   ```
   - Extraia o arquivo ZIP
   - Ou clone o repositório: git clone [url]
   ```

2. **Navegue até a pasta do projeto**
   ```
   cd delivery-gourmet
   ```

3. **Abra o arquivo `index.html`**
   - **Windows:** Clique duas vezes em `index.html`
   - **Mac:** Clique duas vezes em `index.html`
   - **Linux:** Clique duas vezes ou use: `xdg-open index.html`

4. **Pronto!** 🎉 O site abrirá no seu navegador padrão

> ⚠️ **Nota:** Alguns recursos podem não funcionar corretamente com o método `file://`. Para melhor experiência, use um servidor local (Método 2 ou 3).

---

### Método 2: Servidor Python (Recomendado)

1. **Verifique se tem Python instalado**
   ```bash
   python --version
   # ou
   python3 --version
   ```

2. **Se não tiver Python, instale:**
   - **Windows:** https://www.python.org/downloads/
   - **Mac:** Geralmente já vem instalado
   - **Linux:** 
     ```bash
     sudo apt install python3  # Ubuntu/Debian
     sudo yum install python3  # CentOS/RHEL
     ```

3. **Navegue até a pasta do projeto**
   ```bash
   cd caminho/para/delivery-gourmet
   ```

4. **Inicie o servidor**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # ou Python 2
   python -m SimpleHTTPServer 8000
   ```

5. **Abra no navegador**
   ```
   http://localhost:8000
   ```

6. **Para parar o servidor**
   ```
   Pressione Ctrl+C no terminal
   ```

---

### Método 3: VS Code Live Server (Mais Fácil)

1. **Instale o VS Code**
   - https://code.visualstudio.com/

2. **Instale a extensão Live Server**
   - Abra VS Code
   - Vá em Extensions (Ctrl+Shift+X)
   - Busque por "Live Server"
   - Clique em Install

3. **Abra o projeto no VS Code**
   ```bash
   code .
   ```

4. **Inicie o Live Server**
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server"
   - Ou clique em "Go Live" na barra inferior

5. **Pronto!** O site abre automaticamente e atualiza ao salvar alterações

---

## 📱 Testando no Celular (Mesma Rede WiFi)

### Passo 1: Descobrir o IP do Computador

**Windows:**
```bash
ipconfig
# Procure por "Endereço IPv4" (ex: 192.168.1.100)
```

**Mac/Linux:**
```bash
ifconfig
# ou
ip addr show
# Procure por "inet" (ex: 192.168.1.100)
```

### Passo 2: Iniciar Servidor Local

Use um dos métodos acima (Python ou Live Server)

### Passo 3: Acessar no Celular

No navegador do celular, digite:
```
http://192.168.1.100:8000
```
*(substitua pelo seu IP)*

---

## 🌐 Publicando Online (Deploy)

### Opção 1: GitHub Pages (Grátis) ⭐ Recomendado

1. **Crie uma conta no GitHub**
   - https://github.com/signup

2. **Crie um novo repositório**
   - Clique em "New repository"
   - Nome: `delivery-gourmet` (ou qualquer nome)
   - Marque "Public"
   - Clique em "Create repository"

3. **Faça upload dos arquivos**
   
   **Opção A: Interface Web**
   - Clique em "uploading an existing file"
   - Arraste todos os arquivos e pastas
   - Commit changes

   **Opção B: Git (Terminal)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/delivery-gourmet.git
   git push -u origin main
   ```

4. **Ativar GitHub Pages**
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Save

5. **Acessar o site**
   ```
   https://seu-usuario.github.io/delivery-gourmet
   ```
   *(aguarde 2-5 minutos para propagar)*

---

### Opção 2: Netlify (Grátis) ⭐ Mais Fácil

1. **Acesse https://netlify.com**

2. **Faça cadastro/login**

3. **Deploy o site**
   
   **Opção A: Drag & Drop**
   - Arraste a pasta do projeto para a área de deploy
   - Pronto!

   **Opção B: GitHub**
   - Clique em "Add new site" > "Import an existing project"
   - Conecte com GitHub
   - Escolha o repositório
   - Deploy

4. **Personalizar domínio (opcional)**
   - Site settings > Domain management
   - Adicione um domínio personalizado

5. **Acessar o site**
   ```
   https://seu-site.netlify.app
   ```

---

### Opção 3: Vercel (Grátis)

1. **Acesse https://vercel.com**

2. **Faça cadastro/login**

3. **Import projeto**
   - New Project
   - Import Git Repository (ou arraste a pasta)
   - Deploy

4. **Acessar o site**
   ```
   https://seu-site.vercel.app
   ```

---

### Opção 4: Hospedagem Tradicional

Para hospedar em servidor próprio (cPanel, FTP, etc.):

1. **Acesse o painel de controle**

2. **Localize o File Manager ou FTP**

3. **Faça upload dos arquivos**
   - Pasta `public_html` ou `www`
   - Mantenha a estrutura de pastas

4. **Acesse pelo domínio**
   ```
   https://seudominio.com.br
   ```

---

## ⚙️ Configuração Pós-Instalação

### 1. Personalizar Informações

Edite os seguintes arquivos:

**js/checkout.js** - WhatsApp e Pix
```javascript
this.whatsappNumber = '5594991514909';  // Seu número
this.pixKey = '084.375.262-99';         // Sua chave
```

**js/schedule.js** - Horários
```javascript
const businessHours = {
    1: { open: '09:00', close: '18:00', isOpen: true },
    // ... seus horários
};
```

**js/data.js** - Produtos
```javascript
const menuData = {
    // ... seus produtos
};
```

### 2. Testar Funcionalidades

- [ ] Adicionar produtos ao carrinho
- [ ] Remover produtos do carrinho
- [ ] Ajustar quantidades
- [ ] Preencher formulário de checkout
- [ ] Testar pagamento Pix (QR Code)
- [ ] Testar pagamento em dinheiro
- [ ] Verificar integração WhatsApp
- [ ] Testar em mobile
- [ ] Verificar horário de funcionamento

### 3. Otimizações Finais

- [ ] Adicionar logo personalizado
- [ ] Trocar imagens dos produtos
- [ ] Ajustar cores (se desejar)
- [ ] Adicionar favicon personalizado
- [ ] Configurar meta tags SEO
- [ ] Testar performance (Lighthouse)

---

## 🆘 Solução de Problemas

### Problema: "Cannot access local file"

**Causa:** Restrições de segurança do navegador

**Solução:** Use um servidor local (Método 2 ou 3)

---

### Problema: Imagens não carregam

**Causa:** Sem conexão com internet

**Solução:** Certifique-se de estar conectado (imagens vêm do Unsplash)

---

### Problema: QR Code não aparece

**Causa:** Biblioteca não carregou

**Solução:** 
1. Verifique conexão com internet
2. Verifique o console (F12) para erros
3. Certifique-se que o CDN está acessível

---

### Problema: Carrinho não salva

**Causa:** localStorage desabilitado

**Solução:**
1. Habilite cookies/localStorage no navegador
2. Não use modo anônimo/privado

---

### Problema: WhatsApp não abre

**Causa:** Número incorreto

**Solução:** 
1. Verifique o formato: `55DDNUMBER`
2. Teste no console: `window.open('https://wa.me/5594991514909')`

---

## 📞 Suporte

Se ainda tiver problemas:

1. ✅ Leia o **README.md**
2. ✅ Consulte o **GUIA-RAPIDO.md**
3. ✅ Verifique o **config-exemplo.txt**
4. ✅ Use o console de debug (F12)
5. ✅ Entre em contato: (94) 99151-4909

---

## ✅ Checklist de Instalação Completa

- [ ] Arquivos baixados/extraídos
- [ ] Projeto abrindo no navegador
- [ ] Servidor local funcionando (se aplicável)
- [ ] WhatsApp configurado
- [ ] Chave Pix configurada
- [ ] Horários ajustados
- [ ] Produtos do cardápio revisados
- [ ] Testes realizados
- [ ] Site publicado online (se desejado)
- [ ] Mobile testado
- [ ] Backup realizado

---

## 🎉 Pronto!

Seu Delivery Gourmet está instalado e funcionando!

**Próximos passos:**
1. Personalize as informações
2. Teste todas as funcionalidades
3. Publique online
4. Comece a receber pedidos! 🚀

---

**Boa sorte com seu delivery! 🍽️❤️**
