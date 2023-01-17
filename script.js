debugger;
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
    card.setAttribute("data-test", "card");
    card.addEventListener("click", () => virarCarta(card));
    front.className = "front-face face";
    back.className = "back-face face initial";
    backImage.className = "back-img";
    backImage.setAttribute("data-test", "face-up-image");
    frontImage.className = "front-img";
    frontImage.setAttribute("data-test", "face-down-image");
    card.appendChild(front);
    card.appendChild(back);
    front.appendChild(frontImage);
    back.appendChild(backImage);
    card.setAttribute("data-parrot", papagaio);
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

let firstCard = " ", secondCard = " ";
let cartasRestantes = qtdCartas;
let numeroJogadas = 0;
let cartasViradas = 0;
 
function virarCarta(card) {
    const back = card.querySelector('.back-face');
    const front = card.querySelector('.front-face');
    const cartaVirada = card.className.includes("turned");
    
    if (cartaVirada) {
        return;
    }
    if (firstCard === " " && cartasViradas <= 2) {
        cartasViradas++;
        console.log(cartasViradas);
        firstCard = card;
        front.classList.add(".front-face-flip");
        back.classList.remove("initial");
        card.classList.add("turned");
        numeroJogadas++;
        
    } else if (secondCard === " " && cartasViradas <= 2)  {
        cartasViradas++;
        console.log(cartasViradas);

        secondCard = card;
        front.classList.add(".front-face-flip");
        back.classList.remove("initial");
        card.classList.add("turned");
        numeroJogadas++;
        if (secondCard.getAttribute("data-parrot") === firstCard.getAttribute("data-parrot")) {
    
            cartasRestantes -= 2;
            firstCard = " ";
            secondCard = " ";
            cartasViradas = 0;            
            console.log(cartasViradas);
            
            if (cartasRestantes === 0) {
                setTimeout(() => {
                    alert(`Você ganhou em ${numeroJogadas} jogadas!`);
                    
                }, 200);
            }
        } else {

            setTimeout(() => {
                firstCard.classList.remove("turned");
                firstCard.firstChild.classList.remove("front-face-flip");
                firstCard.lastChild.classList.add("initial");
                secondCard.classList.remove("turned");
                secondCard.firstChild.classList.remove("front-face-flip");
                secondCard.lastChild.classList.add("initial");
                cartasViradas = 0;
                console.log(cartasViradas);

                firstCard = " ";
                secondCard = " ";
            }, 1000);
        }
    }
}
