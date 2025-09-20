// Armazena a página atual de cada livro
let currentPage = {
    book1: 0,
    book2: 0,
    book3: 0
};

// Número total de páginas de cada livro (incluindo capa)
const totalPages = {
    book1: 4, // capa + 3 páginas
    book2: 4,
    book3: 4
};

// Função para abrir o livro clicado
function openBook(bookId) {
    // Esconde todos os livros
    const allBooks = document.querySelectorAll('.book-container');
    allBooks.forEach(book => book.style.display = 'none');

    // Mostra o livro clicado
    const book = document.getElementById(bookId);
    book.style.display = 'block';

    // Começa na capa
    currentPage[bookId] = 0;
    updateBookContent(bookId);
}

// Função para fechar o livro
function closeBook(bookId) {
    const book = document.getElementById(bookId);
    book.style.display = 'none';
}

// Atualiza a página visível do livro
function updateBookContent(bookId) {
    for (let i = 0; i < totalPages[bookId]; i++) {
        const page = document.getElementById(`${bookId}-page${i}`);
        page.style.display = i === currentPage[bookId] ? 'flex' : 'none';
    }

    const container = document.getElementById(bookId);
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');

    if(prevBtn) prevBtn.style.display = currentPage[bookId] === 0 ? 'none' : 'block';
    if(nextBtn) nextBtn.style.display = currentPage[bookId] === totalPages[bookId] - 1 ? 'none' : 'block';
}


// Função para avançar página
function nextPage(bookId) {
    if (currentPage[bookId] < totalPages[bookId] - 1) {
        currentPage[bookId]++;
        updateBookContent(bookId);
    }
}

// Função para voltar página
function prevPage(bookId) {
    if (currentPage[bookId] > 0) {
        currentPage[bookId]--;
        updateBookContent(bookId);
    }
}

// Inicializa todos os livros escondidos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const allBooks = document.querySelectorAll('.book-container');
    allBooks.forEach(book => book.style.display = 'none');
});