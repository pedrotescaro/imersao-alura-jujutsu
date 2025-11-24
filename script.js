// ====== VARIÁVEIS GLOBAIS ======
let cardContainer = document.querySelector(".card-container");
let loaderContainer = document.querySelector(".loader-container");
let msgErro = document.getElementById("msg-erro");
let paginationContainer = document.getElementById("pagination");
let dados = [];
let dadosFiltrados = [];

// Configurações de Paginação
const CARDS_POR_PAGINA = 12;
let paginaAtual = 1;

// Armazenamento Local
const STORAGE_FAVORITES = 'jujutsu-favoritos';
const STORAGE_THEME = 'jujutsu-tema';

let favoritos = [];
let temaNocturno = true;

// ====== INICIALIZAÇÃO ======
document.addEventListener('DOMContentLoaded', function() {
    carregarTema();
    carregarFavoritos();
    carregarDados();
    configurarEventos();
});

// ====== EVENTOS DO TECLADO ======
document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        iniciarBusca();
    }
});

// ====== THEME TOGGLE (DARK/LIGHT MODE) ======
function carregarTema() {
    const temaSalvo = localStorage.getItem(STORAGE_THEME);
    if (temaSalvo !== null) {
        temaNocturno = temaSalvo === 'true';
    } else {
        temaNocturno = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Apply theme class on page load
    const html = document.documentElement;
    if (temaNocturno) {
        html.classList.add('dark-theme');
        html.classList.remove('light-theme');
    } else {
        html.classList.add('light-theme');
        html.classList.remove('dark-theme');
    }
    
    aplicarTema();
}

function aplicarTema() {
    const html = document.documentElement;
    const btnTema = document.getElementById('btn-tema');
    const iconTema = btnTema.querySelector('i');
    
    if (temaNocturno) {
        html.classList.add('dark-theme');
        html.classList.remove('light-theme');
        html.style.colorScheme = 'dark';
        if (iconTema) {
            iconTema.className = 'fas fa-sun';
        }
        btnTema.title = 'Modo Claro';
    } else {
        html.classList.add('light-theme');
        html.classList.remove('dark-theme');
        html.style.colorScheme = 'light';
        if (iconTema) {
            iconTema.className = 'fas fa-moon';
        }
        btnTema.title = 'Modo Escuro';
    }
    
    localStorage.setItem(STORAGE_THEME, temaNocturno);
}

// ====== FAVORITOS (LOCALSTORAGE) ======
function carregarFavoritos() {
    const favoritosSalvos = localStorage.getItem(STORAGE_FAVORITES);
    favoritos = favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
    atualizarBotaoFavoritos();
}

function salvarFavoritos() {
    localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(favoritos));
    atualizarBotaoFavoritos();
}

function atualizarBotaoFavoritos() {
    const btnFavoritos = document.getElementById('btn-favoritos');
    const iconFav = btnFavoritos.querySelector('i');
    
    if (iconFav) {
        if (favoritos.length > 0) {
            iconFav.className = 'fas fa-heart';
            btnFavoritos.setAttribute('data-count', favoritos.length);
        } else {
            iconFav.className = 'far fa-heart';
            btnFavoritos.removeAttribute('data-count');
        }
    }
}

function adicionarAosFavoritos(nome) {
    if (!favoritos.includes(nome)) {
        favoritos.push(nome);
        salvarFavoritos();
    }
}

function removerDosFavoritos(nome) {
    favoritos = favoritos.filter(fav => fav !== nome);
    salvarFavoritos();
}

function isFavorito(nome) {
    return favoritos.includes(nome);
}

// ====== LOADER ======
function mostrarLoader(mostrar) {
    if (mostrar) {
        loaderContainer.style.display = 'flex';
        cardContainer.style.display = 'none';
        msgErro.style.display = 'none';
        paginationContainer.style.display = 'none';
    } else {
        loaderContainer.style.display = 'none';
        cardContainer.style.display = 'grid';
    }
}

// ====== CARREGAR DADOS ======
async function carregarDados() {
    mostrarLoader(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
        dadosFiltrados = [...dados];
        renderizarCards(dadosFiltrados, 1);
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        msgErro.style.display = 'block';
    } finally {
        mostrarLoader(false);
    }
}

// ====== BUSCA ======
function iniciarBusca() {
    mostrarLoader(true);
    let termo = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    if (termo === '') {
        dadosFiltrados = [...dados];
    } else {
        dadosFiltrados = dados.filter(dado => {
            return dado.nome.toLowerCase().includes(termo) || 
                   (dado.descricao || "").toLowerCase().includes(termo) ||
                   (dado.tags || []).some(tag => tag.toLowerCase().includes(termo));
        });
    }

    paginaAtual = 1;
    
    setTimeout(() => {
        renderizarCards(dadosFiltrados, paginaAtual);
        mostrarLoader(false);
    }, 500);
}

// ====== PAGINAÇÃO ======
function calcularTotalPaginas() {
    return Math.ceil(dadosFiltrados.length / CARDS_POR_PAGINA);
}

function obterCardsParaPagina(numeroPagina) {
    const inicio = (numeroPagina - 1) * CARDS_POR_PAGINA;
    const fim = inicio + CARDS_POR_PAGINA;
    return dadosFiltrados.slice(inicio, fim);
}

