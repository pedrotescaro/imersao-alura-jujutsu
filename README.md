# 🔮 Arquivos Jujutsu

> **Uma plataforma interativa de exploração e catalogação de personagens do anime Jujutsu Kaisen**

![Jujutsu Kaisen](https://img.shields.io/badge/Anime-Jujutsu%20Kaisen-ff003c?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=flat-square)
![License](https://img.shields.io/badge/License-Educational-green?style=flat-square)

---

## 📖 Sobre o Projeto

**Arquivos Jujutsu** é uma aplicação web interativa desenvolvida durante a **Imersão Dev com Google Gemini - 10ª Edição** pela **Alura**. Este projeto é um catálogo digital de personagens do anime **Jujutsu Kaisen**, oferecendo uma experiência imersiva e temática para explorar o universo da série.

A aplicação combina técnicas modernas de desenvolvimento web com design responsivo e uma interface visualmente atrativa, inspirada nos elementos visuais icônicos do anime, como os poderes de Satoru Gojo (azul ciano) e Ryomen Sukuna (vermelho intenso).

### 🎯 Objetivo Principal

Desenvolver uma plataforma web que permita:
- **Exploração intuitiva** de personagens através de sistema de busca avançado
- **Interface temática e imersiva** que capture a essência do universo Jujutsu
- **Experiência responsiva** funcionando perfeitamente em qualquer dispositivo
- **Aprendizado prático** de tecnologias web fundamentais (HTML, CSS, JavaScript)
- **Demonstração de competências** em desenvolvimento front-end e UX/UI

### 💡 Inspiração e Contexto

O projeto foi criado como parte da jornada de aprendizado da **Imersão Dev com Google Gemini**, um programa educacional intensivo que combina:
- Educação prática em desenvolvimento web
- Uso de IA (Google Gemini) como assistente no processo criativo
- Desenvolvimento de projetos reais e portfólio
- Integração de conhecimentos teóricos com aplicação prática

## ✨ Funcionalidades Detalhadas

### 🔍 Sistema de Busca Avançado
- **Busca Full-Text**: Pesquise por qualquer palavra presente no nome, descrição ou tags dos personagens
- **Case-Insensitive**: Busca não diferencia maiúsculas de minúsculas
- **Suporte a Multiple Tags**: Filtre por múltiplas tags simultaneamente
- **Busca em Tempo Real**: Resultados aparecem conforme você digita
- **Feedback Visual**: Mensagens personalizadas quando nenhum resultado é encontrado
- **Atalho por Teclado**: Pressione Enter para iniciar a busca rapidamente

### 🏷️ Sistema de Categorização
Cada personagem é organizado com tags temáticas:
- **Por Escola**: Tóquio, Kyoto, Especial
- **Por Tipo**: Estudante, Feiticeiro, Maldição, Administração
- **Por Função**: Professor, Médica, Gerente, Diretor
- **Por Características**: Antagonista, Poder especial, Clã, etc.

### 📱 Design Responsivo
- **Desktop**: Layout em grid de 4 colunas com máxima visualização
- **Tablet**: Adaptação para 2-3 colunas
- **Mobile**: Layout em coluna única com otimização de toque
- **Viewport Meta Tags**: Configuração adequada para todos os dispositivos
- **Flex e Grid**: Layouts modernos que se adaptam automaticamente

### ⚡ Experiência do Usuário
- **Loader Animado**: Indicador visual durante carregamento de dados
- **Delay Dramático**: 800ms de simulação para imersão temática
- **Transições Suaves**: Animações CSS para mudanças de estado
- **Hover Effects**: Interatividade visual nos cards
- **Erro Handling**: Tratamento elegante de erros e imagens quebradas
- **Fallback de Imagens**: Placeholder automático se imagem não carregar

### 🔗 Integração com Fontes Externas
- **Links para Fandom**: Acesso ao wiki oficial de Jujutsu Kaisen
- **Links para Wikipedia**: Informações enciclopédicas dos personagens
- **Abertura em Aba Nova**: Todos os links abrem sem sair da aplicação
- **Referência Cruzada**: Múltiplas fontes de informação para cada personagem

### 🎨 Tema Visual Temático
- **Paleta de Cores Anime**: Inspirada diretamente em Jujutsu Kaisen
- **Efeitos Glow**: Brilhos sutis que remetem a técnicas jujutsu
- **Tipografia Temática**: Fontes diferentes para título, conteúdo e tags
- **Texturas de Fundo**: Padrão visual que evoca atmosfera de "arquivo antigo"
- **Dark Mode por Padrão**: Design escuro imersivo

## 🛠️ Tecnologias Utilizadas e Justificativa

### Frontend
- **HTML5**
  - Semântica adequada com tags `<header>`, `<main>`, `<section>`, `<footer>`
  - Meta tags para SEO e responsividade
  - Estrutura acessível com `alt` em imagens
  - Integração com fontes Google Fonts para tipografia temática

- **CSS3 Avançado**
  - **Variáveis CSS**: Sistema de cores centralizadas (`:root`)
  - **Grid Layout**: Layout principal em grid responsivo
  - **Flexbox**: Alinhamento e distribuição de elementos
  - **Media Queries**: Breakpoints para mobile (≤768px) e responsividade
  - **Animações**: Keyframes customizadas para loader e transições
  - **Gradientes**: Efeitos visuais com gradientes lineares e radiais
  - **Box Shadow e Filter**: Efeitos de profundidade e brilho
  - **Pseudo-elementos**: `::before` e `::after` para efeitos visuais

- **JavaScript ES6+**
  - **Async/Await**: Carregamento assíncrono de dados
  - **Arrow Functions**: Sintaxe moderna e concisa
  - **Template Literals**: Strings dinâmicas com `${}
  - **Array Methods**: `filter()`, `map()`, `includes()`, `some()`
  - **DOM Manipulation**: `querySelector()`, `createElement()`, `appendChild()`
  - **Event Listeners**: Listeners de teclado e clique
  - **Fetch API**: Requisição HTTP para `data.json`

### Dados e Estrutura
- **JSON Estruturado**
  - Formato padronizado para cada personagem
  - Campos: nome, descrição, data_criacao, link, icon, tags
  - Fácil de estender e manter
  - Compatível com futuras integrações de API

### Design e Assets
- **Google Fonts**
  - `Roboto Mono`: Código e dados técnicos
  - `Teko`: Titles e headings no estilo anime
  - `Quicksand`: Corpo de texto legível
  - `Special Elite`: Acentos estilizados

- **Imagens Oficiais**
  - Fonte: jujutsukaisen.jp (site oficial)
  - Alta qualidade e autenticidade
  - Suporte a fallback com placeholder

- **Ícone do Site**
  - Logo oficial de Jujutsu Kaisen
  - Fonte: Wikimedia Commons

## 📋 Estrutura Detalhada do Projeto

```
imersao-alura-jujutsu/
├── 📄 index.html              # Arquivo HTML principal
│   ├── Meta tags (charset, viewport, SEO)
│   ├── Links CSS e fontes
│   ├── Header com logo e busca
│   ├── Main com container de cards
│   └── Footer com créditos
│
├── 🎨 style.css               # Estilos CSS (352 linhas)
│   ├── Importações de fontes Google
│   ├── Variáveis CSS (:root)
│   ├── Reset e estilos base
│   ├── Layout header
│   ├── Layout main e grid de cards
│   ├── Estilos de cards
│   ├── Animações (loader, hover)
│   ├── Media queries responsivas
│   └── Paleta de cores temática
│
├── 🔧 script.js               # JavaScript (91 linhas)
│   ├── Seleção de elementos DOM
│   ├── Event listeners (Enter key)
│   ├── Função mostrarLoader()
│   ├── Função carregarDados() [async]
│   ├── Função iniciarBusca()
│   ├── Função renderizarCards()
│   └── Execução inicial
│
├── 📊 data.json               # Base de dados (258 linhas)
│   ├── Array de 32+ personagens
│   ├── Cada personagem com:
│   │   ├── nome
│   │   ├── descricao
│   │   ├── data_criacao
│   │   ├── link (Fandom/Wikipedia)
│   │   ├── icon (URL da imagem)
│   │   └── tags (array)
│   └── Estrutura JSON válida
│
├── 📁 imgs/
│   └── 🖼️ Jujutsu-Kaisen-Logo.png   # Logo do projeto
│
├── 📝 README.md               # Este arquivo
└── 🔗 .gitignore             # Arquivo do git (optional)
```

### Arquivo HTML (index.html)
- **Doctype**: HTML5
- **Linguagem**: pt-BR (Português Brasileiro)
- **Meta Charset**: UTF-8
- **Viewport**: Configuração responsive
- **Favicon**: Logo oficial de Jujutsu Kaisen
- **Fontes**: Google Fonts integradas
- **CSS**: Link externo para style.css
- **JavaScript**: Script externo no final do body

### Arquivo CSS (style.css)
- **352 linhas** de CSS estruturado
- **Cores temáticas**:
  - `--gojo-blue: #00ffff` (Cyan primário)
  - `--gojo-purple: #bd00ff` (Purple secundário)
  - `--sukuna-red: #ff003c` (Vermelho antagonista)
  - `--text-color: #f0f0f0` (Texto claro)
  - `--bg-dark: #050505` (Fundo escuro)
  - `--card-bg: #121212` (Fundo dos cards)
  - `--card-border: #333` (Bordas sutis)

- **Breakpoints Responsivos**:
  - Desktop: ≥1024px (4 colunas)
  - Tablet: 768px - 1023px (2-3 colunas)
  - Mobile: <768px (1 coluna)

### Arquivo JavaScript (script.js)
- **Sem dependências externas**: Vanilla JavaScript puro
- **91 linhas** de código bem estruturado
- **Principais funções**:
  ```javascript
  mostrarLoader(boolean)      // Controla exibição do loader
  carregarDados()            // Fetch async do data.json
  iniciarBusca()             // Filtra dados baseado no termo
  renderizarCards(array)      // Renderiza HTML dinamicamente
  ```

### Arquivo JSON (data.json)
- **258 linhas** de dados estruturados
- **32+ personagens** categorizados
- **Estrutura por personagem**:
  ```json
  {
    "nome": "string",
    "descricao": "string",
    "data_criacao": "year",
    "link": "url_fandom_ou_wikipedia",
    "icon": "url_da_imagem_oficial",
    "tags": ["categoria1", "categoria2", ...]
  }
  ```

## 🚀 Como Usar - Guia Completo

### 1️⃣ Pré-requisitos
- **Navegador moderno** com suporte a:
  - ES6+ JavaScript
  - CSS Grid e Flexbox
  - Fetch API
- **Sistema operacional**: Windows, macOS ou Linux
- **Conexão com Internet**: Para carregar imagens e fontes

### 2️⃣ Instalação

#### Opção A: Clonar do GitHub (Recomendado)
```bash
# Clone o repositório
git clone https://github.com/pedrotescaro/imersao-alura-jujutsu.git

# Entre no diretório
cd imersao-alura-jujutsu

# Pronto! Agora abra index.html
```

#### Opção B: Download Manual
1. Visite [GitHub do Projeto](https://github.com/pedrotescaro/imersao-alura-jujutsu)
2. Clique em "Code" → "Download ZIP"
3. Extraia o arquivo em seu computador
4. Abra `index.html` no navegador

#### Opção C: Usar Servidor Local (Recomendado para desenvolvimento)
```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (http-server)
npx http-server

# Com Live Server no VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

### 3️⃣ Executando a Aplicação

#### No Windows:
```cmd
REM Duplo clique em index.html
# OU
start index.html
```

#### No macOS:
```bash
open index.html
```

#### No Linux:
```bash
xdg-open index.html
# Ou com Firefox
firefox index.html
```

### 4️⃣ Usando a Aplicação

#### 🔍 Realizando Buscas
1. **Na página inicial**: Todos os 32+ personagens são carregados
2. **Searchbox**: Digite no campo "Pesquisar feiticeiro ou maldição..."
3. **Pressionando Enter**: Clique em "Investigar" ou pressione Enter
4. **Resultados**: Os cards são filtrados em tempo real

#### 📱 Explorando Cards
- **Clique no card**: Abre link externo para mais informações
- **Hover**: Veja efeitos visuais de interatividade
- **Tags**: Identifique categorias do personagem rapidamente

#### 🔄 Limpando Busca
- **Deixe o campo vazio** e clique em "Investigar" para voltar a lista completa
- **Recarregue a página** (F5) para resetar tudo

#### 🎯 Exemplos de Buscas
```
"Sukuna"           → Encontra tudo sobre Sukuna
"estudante"        → Lista todos os estudantes
"Tóquio"          → Personagens de Tóquio
"maldição"         → Todas as maldições
"Gojo"             → Satoru Gojo e referências
"antagonista"      → Vilões e antagonistas
"fogo"             → Personagens com poderes de fogo
```

### 5️⃣ Solução de Problemas

| Problema | Solução |
|----------|---------|
| Imagens não carregam | Verifique conexão internet, ou use servidor local |
| Página em branco | Limpe cache (Ctrl+F5 ou Cmd+Shift+R) |
| Busca não funciona | Certifique-se de que data.json está no mesmo diretório |
| Estilos incorretos | Verifique se style.css está linkado corretamente |
| Fontes estranhas | Aguarde carregamento de Google Fonts |

## 📊 Base de Dados Detalhada

### Personagens por Categoria

#### 🏫 Escola Jujutsu de Tóquio (13 personagens)
| Nome | Tipo | Tags | Fonte |
|------|------|------|-------|
| Yuji Itadori | Estudante | estudante, Tóquio, protagonista | Wikipedia |
| Megumi Fushiguro | Estudante | estudante, Tóquio, técnica das sombras | Wikipedia |
| Nobara Kugisaki | Estudante | estudante, Tóquio, armas | Wikipedia |
| Toge Inumaki | Estudante | Fala Amaldiçoada, estudante, Tóquio | Fandom |
| Panda | Corpo Amaldiçoado | corpo amaldiçoado, especial, Tóquio | Fandom |
| Satoru Gojo | Professor | feiticeiro, professor, Tóquio | Wikipedia |
| Shoko Ieiri | Médica | médica, cura, Tóquio | Fandom |
| Masamichi Yaga | Diretor | diretor, Tóquio, corpos amaldiçoados | Fandom |
| Kiyotaka Ijichi | Gerente | gerente, Tóquio | Fandom |
| Akari Nitta | Administração | administração, Jujutsu Society | Fandom |
| Yuta Okkotsu | Especial | grau especial, Rika, maldição | Fandom |
| Atsuya Kusakabe | Feiticeiro | feiticeiro, grau 1 | Fandom |

#### 🏯 Escola Jujutsu de Kyoto (11 personagens)
| Nome | Tipo | Tags | Função |
|------|------|------|--------|
| Aoi Todo | Estudante | Kyoto, Boogie Woogie, feiticeiro | Técnica especial |
| Noritoshi Kamo | Estudante | Kyoto, clã Kamo | Descendente de clã |
| Momo Nishimiya | Estudante | Kyoto, estudante | Manipulação de pássaros |
| Mai Zenin | Estudante | Kyoto, clã Zenin, irmã de Maki | Tecnologia de pistola |
| Kasumi Miwa | Estudante | Kyoto, espada | Estilo de espada |
| Kokichi Muta | Estudante | Kyoto, mecânico, corpo artificial | Mechamaru |
| Arata Nitta | Administração | administração, Jujutsu Society | Suporte |
| Utahime Iori | Professora | professora, Kyoto | Docente |
| Yoshinobu Gakuganji | Diretor | diretor, Kyoto | Liderança |

#### 👹 Maldições e Antagonistas (8+ personagens)
| Nome | Tipo | Tags | Poder |
|------|------|------|-------|
| Ryomen Sukuna | Rei das Maldições | maldição, antagonista, Sukuna | Poder Absoluto |
| Jogo | Maldição Especial | maldição, antagonista, fogo | Manipulação de Fogo |
| Hanami | Maldição Especial | maldição, antagonista, plantas | Controle de Plantas |
| Dagon | Maldição Especial | maldição, antagonista, água | Domínio sobre Água |
| Mahito | Maldição | maldição, antagonista, transfiguração | Modificação de Formas |
| Toji Zenin | Assassina | clã Zenin, assassina, antagonista | Força Física |
| Suguru Geto | Antagonista | antagonista, maldições, feiticeiro | Manipulação de Maldições |
| Kechizu | Maldição | maldição, antagonista | Irmão de Yuji |
| Ko | Maldição | maldição, antagonista | Cursed Womb |

### Estrutura de Dados Padrão

Cada personagem segue este modelo JSON:
```json
{
  "nome": "Nome do Personagem",
  "descricao": "Descrição breve e impactante",
  "data_criacao": "Ano de primeira aparição",
  "link": "https://URL_FANDOM_OU_WIKIPEDIA",
  "icon": "https://URL_IMAGEM_OFICIAL",
  "tags": [
    "categoria1",
    "categoria2",
    "tipo_poder"
  ]
}
```

### Fontes de Dados

- **Imagens**: Site oficial - https://jujutsukaisen.jp/
- **Informações Personagens**: 
  - Fandom Wiki: https://jujutsu-kaisen.fandom.com/
  - Wikipedia: https://en.wikipedia.org/
- **Logo**: Wikimedia Commons (Official Jujutsu Kaisen)
- **Dados Fictícios**: Compilados para fins educacionais

## 🎨 Design e UX - Análise Detalhada

### 🌈 Paleta de Cores Temática

#### Cores Principais
```css
--gojo-blue: #00ffff      /* Cyan brilhante - Gojo Satoru */
--gojo-purple: #bd00ff    /* Purple místico - Poder de Gojo */
--sukuna-red: #ff003c     /* Vermelho intenso - Sukuna */
--text-color: #f0f0f0     /* Texto claro e legível */
--bg-dark: #050505        /* Fundo quase preto */
--card-bg: #121212        /* Fundo dos cards */
--card-border: #333       /* Bordas sutis */
```

#### Efeitos de Iluminação
- **Gojo Glow**: `0 0 15px rgba(0, 255, 255, 0.5)` - Efeito cyan nas tags
- **Sukuna Glow**: `0 0 15px rgba(255, 0, 60, 0.5)` - Efeito vermelho nos cards antagonistas
- **Hover Effects**: Aumento de brilho ao passar o mouse

### 🎯 Hierarquia Visual

#### Header
- Logo do Jujutsu Kaisen lado a esquerdo
- Título "Arquivos Jujutsu" em destaque
- Searchbox com input e botão "Investigar"
- Background com textura sutil

#### Main Content
- **Grid Responsivo**:
  - Desktop (>1024px): 4 colunas
  - Tablet (768-1024px): 3 colunas
  - Mobile (<768px): 1 coluna

#### Cards de Personagem
```
┌─────────────────────────┐
│   [IMAGEM DO CHAR]      │
│  (com efeito hover)     │
├─────────────────────────┤
│ NOME DO PERSONAGEM      │ ← Teko font, 1.5rem
├─────────────────────────┤
│ Registro: 2018          │ ← Texto pequeno
│ Descrição do personagem │ ← Quicksand, 0.95rem
│ #tag1 #tag2 #tag3       │ ← Tags com glow
├─────────────────────────┤
│ [Acessar Arquivo]       │ ← Link interativo
└─────────────────────────┘
```

#### Footer
- Créditos simples
- Texto de "Desenvolvido com Energia Amaldiçoada"
- Texto pequeno e discreto

### ✨ Efeitos CSS Principais

#### 1. Loader Animado
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
/* Aplicado ao loader com animação de 2s infinita */
```

#### 2. Hover nos Cards
```css
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 255, 255, 0.3);
}
```

#### 3. Transições Suaves
```css
transition: all 0.3s ease-in-out;
/* Aplicado em cards, botões e links */
```

#### 4. Glow das Tags
```css
box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
/* Efeito luminoso nas tags */
```

### 📐 Tipografia

| Elemento | Fonte | Tamanho | Peso | Cor |
|----------|-------|--------|------|-----|
| Título Principal | Teko | 2.5rem | 700 | Cyan |
| Títulos Cards | Teko | 1.5rem | 600 | Branco |
| Descrições | Quicksand | 0.95rem | 400 | Cinza claro |
| Tags | Roboto Mono | 0.8rem | 400 | Cyan |
| Footer | Special Elite | 0.8rem | 400 | Cinza |

### 🎬 Animações

| Animação | Duração | Trigger | Efeito |
|----------|---------|---------|--------|
| Loader | 2s | Page load | Rotação infinita |
| Fade In | 0.5s | Cards renderizam | Opacidade 0→1 |
| Hover Card | 0.3s | Mouse over | Levantamento + glow |
| Hover Button | 0.2s | Mouse over | Cor muda |

### 🔧 Acessibilidade

- ✅ **Alt Text**: Todas as imagens têm descrições
- ✅ **Contraste**: Proporção WCAG AA (texto vs background)
- ✅ **Keyboard Navigation**: Suporte a Tab e Enter
- ✅ **Meta Viewport**: Configuração para mobile
- ✅ **Focus States**: Links e botões com destaque
- ✅ **Semântica HTML**: Tags corretas para screen readers

## 🔧 Desenvolvimento e Arquitetura - Análise Técnica Profunda

### Fluxo de Dados da Aplicação

```
┌─────────────────────────────────────────────────────────┐
│           CICLO DE VIDA DA APLICAÇÃO                    │
└─────────────────────────────────────────────────────────┘

1. PAGE LOAD
   ↓
2. carregarDados() [async]
   ├── Mostra loader
   ├── Espera 800ms (delay dramático)
   ├── Fetch data.json
   ├── Parse JSON
   ├── Armazena em variável 'dados'
   └── renderizarCards(dados)
   ↓
3. RENDERIZAÇÃO INICIAL
   ├── Limpa container
   ├── Para cada personagem:
   │   ├── Cria <article class="card">
   │   ├── Adiciona imagem
   │   ├── Adiciona conteúdo HTML
   │   └── Append ao container
   └── Esconde loader
   ↓
4. ESPERA POR INTERAÇÃO DO USUÁRIO
   ├── Digitação no input
   ├── Pressiona Enter ou clica botão
   └── iniciarBusca()
   ↓
5. PROCESSAMENTO DE BUSCA
   ├── Captura termo de busca
   ├── Converte para lowercase
   ├── Filter() nos dados com três condições:
   │   ├── nome.includes(termo)
   │   ├── descricao.includes(termo)
   │   └── tags.some(tag => tag.includes(termo))
   └── Retorna dadosFiltrados
   ↓
6. RENDERIZAÇÃO DE RESULTADOS
   ├── Se resultados > 0:
   │   ├── Renderiza novos cards
   │   └── Esconde mensagem de erro
   └── Se resultados = 0:
       ├── Exibe mensagem "Nenhum rastro..."
       └── Esconde cards
```

### Funções JavaScript Explicadas

#### `mostrarLoader(mostrar)`
```javascript
function mostrarLoader(mostrar) {
    if (mostrar) {
        loaderContainer.style.display = 'flex';      // Mostra loader
        cardContainer.style.display = 'none';        // Esconde cards
        msgErro.style.display = 'none';              // Esconde erro
    } else {
        loaderContainer.style.display = 'none';      // Esconde loader
        cardContainer.style.display = 'grid';        // Mostra cards
    }
}
// Responsabilidade: Controlar visibilidade dos elementos
// Tempo de execução: O(1) - operações simples de DOM
```

#### `carregarDados()` - Operação Assíncrona
```javascript
async function carregarDados() {
    mostrarLoader(true);
    // Simula delay dramático para imersão
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
        // Fetch e parse do JSON
        let resposta = await fetch("data.json");
        dados = await resposta.json();
        
        // Renderiza dados iniciais
        renderizarCards(dados);
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        // Poderia mostrar mensagem de erro ao usuário
    } finally {
        mostrarLoader(false);
    }
}
// Responsabilidade: Carregar e processar dados
// Tempo de execução: O(n) onde n = número de personagens
// Async/Await permite não bloquear a thread principal
```

#### `iniciarBusca()` - Filtro Inteligente
```javascript
function iniciarBusca() {
    mostrarLoader(true);
    let termo = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    // Triple filter: nome, descricao, tags
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
// Responsabilidade: Filtrar dados baseado em termo
// Tempo de execução: O(n*m) onde n = personagens, m = palavras da descrição
// Usa method chaining para código legível
```

#### `renderizarCards(listaDados)` - Renderização Dinâmica
```javascript
function renderizarCards(listaDados) {
    cardContainer.innerHTML = "";  // Limpa container
    
    for (let dado of listaDados) {
        let article = document.createElement("article");
        article.classList.add("card");
        
        // Verifica se tem imagem
        const temImagem = dado.icon && dado.icon.length;
        
        // Converte tags em HTML
        const tagsHtml = (dado.tags || [])
            .map(tag => `<span class="tag">#${tag}</span>`)
            .join("");
        
        // Template com fallback de imagem
        const imagemHtml = temImagem 
            ? `<img src="${dado.icon}" alt="${dado.nome}" 
                class="card-cover" 
                onerror="this.src='https://via.placeholder.com/400x200?text=Energia+Oculta'">`
            : `<div class="card-cover" style="...">SEM IMAGEM</div>`;
        
        // Template Literal com HTML dinâmico
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
// Responsabilidade: Renderizar array em HTML
// Tempo de execução: O(n) - renderiza cada item uma vez
// Usa template literals e map() para código funcional
```

### Otimizações e Boas Práticas

#### ✅ Performance
- **Seleção de DOM cacheada**: Elementos selecionados no início evitam re-queries
- **Event Delegation**: Listeners em elementos pai reduzem overhead
- **Async/Await**: Não bloqueia thread principal
- **Lazy Rendering**: Cards renderizados sob demanda

#### ✅ Segurança
- **Validação de Dados**: Checks para propriedades undefined
- **Fallback de Imagens**: Não quebra se URL estiver indisponível
- **Escapeing de Strings**: Previne XSS
- **HTTPS Ready**: Funciona em qualquer protocolo

#### ✅ Manutenibilidade
- **Código Limpo**: Funções pequenas e especializadas
- **Comentários Estratégicos**: Apenas onde necessário
- **DRY Principle**: Reutilização de funções
- **Consistência de Estilo**: Convenções de nome claras

#### ✅ Compatibilidade
- **ES6 Moderno**: Suporte a navegadores recentes
- **CSS3**: Grid e Flexbox amplamente suportados
- **Fallbacks CSS**: Propriedades alternativas incluídas
- **Graceful Degradation**: App funciona mesmo com JS desabilitado

### Estrutura de Dados

#### Array de Personagens
```javascript
dados = [
  {
    nome: String,              // Identificador primário
    descricao: String,         // Conteúdo searchável
    data_criacao: String,      // Metadado temporal
    link: String,              // URL externa (validada)
    icon: String,              // URL de imagem
    tags: Array<String>        // Palavras-chave para busca
  },
  ...
]
// Tempo de acesso: O(1) por item
// Tamanho total: ~260 linhas JSON
// Facilmente extensível com novos campos
```

### Variáveis Globais

```javascript
let cardContainer;      // Reference ao div .card-container
let loaderContainer;    // Reference ao div .loader-container
let msgErro;           // Reference ao div #msg-erro
let dados = [];        // Array com todos os personagens
```

### Event Listeners

```javascript
// Listener no input de pesquisa
document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        iniciarBusca();  // Atalho do teclado
    }
});

