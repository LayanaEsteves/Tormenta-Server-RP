const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Função para atualizar as classes
function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('prev', 'active', 'next');

    if(index === currentIndex) {
      item.classList.add('active');
    } else if(index === (currentIndex - 1 + items.length) % items.length) {
      item.classList.add('prev');
    } else if(index === (currentIndex + 1) % items.length) {
      item.classList.add('next');
    }
  });
}

// Inicializa
updateCarousel();

// Clicar nas imagens laterais
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});