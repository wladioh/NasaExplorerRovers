module Entidades {
    export class Controlador {
        controlar(rover: Rover, comandos: Array<Comando>) {
            for (var i = 0; i < comandos.length; i++) {
                var comando = comandos[i];
                comando.enviar(rover);
            }
        }
    }
} 