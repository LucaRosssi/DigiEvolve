

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

document.addEventListener('click', (event) => {
    const isClickInsideMenu1 = menuDesplegable1.contains(event.target) || desplegarMenu1.contains(event.target);
    const isClickInsideMenu2 = menuDesplegable2.contains(event.target) || desplegarMenu2.contains(event.target);

    if (!isClickInsideMenu1) {
        menuDesplegable1.classList.add('hide');
    }
    if (!isClickInsideMenu2) {
        menuDesplegable2.classList.add('hide');
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
        console.log(digimonSeleccionado);
        let digimonInicial = [];

        digimonEvolve.forEach(digimonEvolve => {
            if (digimonEvolve.nombre.toLowerCase() === digimonSeleccionado.toLocaleLowerCase().trim()) {
                digimonInicial = digimonEvolve.evoluciones;
            }
        })
    
    filtrarEvoluciones();
    });
})



const customeSelect2 = document.querySelector('.a2');
const liDigimon2 = document.querySelectorAll('.menu2 li');
const value2 = customeSelect2.querySelector('.value');

let digimonSeleccionado2 = '';

liDigimon2.forEach(item=> {
    item.addEventListener('click', function () {
        const img = item.querySelector('img').src;
        const text = item.querySelector('span');
        value2.innerHTML = `<img src="${img}" alt="${text.textContent}">${text.textContent}`;
        menuDesplegable2.classList.add('hide');

        digimonSeleccionado2 = text.textContent;
        console.log(digimonSeleccionado2);
    });
})

// Dejar solo las evoluciones del primer Digimon seleccionado en el segundo menú desplegable

class DigimonEvolve {
    constructor(nombre, evoluciones) {
        this.nombre = nombre;
        this.evoluciones = evoluciones;
    }
};

