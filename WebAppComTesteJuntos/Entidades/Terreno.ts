module Entidades {
    export class Terreno {
        private coordenadasLimite: Coordenada;

        constructor(coordenadasLimite: Coordenada) {
            this.coordenadasLimite = coordenadasLimite;
        }

        tamanho(): string {
            return this.coordenadasLimite.toString();
        }

        private verificarEixoX(coordenada: Coordenada) {
            var eixoXMaiorIgualqueZero = coordenada.getEixoX() >= 0;
            var eixoXMenorQueLimite = coordenada.getEixoX() < this.coordenadasLimite.getEixoX();
            return eixoXMaiorIgualqueZero && eixoXMenorQueLimite;
        }

        private verificarEixoY(coordenada: Coordenada) {
            var eixoYMaiorIgualqueZero = coordenada.getEixoY() >= 0;
            var eixoYMenorQueLimite = coordenada.getEixoY() < this.coordenadasLimite.getEixoY();
            return eixoYMaiorIgualqueZero && eixoYMenorQueLimite;
        }

        estaDentro(coordenada: Coordenada): boolean {
            var estaDentroDoEixoX = this.verificarEixoX(coordenada);
            var estaDentroDoEixoY = this.verificarEixoY(coordenada);
            return estaDentroDoEixoX && estaDentroDoEixoY;
        }
    }
} 