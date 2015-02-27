module Entidades {
    export class Direcao {
        public static norte = "N";
        public static leste = "E";
        public static sul = "S";
        public static oeste = "W";

        private descricao: string;
        constructor(descricao: string) {
            this.descricao = descricao;
        }

        public toString() {
            return this.descricao;
        }

        static criar(letra: string): Direcao {
            switch (letra.toUpperCase()) {
                case this.norte:
                    return new Norte();
                case this.leste:
                    return new Leste();
                case this.oeste:
                    return new Oeste();
                case this.sul:
                    return new Sul();
                default:
                    throw "direção inexistente!";
            }
        }

        public daEsquerda(): Direcao {
            throw "Metodo abstrato";
        }

        public daDireita(): Direcao {
            throw "Metodo abstrato";            
        }


        public mover(coordenada: Entidades.Coordenada) {
            throw "Metodo abstrato";
        }
    }
}
