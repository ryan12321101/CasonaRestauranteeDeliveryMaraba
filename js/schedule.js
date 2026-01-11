// Sistema de Horário de Funcionamento Automático

// Definição dos horários de funcionamento
const businessHours = {
    1: { open: '09:00', close: '18:00', isOpen: true },  // Segunda
    2: { open: '09:00', close: '18:00', isOpen: true },  // Terça
    3: { open: '09:00', close: '18:00', isOpen: true },  // Quarta
    4: { open: '09:00', close: '18:00', isOpen: true },  // Quinta
    5: { open: '09:00', close: '18:00', isOpen: true },  // Sexta
    6: { open: '09:00', close: '23:00', isOpen: true },       // Sábado (Fechado)
    0: { open: null, close: null, isOpen: false }        // Domingo (Fechado)
};

// Função para converter horário em minutos
function timeToMinutes(timeString) {
    if (!timeString) return null;
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
}

// Função para verificar se está aberto agora
function isOpenNow() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const todaySchedule = businessHours[currentDay];
    
    // Se não abre hoje, está fechado
    if (!todaySchedule.isOpen) {
        return false;
    }
    
    const openMinutes = timeToMinutes(todaySchedule.open);
    const closeMinutes = timeToMinutes(todaySchedule.close);
    
    // Verifica se está dentro do horário
    return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

// Função para obter mensagem de próximo horário
function getNextOpenMessage() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const todaySchedule = businessHours[currentDay];
    
    // Se abre hoje mas ainda não é hora
    if (todaySchedule.isOpen) {
        const openMinutes = timeToMinutes(todaySchedule.open);
        if (currentMinutes < openMinutes) {
            return `● Abre às ${todaySchedule.open}`;
        }
    }
    
    // Busca próximo dia útil
    let nextDay = (currentDay + 1) % 7;
    let daysUntilOpen = 1;
    
    while (!businessHours[nextDay].isOpen && daysUntilOpen < 7) {
        nextDay = (nextDay + 1) % 7;
        daysUntilOpen++;
    }
    
    if (businessHours[nextDay].isOpen) {
        const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        return `● Abre ${dayNames[nextDay]} às ${businessHours[nextDay].open}`;
    }
    
    return '● Confira nosso horário';
}

// Função para atualizar o status visual
function updateStatusDisplay() {
    const isOpen = isOpenNow();
    const statusElement = document.getElementById('status');
    const statusDot = statusElement.querySelector('.status-dot');
    const statusText = statusElement.querySelector('.status-text');
    const closedBanner = document.getElementById('closedBanner');
    const nextOpenBanner = document.getElementById('nextOpenBanner');
    const nextOpenText = document.getElementById('nextOpenText');
    const mainContent = document.getElementById('mainContent');
    const cartButton = document.getElementById('cartButton');
    
    if (isOpen) {
        // ABERTO
        statusDot.textContent = '🟢';
        statusText.textContent = 'ABERTO';
        statusElement.style.background = 'rgba(46, 204, 113, 0.3)';
        closedBanner.classList.remove('active');
        nextOpenBanner.classList.remove('active');
        mainContent.classList.remove('disabled');
        cartButton.disabled = false;
        
        // Habilitar todos os botões de adicionar
        document.querySelectorAll('.btn-add').forEach(btn => {
            btn.disabled = false;
        });
    } else {
        // FECHADO
        statusDot.textContent = '🔴';
        statusText.textContent = 'FECHADO';
        statusElement.style.background = 'rgba(230, 57, 70, 0.3)';
        closedBanner.classList.add('active');
        
        // Mostrar próximo horário
        const nextMessage = getNextOpenMessage();
        if (nextMessage.includes('Abre às')) {
            nextOpenText.textContent = nextMessage;
            nextOpenBanner.classList.add('active');
        } else {
            nextOpenBanner.classList.remove('active');
        }
        
        mainContent.classList.add('disabled');
        cartButton.disabled = true;
        
        // Desabilitar todos os botões de adicionar
        document.querySelectorAll('.btn-add').forEach(btn => {
            btn.disabled = true;
        });
    }
}

// Função para inicializar o sistema de horário
function initScheduleSystem() {
    updateStatusDisplay();
    
    // Atualizar a cada minuto
    setInterval(updateStatusDisplay, 60000);
    
    // Modal de horários
    const clockBtn = document.getElementById('clockBtn');
    const scheduleModal = document.getElementById('scheduleModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    
    clockBtn.addEventListener('click', () => {
        scheduleModal.classList.add('active');
    });
    
    modalOverlay.addEventListener('click', () => {
        scheduleModal.classList.remove('active');
    });
    
    modalClose.addEventListener('click', () => {
        scheduleModal.classList.remove('active');
    });
}

// Exportar funções
window.scheduleSystem = {
    isOpenNow,
    getNextOpenMessage,
    updateStatusDisplay,
    initScheduleSystem
};
