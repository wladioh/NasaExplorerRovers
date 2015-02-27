module Entidades {
    export class Comando {
        public static esquerda = "L";
        public static direita = "R";
        public static mover = "M";

        private descricao: string;

        constructor(descricao: string) {
            this.descricao = descricao;
        }

        public toString() {
            return this.descricao;
        }

        static criar(comando: string): Comando {
            switch (comando.toUpperCase()) {
                case this.esquerda:
                    return new Esquerda();
                case this.direita:
                    return new Direita();
                case this.mover:
                    return new Mover();
                default:
                    throw "comando inexistente!";
            }
        }

        static criarLista(listaDeLetras: Array<string>): Array<Comando> {
            var comandos = new Array<Comando>();
            for (var i = 0; i < listaDeLetras.length; i++) {
                comandos.push(this.criar(listaDeLetras[i]));
            }
            return comandos;
        }

        public enviar(rover: Rover) {
            throw "Metodo abstrato";
        }
    }
} 