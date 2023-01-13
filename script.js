
let qtdCartas = parseInt(prompt("Com quantas cartas quer jogar? Escolha entre 4 e 14 cartas."));

while (qtdCartas % 2 !== 0 || (qtdCartas < 4 || qtdCartas > 14) || !Number.isInteger(qtdCartas)) {

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
];

function virarCarta({target}) {
    console.log(target);
}
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
    card.addEventListener("click", virarCarta);
    front.className = "front-face face";
    back.className = "back-face face";
    backImage.className = "back-img";
    frontImage.className = "front-img";
    card.appendChild(front);
    card.appendChild(back);
    front.appendChild(frontImage);
    back.appendChild(backImage);
    return card;

}

const lista = [];
function adionaCartasNaLista() {
    for (let i = 0; i < qtdCartas; i++) {
        lista[i] = papagaios[i];
    }
    return lista;
}
adionaCartasNaLista();

function comparador() { 
    return Math.random() - 0.5; 
}


lista.sort(comparador);

function mostraCartas() {
    let card;
    for (let i = 0; i < lista.length; i++) {
        card = criaCarta(lista[i]);
        container.appendChild(card);
    }
    
}
mostraCartas();

