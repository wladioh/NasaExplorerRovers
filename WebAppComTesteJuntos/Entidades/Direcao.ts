module Entidades {
    export class Direcao {
        public static norte = new Direcao("N");
        public static leste = new Direcao("E");
        public static sul = new Direcao("S");
        public static oeste = new Direcao("W");

        private descricao: string;
        constructor(descricao: string) {
            this.descricao = descricao;
        }

        public toString() {
            return this.descricao;
        }

        static criar(letra: string): Direcao {
            switch (letra.toUpperCase()) {
                case this.norte.toString():
                    return this.norte;
                case this.leste.toString():
                    return this.leste;
                case this.oeste.toString():
                    return this.oeste;
                case this.sul.toString():
                    return this.sul;
                default:
                    throw "direção inexistente!";
            }
        }
    }
}
