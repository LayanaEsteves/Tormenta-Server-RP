// Seleciona a galeria e o modal
const galeria = document.getElementById("galeria");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

// Função para abrir o modal com a imagem clicada
function openModal(imgElement) {
  modal.style.display = "block";       // mostra o modal
  modalImg.src = imgElement.src;        // coloca a imagem correta
  document.body.classList.add("modal-open"); // bloqueia hover nas imagens
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = "none";             // esconde o modal
  document.body.classList.remove("modal-open"); // reativa hover
}

// Fecha modal ao clicar fora da imagem
modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    closeModal();
  }
});