const digimonEvolve = [
    new DigimonEvolve( "Agumon", ["Greymon", "Meramon", "Birdramon", "Centarumon", "Monochromon", "Tyrannomon"]),
    new DigimonEvolve("Airdramon", ["Megadramon", "Phoenixmon"]),
    new DigimonEvolve("Andromon", []),
    new DigimonEvolve("Angemon", ["Angemon", "Phoenixmon"]),
    new DigimonEvolve("Bakemon", ["SkullGreymon", "Giromon"]),
    new DigimonEvolve("Betamon", ["Seadramon", "Whamon", "Coelamon", "Shellmon"]),
    new DigimonEvolve("Birdramon", ["Phoenixmon"]),
    new DigimonEvolve("Biyomon", ["Bidramon", "Airdramon", "Kokatorimon", "Unimon", "Kabuterimon"]),
    new DigimonEvolve("Botamon", ["Koromon"]),
    new DigimonEvolve("Centarumon", ["Andromon", "Giromon"]),
    new DigimonEvolve("Coelamon", ["MegaSeadramon"]),
    new DigimonEvolve("Devimon", ["SkullGreymon", "Megadramon"]),
    new DigimonEvolve("Digitamamon", []),
    new DigimonEvolve("Drimogemon", ["MetalGreymon"]),
    new DigimonEvolve("Elecmon", ["Leomon", "Angemon", "Bakemon", "Kokatorimon"]),
    new DigimonEvolve("Etemon", []),
    new DigimonEvolve("Frigimon", ["MetalMamemon", "Mamemon"]),
    new DigimonEvolve("Gabumon", ["Centarumon", "Monochromon", "Drimogemon", "Tyrannomon", "Ogremon", "Garurumon"]),
    new DigimonEvolve("Garurumon", ["SkullGreymon", "MegaSeadramon"]),
    new DigimonEvolve("Giromon", []),
    new DigimonEvolve("Greymon", ["MetalGreymon", "SkullGreymon"]),
    new DigimonEvolve("H-Kabuterimon", []),
    new DigimonEvolve("Kabuterimon", ["H-Kabuterimon", "MetalMamemon"]),
    new DigimonEvolve("Kokatorimon", ["Phoenixmon", "Piximon"]),
    new DigimonEvolve("Koromon", ["Agumon", "Gabumon"]),
    new DigimonEvolve("Kunemon", ["Bakemon", "Kabuterimon", "Kuwagamon", "Vegiemon"]),
    new DigimonEvolve("Kuwagamon", ["H-Kabuterimon", "Piximon"]),
    new DigimonEvolve("Leomon", ["Andromon", "Mamemon"]),
    new DigimonEvolve("Mamemon", []),
    new DigimonEvolve("Megadramon", []),
    new DigimonEvolve("MegaSeadramon", []),
    new DigimonEvolve("Meramon", ["MetalGreymon", "Andromon"]),
    new DigimonEvolve("MetalGreymon", []),
    new DigimonEvolve("MetalMamemon", []),
    new DigimonEvolve("Mojyamon", ["SkullGreymon", "Mamemon"]),
    new DigimonEvolve("Monochromon", ["MetalGreymon", "MetalMamemon"]),
    new DigimonEvolve("Monzaemon", []),
    new DigimonEvolve("Nanimon", ["Digitamamon"]),
    new DigimonEvolve("Ninjamon", ["Piximon", "MetalMamemon", "Mamemon"]),
    new DigimonEvolve("Numemon", ["Monzaemon"]),
    new DigimonEvolve("Ogremon", ["Andromon", "Giromon"]),
    new DigimonEvolve("Palmon", ["Kuwagamon", "Vegiemon", "Vegiemon", "Whamon", "Coelamon"]),
    new DigimonEvolve("Patamon", ["Drimogemon", "Angemon", "Leomon", "Tyrannomon", "Ogremon", "Unimmon"]),
    new DigimonEvolve("Penguinmon", ["Whamon", "Shellmon", "Garurumon", "Frigimon", "Mojyamon"]),
    new DigimonEvolve("Phoenixmon", []),
    new DigimonEvolve("Piximon", []),
    new DigimonEvolve("Poyomon", ["Tokomon"]),
    new DigimonEvolve("Punimon", ["Tsunomon"]),
    new DigimonEvolve("Seadramon", ["Megadramon", "MegaSeadramon"]),
    new DigimonEvolve("Shellmon", ["H-Kabuterimon", "MegaSeadramon"]),
    new DigimonEvolve("SkullGreymon", []),
    new DigimonEvolve("Sukamon", ["Etemon"]),
    new DigimonEvolve("Tanemon", ["Palmon", "Betamon"]),
    new DigimonEvolve("Tokomon", ["Patamon", "Biyomon"]),
    new DigimonEvolve("Tsunomon", ["Elecmon", "Penguinmon"]),
    new DigimonEvolve("Tyrannomon", ["MetalGreymon", "Megadramon"]),
    new DigimonEvolve("Unimon", ["Giromon", "Phoenixmon"]),
    new DigimonEvolve("Vademon", []),
    new DigimonEvolve("Vegiemon", ["Piximon"]),
    new DigimonEvolve("Whamon", ["MegaSeadramon", "Mamemon"]),
    new DigimonEvolve("Yuramon", ["Tanemon"]),
]

function filtrarEvoluciones() {
    const evolucionesDOM = document.querySelectorAll('.digimon2');

    const digimonEncontrado = digimonEvolve.find(
        digi => digi.nombre.toLowerCase().trim() === digimonSeleccionado.toLowerCase().trim()
    );

    if (!digimonEncontrado) return;

    const lista = digimonEncontrado.evoluciones.map(e => e.toLowerCase().trim());

    evolucionesDOM.forEach(evolucion => {
        const nombre = evolucion.querySelector('span').textContent
            .trim()
            .toLowerCase();

        evolucion.style.display = lista.includes(nombre) ? '' : 'none';
    });
    
    const mensajeNoEvoluciones = document.getElementById('no-evolution');

    if (digimonEncontrado.evoluciones.length === 0) {
        mensajeNoEvoluciones.classList.remove('hide');
    } else {
        mensajeNoEvoluciones.classList.add('hide');
    }
}

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
