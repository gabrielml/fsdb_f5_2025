class Game {
    constructor(){
        this.container = document.getElementById("game-container");
        this.personaje = null;
        this.monedas = [];
        this.puntuacion = 0;

        this.crearEscenario();
        this.agregarEventos();

    }

    crearEscenario(){
        this.personaje = new Personaje();
        this.container.appendChild(this.personaje.element);
        for(let i = 0; i < 5; i++) {
            const moneda = new Moneda();
            this.monedas.push(moneda);
            this.container.appendChild(moneda.element);
        }
    }

    agregarEventos(){
        window.addEventListener("keydown", (e) => {this.personaje.mover(e)});
        this.checkColisiones();
    }

    checkColisiones(){

    }

}

class Personaje {

}

class Moneda {

}

const juego = new Game();