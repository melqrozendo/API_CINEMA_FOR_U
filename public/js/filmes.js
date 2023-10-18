// Variável para armazenar todos os produtos
let filmes = [];

// Função para listar todos os produtos na página
function listarFilmes() {

    const salas = document.getElementById('sala-assentos');
    salas.innerHTML = ''; // Limpa o conteúdo atual

    const filmesContainer = document.getElementById('listarFilmes');
    filmesContainer.innerHTML = ''; // Limpa o conteúdo atual
    
    filmes.forEach(filme => {
        const tipoInput = document.createElement('div');
        tipoInput.className = 'produto';
        tipoInput.innerHTML = `
        <div class="container">
            <div class="capa-de-filmes">
                <a class="sala-assentos"  onclick="filme(${filme.id})"><img src="${filme.capa_filme}" alt="capa-de-filmes" class="capa-de-filmes" id="${filme.id}"></a>
            </div>
        </div>
        `;

        filmesContainer.appendChild(tipoInput);
    });
}

function filme(id) {
    // console.log('filme')

    const filmesContainer = document.getElementById('listarFilmes');
    filmesContainer.innerHTML = ''; // Limpa o conteúdo atual

    const salas = document.getElementById('sala-assentos');
    salas.innerHTML = ''; // Limpa o conteúdo atual

    const assentos = document.getElementById('fileira');
    assentos.innerHTML = '';

    const ingressos = document.getElementById('ingresso');
    ingressos.innerHTML = ''; // Limpa o conteúdo atual

    const filmeContainer = document.getElementById('sobreFilme');
    filmeContainer.innerHTML = ''; // Limpa o conteúdo atual
    
    filmes.forEach(filme => {
        if(filme.id == id) {
            const tipoInput = document.createElement('div');
            tipoInput.className = 'produto';
            tipoInput.innerHTML = `
            <div class="container-fluid filme">
                <div class="imgFilme">
                    <a class="sala-assentos" onclick="filme(${filme.id})"><img src="${filme.capa_filme}" alt="capa-de-filmes" class="capa-de-filme" id="${filme.id}"></a>
                </div>
                <div class="selectFilme">
                    <h3>${filme.nome_filme}</h3>
                    <p>${filme.genero} | ${filme.duracao}min</p>
                    <p>${filme.descricao}</p>
                    <p>${filme.direcao} | ${filme.distribuicao} | ${filme.origem}</p>
                    <a onclick="assentos(${filme.id})" id="assentos"><img src="img/seat-0.png" width="25" height="25" style="cursor: pointer;" alt="assentos" class="icone-filme">&nbsp;<span style="cursor: pointer;">Assentos</span></a>
                    <a href="#" id="preco"><img src="img/dollar.png" width="25" height="25" style="cursor: pointer;" alt="ingressos" class="icone-filme">&nbsp;<span style="cursor: pointer;">Preços</span></a>
                </div>
            </div>
            <div class="container-fluid btn mt-5">
                <div class="container-fluid btn-filme">
                    <a id="btn-filme" href="index.html">Voltar</a>
                </div>
            </div>
            `;

            filmeContainer.appendChild(tipoInput);
        }
    
    });
}

function assentos(id) {
    // console.log('assentos')

    const filmesContainer = document.getElementById('listarFilmes');
    filmesContainer.innerHTML = ''; // Limpa o conteúdo atual

    const filmeContainer = document.getElementById('sobreFilme');
    filmeContainer.innerHTML = ''; // Limpa o conteúdo atual

    const ingressos = document.getElementById('ingresso');
    ingressos.innerHTML = ''; // Limpa o conteúdo atual

    const assentos = document.getElementById('fileira');

    for (let i = 1; i <= 100; i++) {
        let seat = document.createElement('div');
        seat.className = 'seat';

        if (i == 5 || i == 6 || i == 15 || i == 16) { // Corrigido para usar o operador de "OU" (||)
            seat.innerHTML = `
                <input type="checkbox" name="${'C'+ i}" id="${'C'+ i}" class="seatC">
                <label for="${'C'+ i}"></label>
            `;
        } else {
            seat.innerHTML = `
                <input type="checkbox" name="${'A'+ i}" id="${'A'+ i}" class="seatA">
                <label for="${'A'+ i}"></label>
            `;
        }

        assentos.appendChild(seat);
    }

    const salas = document.getElementById('sala-assentos');
    salas.innerHTML = ''; // Limpa o conteúdo atual

    filmes.forEach(filme => {
        if(filme.id == id) {
            salas.innerHTML = `
                <div class="container-fluid" id="nome-filme">
                    <h3>${filme.nome_filme}</h3>
                </div>
                <div class="container-fluid tela">
                <div id="tela">Tela</div>
                </div>
                <div class="container-fluid btn mt-5">
                    <div>
                        <!--a onclick="filme(${filme.id})">Voltar</a>
                        <a onclick="ingresso(${filme.id})">Finalizar</a-->
                        <button type="button" class="btn btn-primary" onclick="filme(${filme.id})">Voltar</button>
                        <button type="button" class="btn btn-primary" onclick="ingresso(${filme.id})">Ingressos</button>
                    </div>
                </div>
            `;
            
        }
    
    });

}


