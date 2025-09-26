// Armazena a página atual de cada livro
let currentPage = {
    book1: 1,
    book2: 1,
    book3: 1
};

// Número total de páginas de cada livro
const totalPages = {
    book1: 3, // agora só tem páginas (sem capa)
    book2: 3,
    book3: 3
};

// Função para abrir o livro clicado
function openBook(bookId) {
    // Esconde todos os livros
    const allBooks = document.querySelectorAll('.book-container');
    allBooks.forEach(book => book.style.display = 'none');

    // Mostra o livro clicado
    const book = document.getElementById(bookId);
    book.style.display = 'block';

    // Começa na página 1
    currentPage[bookId] = 1;
    updateBookContent(bookId);
}

// Função para fechar o livro
function closeBook(bookId) {
    const book = document.getElementById(bookId);
    book.style.display = 'none';
}

// Atualiza a página visível do livro
function updateBookContent(bookId) {
    for (let i = 1; i <= totalPages[bookId]; i++) {
        const page = document.getElementById(`${bookId}-page${i}`);
        if (page) {
            page.style.display = i === currentPage[bookId] ? 'flex' : 'none';
        }
    }

    const container = document.getElementById(bookId);
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');

    if (prevBtn) prevBtn.style.display = currentPage[bookId] === 1 ? 'none' : 'block';
    if (nextBtn) nextBtn.style.display = currentPage[bookId] === totalPages[bookId] ? 'none' : 'block';
}

// Função para avançar página
function nextPage(bookId) {
    if (currentPage[bookId] < totalPages[bookId]) {
        currentPage[bookId]++;
        updateBookContent(bookId);
    }
}

// Função para voltar página
function prevPage(bookId) {
    if (currentPage[bookId] > 1) {
        currentPage[bookId]--;
        updateBookContent(bookId);
    }
}

// Inicializa todos os livros escondidos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const allBooks = document.querySelectorAll('.book-container');
    allBooks.forEach(book => book.style.display = 'none');
});