module Entidades {
    export class Leste extends Direcao{
        constructor() {
            super(Direcao.leste);
        }

        public daEsquerda(): Direcao {
            return new Norte();
        }

        public daDireita(): Direcao{
            return new Sul();
        }

        public mover(coordenada: Entidades.Coordenada) {
            coordenada.aumentarEixoX();
        }
    }
} 