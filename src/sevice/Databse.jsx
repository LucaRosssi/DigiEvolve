import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

import React, { useEffect } from 'react'

const Databse = () => {
    class Digimon {
    constructor(nombre, imagen, icon, vida, mp, fuerza, defensa, velocidad, cerebro, errores, peso, felicidad, disciplina, batallas, tecnicas) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.icon = icon;
        this.vida = vida;
        this.mp = mp;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.inteligencia = cerebro;
        this.errores = errores;
        this.peso = peso;
        this.felicidad = felicidad;
        this.disciplina = disciplina;
        this.batallas = batallas;
        this.tecnicas = tecnicas;
        } 
    };

const digimon = [
  new Digimon ("Agumon", "https://www.grindosaur.com/img/official-artwork/digimon/agumon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Agumon.png", 10, 10, 1, null, null, null, [1, 100], [10, 20], null, null, null, null),
  new Digimon ("Greymon", "https://www.grindosaur.com/img/official-artwork/digimon/greymon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Meramon.png", null, null, 100, 100, 100, 100, [0, 1], [25, 35], null, 90, null, 35),
  new Digimon ("Meramon", "https://www.grindosaur.com/img/official-artwork/digimon/meramon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Meramon.png", null, null, 100, null, null, null, [5, 100], [15, 25], null, null, [10, 1000], 28),
  new Digimon ("Birdramon", "https://www.grindosaur.com/img/official-artwork/digimon/birdramon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Birdramon.png", null, null, null, null, 100, null, [3, 100], [15, 25], null, null, null, 35),
  new Digimon ("Centarumon", "https://www.grindosaur.com/img/official-artwork/digimon/centarumon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Centarumon.png", null, null, null, null, null, 100, [0, 3], [25, 35], null, 60, null, 28),
  new Digimon ("Monochromon", "https://www.grindosaur.com/img/official-artwork/digimon/monochromon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Monochromon.png", 1000, null, null, 100, null, 100, [0, 3], [35, 45], null, null, [0, 5], 35),
  new Digimon ("Tyrannomon", "https://www.grindosaur.com/img/official-artwork/digimon/tyrannomon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Tyrannomon.png", 1000, null, null, 100, null, null, [0, 5], [25, 35], null, null, [0, 5], 28),
  new Digimon ("Megadramon", "https://www.grindosaur.com/img/official-artwork/digimon/megadramon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Megadramon.png", 3000, 5000, 500, 300, 400, 400, [0, 10], [50, 60], null, null, [30, 1000], 30),
  new Digimon ("Phoenixmon", "https://www.grindosaur.com/img/official-artwork/digimon/phoenixmon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Phoenixmon.png", 4000, 4000, null, null, 400, 600, [0, 3], [25, 35], null, 100, [0, 0], 40),
  new Digimon ("Andromon", "https://www.grindosaur.com/img/official-artwork/digimon/andromon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Andromon.png", 2000, 4000, 200, 400, 200, 400, [0, 5], [35, 45], null, 95, [30, 1000], 30),
  new Digimon ("SkullGreymon", "https://www.grindosaur.com/img/official-artwork/digimon/skullgreymon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/SkullGreymon.png", 4000, 6000, 400, 400, 200, 500, [10, 100], [25, 35], null, null, [40, 1000], 45),
  new Digimon ("Giromon", "https://www.grindosaur.com/img/official-artwork/digimon/giromon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Giromon.png", null, null, 400, null, 300, 400, [15, 100], [0, 10], 95, null, [100, 1000], 35),
  new Digimon ("Seadramon", "https://www.grindosaur.com/img/official-artwork/digimon/seadramon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Seadramon.png", 1000, 1000, null, null, null, null, [3, 100], [25, 35], null, null, [0, 5], 28),
  new Digimon ("Whamon", "https://www.grindosaur.com/img/official-artwork/digimon/whamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Whamon.png", 1000, null, null, null, null, 100, [0, 5], [35, 45], null, 60, null, 28),
  new Digimon ("Shellmon", "https://www.grindosaur.com/img/official-artwork/digimon/shellmon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Shellmon.png", 1000, null, null, 100, null, null, [5, 100], [35, 45], null, null, null, 35),
  new Digimon ("Coelamon", "https://www.grindosaur.com/img/official-artwork/digimon/coelamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Coelamon.png", null, null, null, 100, null, null, [3, 100], [25, 35], null, null, [0, 5], 35),
  new Digimon ("Airdramon", "https://www.grindosaur.com/img/official-artwork/digimon/airdramon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Airdramon.png", null, 1000, null, null, 100, 100, [0, 1], [25, 35], null, 90, null, 35),
  new Digimon ("Kokatorimon", "https://www.grindosaur.com/img/official-artwork/digimon/kokatorimon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Kokatorimon.png", 1000, null, null, null, null, null, [3, 100], [25, 35], null, null, null, 28),
  new Digimon ("Unimon", "", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Unimon.png", 1000, null, null, null, 100, null, [0, 3], [25, 35], null, null, [10, 1000], 35),
  new Digimon ("Kabuterimon", "https://www.grindosaur.com/img/official-artwork/digimon/kabuterimon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Kabuterimon.png", 1000, 1000, 100, null, 100, null, [0, 1], [25, 35], null, null, null, 35),
  new Digimon ("Koromon", "https://www.grindosaur.com/img/official-artwork/digimon/koromon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Koromon.png", null, null, null, null, null, null, [0, 100], [0, 5], null, null, null, null),
  new Digimon ("MegaSeadramon", "https://www.grindosaur.com/img/official-artwork/digimon/megaseadramon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/MegaSeadramon.png", null, 4000, 500, 400, null, 400, [0, 5], [25, 35], null, null, [0, 0], 40),
  new Digimon ("Leomon", "https://www.grindosaur.com/img/official-artwork/digimon/leomon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Leomon.png", null, null, 100, null, 100, 100, [0, 1], [15, 25], null, null, [10, 1000], 35),
  new Digimon ("Angemon", "https://www.grindosaur.com/img/official-artwork/digimon/angemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Angemon.png", null, 1000, null, null, null, 100, [0, 0], [15, 25], null, null, null, 35),
  new Digimon ("Bakemon", "https://www.grindosaur.com/img/official-artwork/digimon/bakemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Bakemon.png", null, 1000, null, null, null, null, [3, 100], [15, 25], 50, null, null, 28),
  new Digimon ("MetalMamemon", "https://www.grindosaur.com/img/official-artwork/digimon/metalmamemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/MetalMamemon.png", null, null, 500, 400, 400, 400, [0, 15], [5, 15], 95, null, null, 30),
  new Digimon ("Mamemon", "https://www.grindosaur.com/img/official-artwork/digimon/mamemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Mamemon.png", null, null, 400, 300, 300, 400, [15, 100], [0, 10], 90, null, null, 25),
  new Digimon ("Drimogemon", "https://www.grindosaur.com/img/official-artwork/digimon/drimogemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Drimogemon.png", null, null, 100, null, null, null, [3, 100], [35, 45], 50, null, null, 28),
  new Digimon ("Ogremon", "https://www.grindosaur.com/img/official-artwork/digimon/ogremon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Ogremon.png", 1000, null, 100, null, null, null, [5, 100], [25, 35], null, null, [15, 1000], 35),
  new Digimon ("Garurumon", "https://www.grindosaur.com/img/official-artwork/digimon/garurumon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Garurumon.png", null, 1000, null, null, 100, null, [0, 1], [25, 35], null, 90, null, 28),
  new Digimon ("MetalGreymon", "https://www.grindosaur.com/img/official-artwork/digimon/metalgreymon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/MetalGreymon.png", 4000, 3000, 500, 500, 300, 300, [0, 10], [60, 70], null, 95, [30, 1000], 30),
  new Digimon ("H-Kabuterimon", "https://www.grindosaur.com/img/official-artwork/digimon/h-kabuterimon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/H-Kabuterimon.png", null, null, 500, 400, 400, 400, [0, 15], [5, 15], 95, null, null, 30),
  new Digimon ("Piximon", "https://www.grindosaur.com/img/official-artwork/digimon/piximon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Piximon.png", null, null, 300, 300, 400, 400, [15, 100], [0, 10], 95, null, null, 25),
  new Digimon ("Gabumon", "https://www.grindosaur.com/img/official-artwork/digimon/gabumon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Gabumon.png", null, null, null, 1, 1, 1, [1, 100], [10, 20], null, null, null, null),
  new Digimon ("Kuwagamon", "https://www.grindosaur.com/img/official-artwork/digimon/kuwagamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Kuwagamon.png", 1000, 1000, 100, null, 100, null, [5, 100], [25, 25], null, null, null, 28),
  new Digimon ("Vegiemon", "/https://www.grindosaur.com/img/official-artwork/digimon/vegiemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Vegiemon.png", null, 1000, null, null, null, null, [5, 100], [5, 15], 50, null, null, 21),
  new Digimon ("Digitamamon", "https://www.grindosaur.com/img/official-artwork/digimon/digitamamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Digitamamon.png", 3000, 3000, 400, 400, 400, 300, [0, 0], [5, 15], null, null, [100, 1000], 49),
  new Digimon ("Monzaemon", "https://www.grindosaur.com/img/official-artwork/digimon/monzaemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Monzaemon.png", 3000, 3000, 300, 300, 300, 300, null, [0, 0], [35, 45], null, [50, 1000], 49),
  new Digimon ("Ninjamon", "https://www.grindosaur.com/img/official-artwork/digimon/ninjamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Ninjamon.png", null, 1000, 100, null, 100, null, [0, 1], [5, 15], null, null, [15, 1000], 35),
  new Digimon ("Frigimon", "https://www.grindosaur.com/img/official-artwork/digimon/frigimon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Frigimon.png", null, 1000, null, null, null, 100, [0, 5], [25, 35], 50, null, null, 28),
  new Digimon ("Mojyamon", "https://www.grindosaur.com/img/official-artwork/digimon/mojyamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Mojyamon.png", 1000, null, null, null, null, null, [5, 100], [15, 25], null, null, [0, 5], 28),
  new Digimon ("Tokomon", "https://www.grindosaur.com/img/official-artwork/digimon/tokomon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Tokomon.png", null, null, null, null, null, null, [1, 100], [0, 5], null, null, null, null),
  new Digimon ("Tsunomon", "https://www.grindosaur.com/img/official-artwork/digimon/tsunomon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Tsunomon.png", null, null, null, null, null, null, [1, 100], [0, 5], null, null, null, null),
  new Digimon ("Etemon", "https://www.grindosaur.com/img/official-artwork/digimon/etemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Etemon.png", 2000, 3000, 400, 200, 400, 300, [0, 0], [10, 20], null, null, [50, 1000], 49),
  new Digimon ("Palmon", "https://www.grindosaur.com/img/official-artwork/digimon/palmon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Palmon.png", null, 10, null, null, 1, 1, [1, 100], [10, 20], null, null, null, null),
  new Digimon ("Betamon", "https://www.grindosaur.com/img/official-artwork/digimon/betamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Betamon.png", 10, 10, null, 1, null, null, [1, 100], [10, 20], null, null, null, null),
  new Digimon ("Biyomon", "https://www.grindosaur.com/img/official-artwork/digimon/biyomon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Biyomon.png", null, 10, null, 1, 1, null, [1, 100], [10, 20], null, null, null, null),
  new Digimon ("Patamon", "https://www.grindosaur.com/img/official-artwork/digimon/patamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Patamon.png", 10, null, 1, null, null, 1, [1, 100], [10, 20], null, null, null, null),
  new Digimon ("Elecmon", "https://www.grindosaur.com/img/official-artwork/digimon/elecmon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Elecmon.png", 10, null, 1, null, 1, null, [1, 100], [10, 20], null, null, null, null),
  new Digimon ("Penguinmon", "https://www.grindosaur.com/img/official-artwork/digimon/penguinmon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Penguinmon.png", null, 10, null, 1, null, 1, [1, 100], [10, 20], null, null, null, null),
  new Digimon ("Tanemon", "https://www.grindosaur.com/img/official-artwork/digimon/tanemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Tanemon.png", null, null, null, null, null, null, [1, 100], [0, 5], null, null, null, null),
  new Digimon ("Nanimon", "https://www.grindosaur.com/img/official-artwork/digimon/nanimon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Nanimon.png", null, null, null, null, null, null, null, null, 0, 0, null, null),
  new Digimon ("Botamon", "https://www.grindosaur.com/img/official-artwork/digimon/botamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Botamon.png", null, null, null, null, null, null, null, null, null, null, null, null),
  new Digimon ("Devimon", "https://www.grindosaur.com/img/official-artwork/digimon/devimon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Devimon.png", null, null, null, null, null, null, null, null, null, null, null, null),
  new Digimon ("Kunemon", "https://www.grindosaur.com/img/official-artwork/digimon/kunemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Kunemon.png", null, null, null, null, null, null, null, null, null, null, null, null),
  new Digimon ("Numemon", "https://www.grindosaur.com/img/official-artwork/digimon/numemon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Numemon.png", null, null, null, null, null, null, null, null, null, null, null, null),
  new Digimon ("Poyomon", "https://www.grindosaur.com/img/official-artwork/digimon/poyomon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Poyomon.png", null, null, null, null, null, null, null, null, null, null, null, null),
  new Digimon ("Punimon", "https://www.grindosaur.com/img/official-artwork/digimon/punimon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Punimon.png", null, null, null, null, null, null, null, null, null, null, null, null),
  new Digimon ("Sukamon", "https://www.grindosaur.com/img/official-artwork/digimon/sukamon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Sukamon.png", null, null, null, null, null, null, null, null, null, null, null, null),
  new Digimon ("Vademon", "https://www.grindosaur.com/img/official-artwork/digimon/vademon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Vademon.png", null, null, null, null, null, null, null, null, null, null, null, null),
  new Digimon ("Yuramon", "https://www.grindosaur.com/img/official-artwork/digimon/yuramon.jpg", "https://phoenix-staffel.de/digimon/DigimonWorld/imgs/Yuramon.png", null, null, null, null, null, null, null, null, null, null, null, null),
]

// Función para guardar todos los digimonEvolve
const saveDigimonEvolve = async () => {
  try {
    for (const digi of digimon) {
      await addDoc(collection(db, "digimon"), {
        nombre: digi.nombre,
        imagen: digi.imagen,
        icon: digi.icon,
        vida: digi.vida,
        mp: digi.mp, 
        fuerza: digi.fuerza, 
        defensa: digi.defensa,
        velocidad: digi.velocidad, 
        inteligencia: digi.inteligencia, 
        errores: digi.errores, 
        peso: digi.peso, 
        felicidad: digi.felicidad, 
        disciplina: digi.disciplina, 
        batallas: digi.batallas, 
        tecnicas: digi.tecnicas
      });
    }
    console.log("Todos los DigimonEvolve guardados con éxito");
  } catch (error) {
    console.error("Error al guardar Digimon:", error);
  }
};
  return (
    <div><button onClick={saveDigimonEvolve}>Enviar</button></div>
    
  )
}

export default Databse