module Entidades {
    export class Esquerda extends Comando {
        constructor() {
            super("L");
        }

        public enviar(rover: Rover) {
            rover.girarParaEsquerda();
        }
    }
} 