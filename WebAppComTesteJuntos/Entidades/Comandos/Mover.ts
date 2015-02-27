module Entidades {
    export class Mover extends Comando {
        constructor() {
            super("M");
        }

        public enviar(rover: Rover) {
            rover.mover();
        }
    }
} 