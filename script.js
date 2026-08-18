const btnDecrease = document.getElementById('btn-decrease-text');
const btnIncrease = document.getElementById('btn-increase-text');
const btnTheme = document.getElementById('btn-toggle-theme');
const body = document.body;

// Verifica se o usuário já havia escolhido o modo escuro antes
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Configuração do Tema Claro/Escuro
btnTheme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Salva a escolha do usuário no navegador
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Configuração de Tamanho da Fonte
// Tenta carregar o tamanho salvo, se não houver, usa 16
let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;
const maxFontSize = 26;
const minFontSize = 12;

// Aplica o tamanho salvo assim que a página carrega
body.style.fontSize = currentFontSize + 'px';

btnIncrease.addEventListener('click', () => {
    if (currentFontSize < maxFontSize) {
        currentFontSize += 2;
        body.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('fontSize', currentFontSize); // Salva o tamanho
    }
});

btnDecrease.addEventListener('click', () => {
    if (currentFontSize > minFontSize) {
        currentFontSize -= 2;
        body.style.fontSize = currentFontSize + 'px';
        localStorage.setItem('fontSize', currentFontSize); // Salva o tamanho
    }
});