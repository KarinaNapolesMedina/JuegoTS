class Jugador {
    vida = 100;
    nivel = 100;
    nombre = "";
    kamehameha = 30;
    genkidama = 25;
    ataquek = 10;
    constructor(nombre: string){
        this.nombre = nombre;
    }

    curar(jugadorObjetivo: { vida: number; }){
        if (this.vida >= 100) {
            console.log('No se puede usar esta habilidad');
        } else {
            jugadorObjetivo.vida += 20;
            this.nivel -= 20;
        }
        this.status(jugadorObjetivo);
    }

    ataque(jugadorObjetivo: { vida: number; }){
        jugadorObjetivo.vida -= this.ataquek;
        this.status(jugadorObjetivo);
    }

    habilidadk(jugadorObjetivo: { vida: number; }){
        if (this.nivel >= 30) {
            jugadorObjetivo.vida -= 45;
            this.nivel -= this.kamehameha;
        }else{
            console.log('No hay poder suficiente')
        }
        this.status(jugadorObjetivo);
    }

    habilidada(jugadorObjetivo: { vida: number; }){
        if (this.nivel >= 25) {
            jugadorObjetivo.vida -= 40;
            this.nivel -= this.genkidama;
        } else {
            console.log('No hay poder suficiente')
        }
        this.status(jugadorObjetivo);
    }

    revivir(jugadorObjetivo: { vida: number; }){
        if (this.vida <= 0) {
            jugadorObjetivo.vida += 30;
        }else{
            console.log('No se puede usar esta habilidad');
        }
        this.status(jugadorObjetivo);
    }
    recuperarNivel(jugadorObjetivo: { nivel: number; }){
        if (this.nivel >= 100) {
            console.log('No se puede usar esta habilidad');
        } else {
            jugadorObjetivo.nivel += 20;
        }
        this.status(jugadorObjetivo);
    }
    status(jugadorObjetivo: { vida?: number; nivel?: number; }){
        console.log(jugadorObjetivo);
        console.log(this);
    }
}

let goku = new Jugador('goku');
let vegeta = new Jugador('vegeta'); 

console.log(goku);
console.log(vegeta);
