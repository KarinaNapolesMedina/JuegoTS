"use strict";
var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.vida = 100;
        this.nivel = 100;
        this.nombre = "";
        this.kamehameha = 30;
        this.genkidama = 25;
        this.ataquek = 10;
        this.nombre = nombre;
    }
    Jugador.prototype.curar = function (jugadorObjetivo) {
        if (this.vida >= 100) {
            console.log('No se puede usar esta habilidad');
        }
        else {
            jugadorObjetivo.vida += 20;
            this.nivel -= 20;
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.ataque = function (jugadorObjetivo) {
        jugadorObjetivo.vida -= this.ataquek;
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.habilidadk = function (jugadorObjetivo) {
        if (this.nivel >= 30) {
            jugadorObjetivo.vida -= 45;
            this.nivel -= this.kamehameha;
        }
        else {
            console.log('No hay poder suficiente');
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.habilidada = function (jugadorObjetivo) {
        if (this.nivel >= 25) {
            jugadorObjetivo.vida -= 40;
            this.nivel -= this.genkidama;
        }
        else {
            console.log('No hay poder suficiente');
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.revivir = function (jugadorObjetivo) {
        if (this.vida <= 0) {
            jugadorObjetivo.vida += 30;
        }
        else {
            console.log('No se puede usar esta habilidad');
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.recuperarNivel = function (jugadorObjetivo) {
        if (this.nivel >= 100) {
            console.log('No se puede usar esta habilidad');
        }
        else {
            jugadorObjetivo.nivel += 20;
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.status = function (jugadorObjetivo) {
        console.log(jugadorObjetivo);
        console.log(this);
    };
    return Jugador;
}());
var goku = new Jugador('goku');
var vegeta = new Jugador('vegeta');
console.log(goku);
console.log(vegeta);
