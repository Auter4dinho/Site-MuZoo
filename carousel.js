let currentSlide = 0;  // O índice da imagem atual
const slides = document.querySelectorAll('.carousel-item');  // Seleciona todas as imagens
const progressBar = document.querySelector('.progress');  // Seleciona a barra de progresso
const totalSlides = slides.length;
let interval;  // Para o intervalo de tempo do carrossel
const slideDuration = 5000;  // Tempo para cada slide (5 segundos)
let timeLeft = 0;  // Tempo restante para o próximo slide

// Função para atualizar a posição do slide
function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');  // Remove a classe 'active' de todos os slides
        if (index === currentSlide) {
            slide.classList.add('active');  // Adiciona a classe 'active' ao slide atual
        }
    });

    // Reseta a barra de progresso
    progressBar.style.width = '0%';
    timeLeft = 0;  // Reseta o tempo restante
}

// Função para ir para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;  // Vai para o próximo, e retorna para o início se chegar ao final
    updateSlidePosition();
    resetProgressBar();  // Reseta a barra de progresso a cada mudança de slide
}

// Função para ir para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Vai para o anterior, e retorna para o final se estiver no início
    updateSlidePosition();
    resetProgressBar();  // Reseta a barra de progresso a cada mudança de slide
}

// Função para reiniciar a barra de progresso
function resetProgressBar() {
    clearInterval(interval);  // Limpa o intervalo anterior
    progressBar.style.width = '0%';  // Reseta a barra de progresso
    timeLeft = 0;  // Reseta o tempo restante
    startProgressBar();  // Inicia o novo intervalo
}

// Função para atualizar a barra de progresso
function updateProgressBar() {
    timeLeft += 100;  // Aumenta o tempo restante (100 ms por vez)

    // Calcula a largura da barra com base no tempo acumulado
    const progress = (timeLeft / slideDuration) * 100;
    progressBar.style.width = progress + '%';

    // Quando o tempo atinge o limite (5 segundos), passa para o próximo slide
    if (timeLeft >= slideDuration) {
        nextSlide();
    }
}

// Função para iniciar a barra de progresso
function startProgressBar() {
    interval = setInterval(updateProgressBar, 100);  // Atualiza a barra a cada 100 ms
}

// Função para iniciar o carrossel automaticamente a cada 5 segundos
function startCarousel() {
    updateSlidePosition();  // Exibe o primeiro slide
    startProgressBar();  // Inicia a barra de progresso
    setInterval(nextSlide, slideDuration);  // Muda o slide a cada 5 segundos
}

// Chama a função para iniciar o carrossel quando a página for carregada
document.addEventListener('DOMContentLoaded', startCarousel);

// Funções para o pop-up de conscientização
const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');

// Abre o pop-up quando o botão for clicado
popupButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Fecha o pop-up quando o botão de fechar for clicado
function fecharPopup() {
    popup.style.display = 'none';
}

// Funções para resetar o intervalo quando os botões de navegação são clicados
document.querySelector('.carousel-control.next').addEventListener('click', function() {
    nextSlide();
    resetCarouselInterval();  // Reseta o intervalo
});

document.querySelector('.carousel-control.prev').addEventListener('click', function() {
    prevSlide();
    resetCarouselInterval();  // Reseta o intervalo
});

// Função para resetar o tempo do carrossel a cada navegação manual
function resetCarouselInterval() {
    clearInterval(interval);  // Limpa o intervalo anterior
    startProgressBar();  // Reinicia a barra de progresso
}
