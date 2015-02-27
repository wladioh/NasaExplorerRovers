module Entidades {
    export class TerrenoFactory {
        public static criar(comando: string): Terreno {
            var comandos = comando.split(" ");
            var eixoX = Number(comandos[0]);
            var eixoY = Number(comandos[1]);

            var limite = new Coordenada(eixoX, eixoY);

            return new Terreno(limite);
        }
    }
} 