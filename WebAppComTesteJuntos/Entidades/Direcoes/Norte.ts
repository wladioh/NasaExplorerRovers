module Entidades {
    export class Norte extends Direcao {
        constructor() {
            super(Direcao.norte);
        }

        public daEsquerda(): Direcao {
            return new Oeste();
        }

        public daDireita(): Direcao {
            return new Leste();
        }

        public mover(coordenada: Entidades.Coordenada) {
            coordenada.aumentarEixoY();
        }
    }
}  