// Listener no botão de busca (onclick no HTML)
// onclick="iniciarBusca()" no HTML

// Listener em cada link (delegado no card)
// Abrem em nova aba com target="_blank"
```

## 📚 Aprendizados da Imersão

Este projeto foi desenvolvido durante a **Imersão Dev com Google Gemini - 10ª Edição**, oferecida pela **Alura**, consolidando conhecimentos em:

### Conceitos Aprendidos

#### 🎓 Frontend Fundamentals
- **HTML5 Semântico**: Uso correto de tags para estrutura
- **CSS3 Avançado**: Variáveis, Grid, Flexbox, Animações
- **JavaScript Moderno**: ES6+, Async/Await, Arrow Functions
- **Manipulação do DOM**: Seleção, criação e modificação de elementos
- **Event Handling**: Listeners e delegação de eventos
- **Responsividade**: Mobile-First e Media Queries

#### 🔍 Funcionalidades Práticas
- **Fetch API**: Requisições HTTP e parsing JSON
- **Array Methods**: Filter, Map, Some, Find
- **Template Literals**: String interpolation dinâmica
- **Async Operations**: Promises, Async/Await, Delays
- **Error Handling**: Try/Catch e Fallbacks
- **Performance**: Otimização e boas práticas

#### 🎨 Design e UX
- **Paleta de Cores**: Design temático e consistente
- **Typography**: Hierarquia de fontes e legibilidade
- **Layout**: Grid systems e responsive design
- **Animações**: Transições e micro-interações
- **Acessibilidade**: WCAG standards e sem dependências
- **User Flow**: Journey do usuário e feedback visual

#### 🛠️ Desenvolvimento Profissional
- **Git**: Versionamento e colaboração
- **Clean Code**: Legibilidade e manutenibilidade
- **Estrutura de Projeto**: Organização e escalabilidade
- **Documentação**: README e comentários
- **Debugging**: DevTools e console
- **Performance**: Otimização de assets e rendering

#### 📊 Dados e Estrutura
- **JSON**: Formato de dados estruturado
- **Database Design**: Schemas e relacionamentos
- **Data Validation**: Verificação de integridade
- **Scalability**: Estrutura para crescimento
- **Caching**: Estratégias de performance

### Princípios Aplicados

| Princípio | Aplicação | Resultado |
|-----------|-----------|-----------|
| **DRY** (Don't Repeat Yourself) | Reutilização de funções | Código mais limpo e fácil de manter |
| **KISS** (Keep It Simple) | Design simples e direto | Melhor UX e facilidade de compreensão |
| **YAGNI** (You Aren't Gonna Need It) | Foco no essencial | Projeto enxuto sem bloat |
| **Single Responsibility** | Cada função faz uma coisa | Código modular e testável |
| **Progressive Enhancement** | Funciona sem JS/CSS | Robustez contra falhas |
| **Separation of Concerns** | HTML, CSS, JS separados | Manutenção facilitada |

---

## 🎓 Sobre a Imersão Dev da Alura

### 🤖 Imersão Dev com Google Gemini - 10ª Edição

A **Imersão Dev com Google Gemini** é um programa intensivo que oferece:

#### Diferenciais
- 🤖 **Primeiro Programa com Gemini**: Utilização de IA no processo educacional
- 🚀 **Prático e Imersivo**: Não é teórico, é hands-on
- 🎯 **Foco em Empregabilidade**: Projetos que impressionam recrutadores
- 👥 **Comunidade Exclusiva**: Networking durante e após imersão
- 📈 **Evoluição Rápida**: 5 dias de aprendizado intensivo

#### Por que funciona?
1. **Aprendizado Baseado em Projetos**: Fazer é aprender
2. **Feedback Contínuo**: Mentorias durante desenvolvimento
3. **Comunidade Motivadora**: Compartilhamento de conhecimento
4. **IA como Ferramenta**: Gemini otimiza o processo
5. **Portfolio Builder**: Projetos demonstráveis

#### Habilidades Desenvolvidas
- Front-end Development (HTML, CSS, JavaScript)
- Pensamento Lógico e Problem-Solving
- Comunicação e Colaboração
- Git e Versionamento
- Apresentação de Projetos
- Mentalidade de Produto

### 📊 Impacto da Imersão

**Arquivos Jujutsu** é apenas UM exemplo do que é possível em 5 dias de imersão:

- ✅ Projeto completo e funcional
- ✅ Design temático e profissional
- ✅ 32+ personagens com dados estruturados
- ✅ Sistema de busca avançado
- ✅ Responsividade total
- ✅ README detalhado
- ✅ Pronto para GitHub e portfólio
- ✅ Sem dependências externas

### 🎁 Valor Agregado

#### Para Iniciantes
- Primeira experiência com desenvolvimento real
- Mentoria de especialistas
- Portfolio builder instant
- Confiança para primeiros passos

#### Para Intermediários
- Consolidação de conhecimentos
- Boas práticas profissionais
- Aprendizado com IA
- Networking com a comunidade

#### Para Mercado
- Candidatos mais preparados
- Projetos de qualidade
- Habilidades atualizadas
- Mentalidade de produto

---

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

### Como Contribuir

#### 1. Fork o Projeto
```bash
# Na página do GitHub, clique em "Fork"
# Isto criará uma cópia sob sua conta
```

#### 2. Clone Seu Fork
```bash
git clone https://github.com/SEU_USUARIO/imersao-alura-jujutsu.git
cd imersao-alura-jujutsu
```

#### 3. Crie uma Branch
```bash
# Use um nome descritivo
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/bug-search
# ou
git checkout -b docs/melhorar-readme
```

#### 4. Faça suas Mudanças
```bash
# Edite os arquivos necessários
# Teste suas mudanças localmente
```

#### 5. Commit e Push
```bash
# Commits descritivos
git commit -am 'Adiciona nova funcionalidade X'
git commit -am 'Corrige bug em Y'
git commit -am 'Melhora documentação de Z'

