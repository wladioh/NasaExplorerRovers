module Entidades {
    export class RoverFactory {
        public static criar(terreno: Terreno, comando: string): Rover {
            var comandos = comando.split(" ");
            var eixoX = Number(comandos[0]);
            var eixoY = Number(comandos[1]);
            var direcao = comandos[2];

            var coordenada = new Coordenada(eixoX, eixoY);

            var rover = new Rover(terreno, coordenada, Direcao.criar(direcao));

            return rover;
        }
    }
} 