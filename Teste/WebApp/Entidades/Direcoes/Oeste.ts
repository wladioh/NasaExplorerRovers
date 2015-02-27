module Entidades {
    export class Oeste extends Direcao {
        constructor() {
            super(Direcao.oeste);
        }

        public daEsquerda(): Direcao {
            return new Sul();
        }

        public daDireita(): Direcao {
            return new Norte();
        }

        public mover(coordenada: Entidades.Coordenada) {
            coordenada.diminuirEixoX();
        }
    }
}  