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




const titulo = document.getElementById('titulo-principal');


setTimeout(() => {
   
    titulo.classList.add('typing-done');
}, 3500); 
