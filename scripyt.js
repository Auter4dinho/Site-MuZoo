// Lista de animais (facilita a adição de novos itens)
const animais = [
    { imagem: "Imagens/jaguatirica.jpg", nome: "Jaguatirica", descricao: "Um felino incrível da Mata Atlântica." },
    { imagem: "Imagens/arara_caninde.png", nome: "Arara Canindé", descricao: "Uma das aves mais coloridas do Brasil." },
    { imagem: "Imagens/tucano_açu.png", nome: "Tucano-açu", descricao: "Conhecido por seu bico impressionante." },
    { imagem: "Imagens/capivara.png", nome: "Capivara", descricao: "O maior roedor do mundo." },
    { imagem: "Imagens/beijaflortesoura.png", nome: "Beija-flor tesoura", descricao: "Um dos menores e mais ágeis pássaros." },
    { imagem: "Imagens/sapo-cururu.png", nome: "Sapo Cururu", descricao: "Conhecido por seu canto característico." },
    { imagem: "Imagens/quati.png", nome: "Quati", descricao: "Um mamífero curioso e ágil." },
    { imagem: "Imagens/urubupreto.png", nome: "Urubu Preto", descricao: "Um importante limpador da natureza." },
    { imagem: "Imagens/urutu.png", nome: "Urutu", descricao: "Uma serpente venenosa da Mata Atlântica." },
    { imagem: "Imagens/Bem-te-vi.png", nome: "Bem-te-vi", descricao: "Um pássaro conhecido por seu canto." },
    { imagem: "Imagens/tamanduá-b.jpg", nome: "Tamanduá-bandeira", descricao: "Um mamífero especializado em comer formigas." },
    { imagem: "Imagens/tilapia.jpeg", nome: "Tilápia do Nilo", descricao: "Um peixe amplamente cultivado." },
    { imagem: "Imagens/coral.png", nome: "Cobra Coral", descricao: "Uma serpente venenosa e colorida." },
    { imagem: "Imagens/jacare.png", nome: "Jacaré", descricao: "Um réptil comum em áreas alagadas." },
    { imagem: "Imagens/teiu.jpg", nome: "Teiú", descricao: "Um lagarto grande e robusto." }
];

// Variáveis globais
let currentSlide = 0;
const intervalTime = 3000; // Tempo entre os slides (3 segundos)
let autoCarousel;

// Função para gerar os slides dinamicamente
function criarSlides() {
    const carouselInner = document.getElementById('carousel-inner');
    animais.forEach((animal, index) => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-item');
        if (index === 0) slide.classList.add('active'); // Primeiro slide ativo
        slide.innerHTML = `
            <img src="${animal.imagem}" alt="${animal.nome}">
            <div class="carousel-caption">
                <p>${animal.nome} - ${animal.descricao}</p>
            </div>
        `;
        carouselInner.appendChild(slide);
    });
}

// Função para mostrar um slide específico
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % animais.length;
    showSlide(currentSlide);
    resetProgressBar();
}

// Função para voltar ao slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + animais.length) % animais.length;
    showSlide(currentSlide);
    resetProgressBar();
}

// Função para animar a barra de progresso
function animateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.transition = `width ${intervalTime}ms linear`;
    progressBar.style.width = '100%';
}

// Função para reiniciar a barra de progresso
function resetProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    setTimeout(() => {
        progressBar.style.transition = `width ${intervalTime}ms linear`;
        animateProgressBar();
    }, 10);
}

// Iniciar o carrossel automático
function iniciarCarrossel() {
    autoCarousel = setInterval(nextSlide, intervalTime);
    animateProgressBar();
}

// Parar o carrossel automático ao passar o mouse sobre ele
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoCarousel);
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.transition = 'none';
});

// Retomar o carrossel automático ao retirar o mouse
carousel.addEventListener('mouseleave', () => {
    iniciarCarrossel();
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    criarSlides();
    iniciarCarrossel();
});