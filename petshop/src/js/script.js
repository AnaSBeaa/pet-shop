// =========================================
//  PetShop Amigo — script.js
// =========================================

// --- Menu hamburguer (mobile) ---
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('aberto');
  });

  // Fecha ao clicar em um link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('aberto'));
  });
}

// --- Destaca link ativo na navbar ---
const paginaAtual = window.location.pathname.split('/').pop();

document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === paginaAtual || (paginaAtual === '' && href === 'index.html')) {
    link.classList.add('ativo');
  }
});

// --- Formulário de contato ---
const form     = document.getElementById('form-contato');
const sucesso  = document.getElementById('msg-sucesso');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Esconde o form e mostra mensagem de sucesso
    form.style.display = 'none';
    sucesso.classList.add('visivel');

    // Após 3 segundos, volta ao form limpo
    setTimeout(() => {
      form.reset();
      form.style.display = 'block';
      sucesso.classList.remove('visivel');
    }, 3000);
  });
}
