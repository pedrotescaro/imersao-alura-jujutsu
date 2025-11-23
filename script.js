let cardContainer = document.querySelector(".card-container");
let loaderContainer = document.querySelector(".loader-container");
let msgErro = document.getElementById("msg-erro");
let dados = [];

// Adiciona evento de tecla "Enter" no input
document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        iniciarBusca();
    }
});

function mostrarLoader(mostrar) {
    if (mostrar) {
        loaderContainer.style.display = 'flex';
        cardContainer.style.display = 'none';
        msgErro.style.display = 'none';
    } else {
        loaderContainer.style.display = 'none';
        cardContainer.style.display = 'grid';
    }
}

async function carregarDados() {
    mostrarLoader(true);
    // Simula delay dramático
    await new Promise(resolve => setTimeout(resolve, 800)); 

    try {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
        renderizarCards(dados);
    } catch (error) {
        console.error("Erro ao obter dados:", error);
    } finally {
        mostrarLoader(false);
    }
}

function iniciarBusca() {
    mostrarLoader(true);
    let termo = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    let dadosFiltrados = dados.filter(dado => {
        return dado.nome.toLowerCase().includes(termo) || 
               (dado.descricao || "").toLowerCase().includes(termo) ||
               (dado.tags || []).some(tag => tag.toLowerCase().includes(termo));
    });

    setTimeout(() => {
        if (dadosFiltrados.length === 0) {
            cardContainer.style.display = 'none';
            msgErro.style.display = 'block';
            loaderContainer.style.display = 'none';
        } else {
            msgErro.style.display = 'none';
            renderizarCards(dadosFiltrados);
            mostrarLoader(false);
        }
    }, 500);
}

function renderizarCards(listaDados) {
    cardContainer.innerHTML = "";
    for (let dado of listaDados) {
        let article = document.createElement("article");
        article.classList.add("card");
        
        const temImagem = dado.icon && dado.icon.length;
        const tagsHtml = (dado.tags || []).map(tag => `<span class="tag">#${tag}</span>`).join("");
        
        // Se a imagem der erro, coloca uma placeholder genérica (opcional)
        const imagemHtml = temImagem 
            ? `<img src="${dado.icon}" alt="${dado.nome}" class="card-cover" onerror="this.src='https://via.placeholder.com/400x200?text=Energia+Oculta'">`
            : `<div class="card-cover" style="background:#333; display:flex; align-items:center; justify-content:center; color:#555;">SEM IMAGEM</div>`;

        article.innerHTML = `
        ${imagemHtml}
        <div class="card-content">
            <h2>${dado.nome}</h2>
            <p><strong>Registro:</strong> ${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <div class="card-tags">${tagsHtml}</div>
            <a href="${dado.link}" target="_blank">Acessar Arquivo</a>
        </div>
        `;
        cardContainer.appendChild(article);
    }
}

carregarDados();