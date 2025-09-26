// Seleciona todos os botões de abrir
const botoesAbrir = document.querySelectorAll('.btn-abrir-profissao');
// Seleciona todos os modais
const modais = document.querySelectorAll('.card-conteudo2');

botoesAbrir.forEach((btn, index) => {
  const modal = modais[index]; // pega o modal correspondente
  const btnFechar = modal.querySelector('.btn-fechar-profissao');

  // Abrir modal ao clicar no botão
  btn.addEventListener('click', () => {
    modal.classList.add('ativo');
    document.body.classList.add('no-scroll'); // trava o scroll
  });

  // Fechar modal ao clicar no botão X
  btnFechar.addEventListener('click', () => {
    modal.classList.remove('ativo');
    document.body.classList.remove('no-scroll'); // libera o scroll
  });

  // Fechar clicando no fundo (overlay)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('ativo');
      document.body.classList.remove('no-scroll'); // libera o scroll
    }
  });
});
