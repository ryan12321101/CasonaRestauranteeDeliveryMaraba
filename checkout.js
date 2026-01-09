// Sistema de Checkout e Pagamento

class CheckoutManager {
    constructor() {
        // Modals
        this.checkoutModal = document.getElementById('checkoutModal');
        this.checkoutOverlay = document.getElementById('checkoutModalOverlay');
        this.checkoutClose = document.getElementById('checkoutModalClose');
        
        this.paymentModal = document.getElementById('paymentModal');
        this.paymentOverlay = document.getElementById('paymentModalOverlay');
        this.paymentClose = document.getElementById('paymentModalClose');
        
        this.pixModal = document.getElementById('pixModal');
        this.pixOverlay = document.getElementById('pixModalOverlay');
        this.pixClose = document.getElementById('pixModalClose');
        
        // Form
        this.checkoutForm = document.getElementById('checkoutForm');
        
        // Dados do cliente
        this.customerData = null;
        
        // WhatsApp
        this.whatsappNumber = '5594991514909';
        this.pixKey = '084.375.262-99';
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        // Fechar modals
        this.checkoutOverlay.addEventListener('click', () => this.closeCheckout());
        this.checkoutClose.addEventListener('click', () => this.closeCheckout());
        
        this.paymentOverlay.addEventListener('click', () => this.closePayment());
        this.paymentClose.addEventListener('click', () => this.closePayment());
        
        this.pixOverlay.addEventListener('click', () => this.closePix());
        this.pixClose.addEventListener('click', () => this.closePix());
        
        // Form submit
        this.checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleCheckoutSubmit();
        });
        
        // Opções de pagamento
        document.getElementById('paymentCash').addEventListener('click', () => {
            this.handleCashPayment();
        });
        
        document.getElementById('paymentPix').addEventListener('click', () => {
            this.handlePixPayment();
        });
        
        // Copiar chave Pix
        document.getElementById('copyPixKey').addEventListener('click', () => {
            this.copyPixKey();
        });
        
        // Confirmar pagamento Pix
        document.getElementById('confirmPixPayment').addEventListener('click', () => {
            this.confirmPixPayment();
        });
        
        // Máscara de telefone
        document.getElementById('customerPhone').addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
        });
    }
    
    openCheckout() {
        this.checkoutModal.classList.add('active');
    }
    
    closeCheckout() {
        this.checkoutModal.classList.remove('active');
        this.checkoutForm.reset();
    }
    
    openPayment() {
        this.paymentModal.classList.add('active');
    }
    
    closePayment() {
        this.paymentModal.classList.remove('active');
    }
    
    openPix() {
        this.pixModal.classList.add('active');
    }
    
    closePix() {
        this.pixModal.classList.remove('active');
    }
    
    handleCheckoutSubmit() {
        // Coletar dados do formulário
        this.customerData = {
            name: document.getElementById('customerName').value,
            address: document.getElementById('customerAddress').value,
            phone: document.getElementById('customerPhone').value
        };
        
        // Validar dados
        if (!this.customerData.name || !this.customerData.address || !this.customerData.phone) {
            alert('❌ Por favor, preencha todos os campos!');
            return;
        }
        
        // Fechar modal de checkout e abrir modal de pagamento
        this.closeCheckout();
        this.openPayment();
    }
    
    handleCashPayment() {
        // Gerar mensagem para WhatsApp
        const message = this.generateWhatsAppMessage('Dinheiro');
        
        // Redirecionar para WhatsApp
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // Limpar carrinho e fechar modals
        this.finishOrder();
    }
    
    handlePixPayment() {
        this.closePayment();
        
        // Gerar QR Code
        const total = cart.getTotal();
        this.generatePixQRCode(total);
        
        // Atualizar valor
        document.getElementById('pixValue').textContent = formatPrice(total);
        
        this.openPix();
    }
    
    generatePixQRCode(amount) {
        const qrcodeContainer = document.getElementById('pixQRCode');
        qrcodeContainer.innerHTML = ''; // Limpar QR Code anterior
        
        // Criar payload Pix
        const pixPayload = this.generatePixPayload(amount);
        
        // Gerar QR Code
        new QRCode(qrcodeContainer, {
            text: pixPayload,
            width: 256,
            height: 256,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.M
        });
    }
    
    generatePixPayload(amount) {
        // Formato simplificado de payload Pix
        // Em produção, deve-se usar um gerador de payload Pix completo
        const pixKey = this.pixKey.replace(/\D/g, '');
        const amountFormatted = amount.toFixed(2);
        
        // Payload simplificado (para demonstração)
        return `00020126360014br.gov.bcb.pix0114${pixKey}520400005303986540${amountFormatted.length}${amountFormatted}5802BR5925Delivery Gourmet6009SAO PAULO62070503***6304`;
    }
    
    copyPixKey() {
        const pixKey = this.pixKey;
        
        // Copiar para clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(pixKey).then(() => {
                const btn = document.getElementById('copyPixKey');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                btn.style.background = '#2ECC71';
                
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = '';
                }, 2000);
            });
        } else {
            // Fallback para navegadores antigos
            const textArea = document.createElement('textarea');
            textArea.value = pixKey;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('✅ Chave Pix copiada!');
        }
    }
    
    confirmPixPayment() {
        // Gerar mensagem para WhatsApp
        const message = this.generateWhatsAppMessage('Pix');
        
        // Redirecionar para WhatsApp
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // Limpar carrinho e fechar modals
        this.finishOrder();
    }
    
    generateWhatsAppMessage(paymentMethod) {
        const items = cart.getItems();
        const total = cart.getTotal();
        
        let message = '🛒 *NOVO PEDIDO - DELIVERY GOURMET*\n\n';
        
        // Dados do cliente
        message += '👤 *DADOS DO CLIENTE*\n';
        message += `Nome: ${this.customerData.name}\n`;
        message += `Endereço: ${this.customerData.address}\n`;
        message += `Telefone: ${this.customerData.phone}\n\n`;
        
        // Itens do pedido
        message += '📋 *ITENS DO PEDIDO*\n';
        items.forEach(item => {
            message += `${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`;
        });
        
        message += '\n';
        
        // Total
        message += `💰 *SUBTOTAL:* ${formatPrice(total)}\n`;
        message += `⚠️ *Taxa de entrega a consultar*\n\n`;
        
        // Forma de pagamento
        message += `💳 *FORMA DE PAGAMENTO:* ${paymentMethod}\n`;
        
        if (paymentMethod === 'Pix') {
            message += `🔑 Chave Pix: ${this.pixKey}\n`;
            message += `✅ Aguardando confirmação do pagamento\n`;
        }
        
        message += '\n';
        message += '🍽️ _Pedido enviado via site Delivery Gourmet_';
        
        return message;
    }
    
    finishOrder() {
        // Limpar carrinho
        cart.clearCart();
        
        // Fechar todos os modals
        this.closeCheckout();
        this.closePayment();
        this.closePix();
        
        // Mostrar mensagem de sucesso
        this.showSuccessMessage();
        
        // Limpar dados do cliente
        this.customerData = null;
    }
    
    showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            z-index: 9999;
            text-align: center;
            max-width: 400px;
            animation: fadeIn 0.3s ease;
        `;
        
        successDiv.innerHTML = `
            <div style="font-size: 4rem; margin-bottom: 16px;">✅</div>
            <h2 style="margin-bottom: 12px; color: #2ECC71;">Pedido Enviado!</h2>
            <p style="color: #666; margin-bottom: 20px;">
                Seu pedido foi enviado para o WhatsApp. 
                Em breve entraremos em contato para confirmar!
            </p>
            <button onclick="this.parentElement.remove()" style="
                background: #E63946;
                color: white;
                border: none;
                padding: 12px 32px;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                font-size: 1rem;
            ">Fechar</button>
        `;
        
        // Criar overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 9998;
            animation: fadeIn 0.3s ease;
        `;
        
        overlay.addEventListener('click', () => {
            successDiv.remove();
            overlay.remove();
        });
        
        document.body.appendChild(overlay);
        document.body.appendChild(successDiv);
        
        // Remover automaticamente após 5 segundos
        setTimeout(() => {
            if (successDiv.parentElement) {
                successDiv.remove();
                overlay.remove();
            }
        }, 5000);
    }
}

// Instância global
const checkoutManager = new CheckoutManager();
window.checkoutManager = checkoutManager;
