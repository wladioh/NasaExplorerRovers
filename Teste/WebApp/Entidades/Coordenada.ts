module Entidades {
    export class Coordenada {

        getEixoY(): number { return this.eixoY; }
        getEixoX(): number { return this.eixoX; }

        private eixoY: number;
        private eixoX: number;

        constructor(eixoX: number, eixoY: number) {
            this.eixoY = eixoY;
            this.eixoX = eixoX;
        }

        public toString(): string {
            return this.eixoX + ' ' + this.eixoY;
        }

        public aumentarEixoY() {
            this.eixoY ++;
        }

        public diminuirEixoX() {
            this.eixoX --;
        }

        public aumentarEixoX() {
            this.eixoX++;
        }

        public diminuirEixoY() {
            this.eixoY --;
        }
   }
} 