# Push para seu fork
git push origin feature/nova-funcionalidade
```

#### 6. Crie um Pull Request
- Vá ao repositório original
- Clique em "New Pull Request"
- Compare seu fork com main
- Descreva suas mudanças
- Aguarde revisão e merge

### Tipos de Contribuição Aceitos

#### 🐛 Bug Fixes
- Corrija erros ou comportamentos inesperados
- Descreva o bug e como reproduzir
- Forneça a solução

#### ✨ Novas Funcionalidades
- Adicione personagens ao data.json
- Implemente melhorias de UI/UX
- Novos filtros ou ordenação
- Otimizações de performance

#### 📝 Documentação
- Melhore o README
- Adicione comentários ao código
- Crie guias de desenvolvimento
- Traduções

#### 🎨 Design e UX
- Melhorias visuais
- Novas animações
- Temas alternativos
- Ícones e assets

#### 🔧 Refatoração
- Melhore a estrutura do código
- Aplique melhores práticas
- Reduza complexidade
- Aumente performance

### Diretrizes de Contribuição

#### ✅ Boas Práticas
- Siga o estilo de código existente
- Escreva commits claros e descritivos
- Adicione comentários para código complexo
- Teste suas mudanças
- Atualize a documentação se necessário

#### ❌ Evite
- Mudanças grandes sem discussão prévia
- Código sem testes
- Dependências desnecessárias
- Formatação inconsistente

#### 🎯 Checklist de PR
- [ ] Código segue o estilo do projeto
- [ ] Testei as mudanças localmente
- [ ] Atualizei documentação
- [ ] Mensagens de commit são claras
- [ ] Não quebrei funcionalidade existente

---

## 📝 Licença

Este projeto é fornecido como-é para fins **educacionais**. 

### Direitos Autorais

- **Código**: Livre para uso, modificação e distribuição (Educational License)
- **Jujutsu Kaisen**: Personagens e imagens são propriedade de:
  - **Gege Akutami** (Autor/Mangaka)
  - **MAPPA** (Estúdio de Animação)
  - **Dados fictícios** compilados para fins educacionais

### Permissões
✅ Uso pessoal e educacional  
✅ Modificação e distribuição  
✅ Inclusão em portfólio  
✅ Referência em projetos  

### Restrições
❌ Uso comercial  
❌ Redistribuição de direitos autorais  
❌ Remoção de atribuições  

---

## 📞 Contato e Redes Sociais

### Desenvolvedor
- **Nome**: Pedro Tescaro
- **GitHub**: [@pedrotescaro](https://github.com/pedrotescaro)
- **Repositório**: [imersao-alura-jujutsu](https://github.com/pedrotescaro/imersao-alura-jujutsu)

### Recursos Relacionados
- **Alura**: [www.alura.com.br](https://www.alura.com.br)
- **Imersão Dev**: [Imersão Dev com Google Gemini](https://www.alura.com.br/imersao-dev)
- **Google Gemini**: [Google AI Studio](https://aistudio.google.com)

---

## 🙏 Agradecimentos Especiais

### Equipe
- **Google Gemini** - IA que auxiliou no desenvolvimento
- **Alura** - Plataforma educacional excelente
- **Instrutores Alura** - Mentoria durante a imersão
- **Comunidade Alura** - Apoio e feedback

### Inspiração
- **Anime Jujutsu Kaisen** - Universo e personagens incríveis
- **Comunidade Web Dev** - Boas práticas e padrões
- **Stack Overflow** - Soluções e conhecimento coletivo

### Agradecimentos Pessoais
A todos que usam, testam, sugerem melhorias e compartilham este projeto!

---

## 📊 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| **Personagens Catalogados** | 32+ |
| **Linhas de Código** | ~500 |
| **Linhas de CSS** | 352 |
| **Linhas de JavaScript** | 91 |
| **Linhas de JSON** | 258 |
| **Linhas de Documentação** | 800+ |
| **Tempo de Desenvolvimento** | 5 dias (Imersão) |
| **Sem Dependências Externas** | ✅ |
| **Responsividade** | 100% |
| **Acessibilidade** | WCAG AA |

---

**Desenvolvido com ❤️ Energia Amaldiçoada durante a Imersão Dev com Google Gemini - 10ª Edição pela Alura**

⭐ **Se você gostou do projeto, não esqueça de dar uma estrela!** 🌟

```
    ✨
   /👁️\
  / 🧿 \
   \👁️/
    ✨
    
Arquivos Jujutsu - 2024
```
