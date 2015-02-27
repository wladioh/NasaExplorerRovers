module Entidades {
    export class Direita extends Comando {
        constructor() {
            super("R");
        }

        public enviar(rover: Rover) {
            rover.girarParaDireita();
        }
    }
} 