function renderizarPaginacao() {
    const totalPaginas = calcularTotalPaginas();
    
    if (totalPaginas <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }

    paginationContainer.style.display = 'flex';

    const paginationNumbers = document.getElementById('pagination-numbers');
    paginationNumbers.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
        const button = document.createElement('button');
        button.className = `btn-page ${i === paginaAtual ? 'active' : ''}`;
        button.textContent = i;
        button.onclick = () => {
            paginaAtual = i;
            renderizarCards(dadosFiltrados, paginaAtual);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        paginationNumbers.appendChild(button);
    }

    // Atualizar botões anterior/próximo
    document.getElementById('btn-anterior').disabled = paginaAtual === 1;
    document.getElementById('btn-proximo').disabled = paginaAtual === totalPaginas;

    // Atualizar informações
    const paginationInfo = document.getElementById('pagination-info');
    const inicio = (paginaAtual - 1) * CARDS_POR_PAGINA + 1;
    const fim = Math.min(paginaAtual * CARDS_POR_PAGINA, dadosFiltrados.length);
    document.getElementById('pagination-text').textContent = 
        `Mostrando ${inicio}-${fim} de ${dadosFiltrados.length} personagens (Página ${paginaAtual}/${totalPaginas})`;
    paginationInfo.style.display = dadosFiltrados.length > 0 ? 'block' : 'none';
}

function irParaPaginaAnterior() {
    if (paginaAtual > 1) {
        paginaAtual--;
        renderizarCards(dadosFiltrados, paginaAtual);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function irParaPaginaProxima() {
    const totalPaginas = calcularTotalPaginas();
    if (paginaAtual < totalPaginas) {
        paginaAtual++;
        renderizarCards(dadosFiltrados, paginaAtual);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ====== RENDERIZAR CARDS ======
function renderizarCards(listaDados, numeroPagina) {
    cardContainer.innerHTML = "";

    if (listaDados.length === 0) {
        cardContainer.style.display = 'none';
        msgErro.style.display = 'block';
        paginationContainer.style.display = 'none';
        document.getElementById('pagination-info').style.display = 'none';
        return;
    }

    msgErro.style.display = 'none';
    cardContainer.style.display = 'grid';

    const cardsParaExibir = obterCardsParaPagina(numeroPagina);

    cardsParaExibir.forEach(dado => {
        let article = document.createElement("article");
        article.classList.add("card");
        
        const temImagem = dado.icon && dado.icon.length;
        const tagsHtml = (dado.tags || []).map(tag => `<span class="tag">#${tag}</span>`).join("");
        const isFav = isFavorito(dado.nome);
        const botaoFav = `<button class="btn-favoritar ${isFav ? 'favorited' : ''}" onclick="toggleFavorito(event, '${dado.nome}')" title="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"><i class="fa${isFav ? 's' : 'r'} fa-heart"></i></button>`;
        
        const imagemHtml = temImagem 
            ? `<img src="${dado.icon}" alt="${dado.nome}" class="card-cover" onerror="this.src='https://via.placeholder.com/400x200?text=Energia+Oculta'">`
            : `<div class="card-cover" style="background:#333; display:flex; align-items:center; justify-content:center; color:#555;">SEM IMAGEM</div>`;

        article.innerHTML = `
        ${imagemHtml}
        <div class="card-content">
            <div class="card-header">
                <h2>${dado.nome}</h2>
                ${botaoFav}
            </div>
            <p><strong>Registro:</strong> ${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <div class="card-tags">${tagsHtml}</div>
            <a href="${dado.link}" target="_blank">Acessar Arquivo</a>
        </div>
        `;
        cardContainer.appendChild(article);
    });

    renderizarPaginacao();
}

function toggleFavorito(event, nome) {
    event.stopPropagation();
    if (isFavorito(nome)) {
        removerDosFavoritos(nome);
    } else {
        adicionarAosFavoritos(nome);
    }
    // Atualizar UI
    const btn = event.target.closest('.btn-favoritar');
    btn.classList.toggle('favorited');
    
    const icon = btn.querySelector('i');
    if (btn.classList.contains('favorited')) {
        icon.className = 'fas fa-heart';
        btn.title = 'Remover dos favoritos';
    } else {
        icon.className = 'far fa-heart';
        btn.title = 'Adicionar aos favoritos';
    }
}

// ====== CONFIGURAR EVENTOS ======
function configurarEventos() {
    // Tema
    document.getElementById('btn-tema').addEventListener('click', function() {
        temaNocturno = !temaNocturno;
        aplicarTema();
    });

    // Favoritos
    document.getElementById('btn-favoritos').addEventListener('click', function() {
        if (favoritos.length === 0) {
            alert('Você não tem nenhum personagem nos favoritos!');
            return;
        }
        const favoritosData = dados.filter(d => favoritos.includes(d.nome));
        dadosFiltrados = favoritosData;
        paginaAtual = 1;
        renderizarCards(dadosFiltrados, paginaAtual);
    });

    // Paginação
    document.getElementById('btn-anterior').addEventListener('click', irParaPaginaAnterior);
    document.getElementById('btn-proximo').addEventListener('click', irParaPaginaProxima);
}