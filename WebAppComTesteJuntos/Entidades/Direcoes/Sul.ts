module Entidades {
    export class Sul extends Direcao {
        constructor() {
            super(Direcao.sul);
        }

        public daEsquerda(): Direcao {
            return new Leste();
        }

        public daDireita(): Direcao {
            return new Oeste();
        }

        public mover(coordenada: Entidades.Coordenada) {
            coordenada.diminuirEixoY();
        }
    }
}  