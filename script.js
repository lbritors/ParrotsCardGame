
let qtdCartas = parseInt(prompt("Com quantas cartas quer jogar? Escolha entre 4 e 14 cartas."));

while (qtdCartas % 2 !== 0 || (qtdCartas < 4 && qtdCartas > 14) || !Number.isInteger(qtdCartas)) {

    alert("Número de cartas inválido!");
    qtdCartas = parseInt(prompt("Com quantas cartas quer jogar? Escolha entre 4 e 14 cartas."));
     
} 
const papagaios = ["Imagens/tripletsparrot.gif",
    "Imagens/tripletsparrot.gif",
    "Imagens/bobrossparrot.gif",
    "Imagens/bobrossparrot.gif",
    "Imagens/explodyparrot.gif",
    "Imagens/explodyparrot.gif",
    "Imagens/fiestaparrot.gif",
    "Imagens/fiestaparrot.gif",
    "Imagens/metalparrot.gif",
    "Imagens/metalparrot.gif",
    "Imagens/revertitparrot.gif",
    "Imagens/revertitparrot.gif",
    "Imagens/unicornparrot.gif",
    "Imagens/unicornparrot.gif",
]

const container = document.querySelector(".container");
function criaCarta(papagaio) {
    
    const card = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");
    const backImage = document.createElement("img");
    const frontImage = document.createElement("img");
    backImage.setAttribute("src", papagaio);
    frontImage.setAttribute("src", "Imagens/back.png");
    card.className = "card";
    front.className = "front-face face";
    back.className = "back-face face";
    backImage.className = "back-img";
    frontImage.className = "front-img";
    card.appendChild(front);
    card.appendChild(back);
    front.appendChild(frontImage);
    back.appendChild(backImage);
    console.log(card);
    return card;

}

function adicionaCartas() {
    const lista = document.querySelector(".container");

    for (let contador = 0; contador < qtdCartas; contador++) {
        lista.innerHTML += `
    <div class="card">
                <div class="front-face face">
                    <img class="back-img" src="Imagens/back.png" alt="back-img">
                </div>
                <div class="back-face face">
                    <img class="front-img" src="${papagaios[i]}" alt="front-img">
                </div>
            </div>
    `;
       
    
    }
}


function mostraCartas() {
    let card;
    for (let i = 0; i < qtdCartas; i++) {
        card = criaCarta(papagaios[i]);
        container.appendChild(card);
    }
    
    /*papagaios.forEach(papagaio => {
        const card = criaCarta();
        container.appendChild(card);
    });*/
}
mostraCartas();
function comparador() { 
    return Math.random() - 0.5; 
}