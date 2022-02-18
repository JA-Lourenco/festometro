// Condição base
    // Carne - 350 gr por pessoa
    // Cerveja - 1500 ml por Pessoa
    // Refrigerante - 1000 ml por pessoa
    // Sucos - 800 ml por pessoa
    // Crianças valem por 0,5

// DOM inputs
let adult = document.getElementById("adult");
let kids = document.getElementById("kids");
let time = document.getElementById("time");
const userCalc = document.getElementById("user-calc");

// DOM span
let meat = document.getElementById("meat");
let beer = document.getElementById("beer");
let refri = document.getElementById("refri");
let juice = document.getElementById("juice");

// Evento no botão de calcular
userCalc.addEventListener("click", setValues);

function setValues() {
    
    // Valores dos inputs
    let qtyAdult = adult.value;
    let qtyKids = kids.value;
    let duration = time.value;

    let qtyMeat = (calcMeat(duration) * qtyAdult) + ((calcMeat(duration) * qtyKids)/2);
    
    let qtyBeer = (calcBeer(duration) * qtyAdult);
    
    let qtyRefri = (calcRefri(duration) * qtyAdult) + ((calcRefri(duration) * qtyKids)/2);
    
    let qtyJuice = (calcJuice(duration) * qtyAdult) + ((calcJuice(duration) * qtyKids)/2); 
    
    // Solicitar preenchimento dos inputs / Se ok exibe a estimativa
    voidInput(qtyMeat, qtyBeer, qtyRefri, qtyJuice);    
}

function calcMeat(duration) {
    if (duration < 6 ) {
        return 350;
    } else if (duration <= 12 && duration < 16) {
        return 550;
    } else if (duration <= 16 && duration < 18) {
        return 750;
    } else {
        return 1000;
    }
}

function calcBeer(duration) {
    if (duration < 6 ) {
        return 1500;
    } else if (duration <= 12 && duration < 16) {
        return 2200;
    } else if (duration <= 16 && duration < 18) {
        return 2900;
    } else {
        return 3500;
    }
}

function calcRefri(duration) {
    if (duration < 6 ) {
        return 1000;
    } else if (duration <= 12 && duration < 16) {
        return 1500;
    } else if (duration <= 16 && duration < 18) {
        return 2000;
    } else {
        return 2500;
    }
}

function calcJuice(duration) {
    if (duration < 6 ) {
        return 800;
    } else if (duration <= 12 && duration < 16) {
        return 1200;
    } else if (duration <= 16 && duration < 18) {
        return 1600;
    } else {
        return 2000;
    }
}

function voidInput(qtyMeat, qtyBeer, qtyRefri, qtyJuice) {

    // Valores dos inputs
    let qtyAdult = adult.value;
    let qtyKids = kids.value;
    let duration = time.value;

    if (qtyAdult === "" || qtyKids === "" || duration === "") {
        let alert = document.getElementsByTagName("h3")[0];
        
        alert.innerText = "Por favor, preencha todos os campos antes de realizar o cálculo!";
    } else {
        // Arredondar a quantidade dos itens
        let roundMeat = Math.ceil(qtyMeat/1000);
        let roundBeer = Math.ceil(qtyBeer/350);
        let roundRefri = Math.ceil(qtyRefri/2000);
        let roundJuice = Math.ceil(qtyJuice/1000);
        
        meat.innerText = `${roundMeat} Kg`;
        beer.innerText = `${roundBeer} Latas de 350ml`;
        refri.innerText = `${roundRefri} Garrafas de 2 litros`;
        juice.innerText = `${roundJuice} Pacotes que fazem 1 litro`;
    }
}