

// Menu desplegable
const menuDesplegable1 = document.getElementById('menuDesplegable1');
const menuDesplegable2 = document.getElementById('menuDesplegable2');
const desplegarMenu1 = document.getElementById('desplegarMenu1');
const desplegarMenu2 = document.getElementById('desplegarMenu2');

addEventListener('click', (event) => {
    if (event.target.id === 'desplegarMenu1') {
        menuDesplegable1.classList.toggle('hide');
    }
    if (event.target.id === 'desplegarMenu2') {
        menuDesplegable2.classList.toggle('hide');
    }
});

const customeSelect = document.querySelector('.a1');
const liDigimon = document.querySelectorAll('.menu1 li');
const value = customeSelect.querySelector('.value');

let digimonSeleccionado = '';

liDigimon.forEach(item=> {
    item.addEventListener('click', function () {
        const img = item.querySelector('img').src;
        const text = item.querySelector('span');
        value.innerHTML = `<img src="${img}" alt="${text.textContent}">${text.textContent}`;
        menuDesplegable1.classList.add('hide');

        digimonSeleccionado = text.textContent;
    });
})

const customeSelect2 = document.querySelector('.a2');
const liDigimon2 = document.querySelectorAll('.menu2 li');
const value2 = customeSelect2.querySelector('.value');


liDigimon2.forEach(item=> {
    item.addEventListener('click', function () {
        const img = item.querySelector('img').src;
        const text = item.querySelector('span');
        value2.innerHTML = `<img src="${img}" alt="${text.textContent}">${text.textContent}`;
        menuDesplegable2.classList.add('hide');

    });
})

// Dejar solo las evoluciones del primer Digimon seleccionado en el segundo menú desplegable

// class DigimonEvolve {
//     constructor(nombre, evoluciones) {
//         this.nombre = nombre;
//         this.evoluciones = evoluciones;
//     }
// };

// const digimonEvolve = [
//     new DigimonEvolve( "Agumon", ["Greymon", "Meramon", "Birdramon", "Centarumon", "Monochromon", "Tyrannomon"]),
// ]

// digimonEvolve.forEach(digimon => {
//     if (digimon.nombre === digimonSeleccionado) {
//         const evolucion = digimon.evoluciones;
//     }
    
//     return evolucion;
// })        



// Selector de Digimon

const digimonContainer = document.getElementById("digimonContainer");

class Digimon {
    constructor(nombre, imagen, vida, mp, fuerza, defensa, velocidad, cerebro, errores, pesoMin, PesoMax, felicidad, disciplina, batallas, tecnicas) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.vida = vida;
        this.mp = mp;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.inteligencia = cerebro;
        this.errores = errores;
        this.pesoMin = pesoMin;
        this.PesoMax = PesoMax;
        this.felicidad = felicidad;
        this.disciplina = disciplina;
        this.batallas = batallas;
        this.tecnicas = tecnicas;
    } 
}

const digimon = [
    new Digimon ("Agumon", "/assets/agumon.jpg", 10, 10, 1, '', '', '', '', 10, 20, '', '', '', ''),
    new Digimon ("Greymon", "/assets/greymon.jpg", 20, 20, 2, '', '', '', '', 20, 40, '', '', '', ''),
]
