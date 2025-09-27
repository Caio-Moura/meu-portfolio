document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1 
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Adicione este bloco no seu scripts.js

// Pega o elemento do título pelo ID que acabamos de criar
const titulo = document.getElementById('titulo-principal');

// Define um timer para parar a animação do cursor
setTimeout(() => {
    // Adiciona a classe 'typing-done' ao h1 depois de 3.5 segundos
    titulo.classList.add('typing-done');
}, 3500); // O tempo aqui é em milissegundos (3500ms = 3.5s)