function ingresso(id) {
    const inputSeat = document.querySelectorAll('input[type="checkbox"]:checked');
    const assentosSelects = document.getElementById('assentosSelects');
    assentosSelects.innerHTML = ''; // Limpa o conteúdo atual

    let cont = 0;
    
    inputSeat.forEach(seats => {
        const assentosSelect = document.createElement('div');
        assentosSelect.className = 'assentosSelect';
        assentosSelect.style = 'border:1px solid #000; border-radius: 5px; padding: 1px; margin: 3px;'
        assentosSelect.innerHTML = `
            <div class="container-fluid">
                <span>${seats.id}</span>
            </div>
            `;
        assentosSelects.appendChild(assentosSelect); // Adiciona o assento ao elemento assentosSelects
        cont++;
    });

    // quantidade de assentos selecionados
    // console.log(cont);

    const filmesContainer = document.getElementById('listarFilmes');
    filmesContainer.innerHTML = ''; // Limpa o conteúdo atual

    const salas = document.getElementById('sala-assentos');
    salas.innerHTML = ''; // Limpa o conteúdo atual

    const assentos = document.getElementById('fileira');
    assentos.innerHTML = ''; // Limpa o conteúdo atual

    const filmeContainer = document.getElementById('sobreFilme');
    filmeContainer.innerHTML = ''; // Limpa o conteúdo atual

    const ingressos = document.getElementById('ingresso');
    ingressos.innerHTML = ''; // Limpa o conteúdo atual

    const btn_ingressos = document.createElement('div');
    btn_ingressos.className = 'btn_ingressos';

    filmes.forEach(filme => {
        if (filme.id == id) {
            ingressos.innerHTML = `
                <div class="container-fluid">
                    <h3>Filme: ${filme.nome_filme}</h3>
                    <p>${filme.genero} | ${filme.duracao}min</p>
                    <p>Assentos: ${cont}</p>
                </div>
            `;

            btn_ingressos.innerHTML = `
                <div class="container-fluid btn mt-5">
                    <div>
                        <!--button type="button" class="btn btn-primary" onclick="filme(${filme.id})">Voltar</button-->
                        <button type="button" class="btn btn-primary" onclick="finalizar(${filme.id})">Finalizar</button>
                    </div>
                </div>
            `;
        }
    });

    ingressos.appendChild(assentosSelects);
    ingressos.appendChild(btn_ingressos);
}

function finalizar(id) {
    console.log("desta")

    const filmesContainer = document.getElementById('listarFilmes');
    filmesContainer.innerHTML = ''; // Limpa o conteúdo atual

    const salas = document.getElementById('sala-assentos');
    salas.innerHTML = ''; // Limpa o conteúdo atual

    const assentos = document.getElementById('fileira');
    assentos.innerHTML = ''; // Limpa o conteúdo atual

    const filmeContainer = document.getElementById('sobreFilme');
    filmeContainer.innerHTML = ''; // Limpa o conteúdo atual

    const ingressos = document.getElementById('ingresso');
    ingressos.innerHTML = ''; // Limpa o conteúdo atual

    const finalizar = document.getElementById('finalizar');
    finalizar.innerHTML = ''; // Limpa o conteúdo atual

    filmes.forEach(filme => {
        if (filme.id == id) {
            finalizar.innerHTML = `
                <div class="container-fluid">
                    <img src="img/popcorn.png" width="200" height="200" alt="finalizar">
                    <p id="finalizar">Thanks, for watching!</p>
                </div>
            `;
        }
    })
}


// Função para carregar os produtos a partir do arquivo JSON
function carregarFilmes() {
    fetch('filme.json')
        .then(response => response.json())
        .then(data => {
            filmes = data.filmes;
            listarFilmes(); // Exibe todos os produtos ao carregar a página
        })
        .catch(error => {
            console.log('Erro', error);
        });
}

// Carrega os produtos quando a página é carregada
window.addEventListener('load', carregarFilmes);