/// <reference path="direcoes/direcao.ts" />
/// <reference path="coordenada.ts" />
module Entidades {
    export class Rover {
        private coordenada: Coordenada;
        private direcao: Direcao;
        private terreno: Terreno;

        constructor(terreno: Terreno, coordenada: Coordenada, direcao: Direcao) {
            this.coordenada = coordenada;
            this.direcao = direcao;
            this.terreno = terreno;
        }

        public localizacao(): string {
            return this.coordenada.toString() + " " + this.direcao.toString();
        }

        public girarParaEsquerda() {
            this.direcao = this.direcao.daEsquerda();
        }

        public girarParaDireita() {
            this.direcao = this.direcao.daDireita();
        }

        public mover() {
            this.direcao.mover(this.coordenada);
        }

        getTerreno(): Terreno {
            return this.terreno;
        }
    }
}