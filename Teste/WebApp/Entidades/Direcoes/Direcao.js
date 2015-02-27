var Entidades;
(function (Entidades) {
    var Direcao = (function () {
        function Direcao(descricao) {
            this.descricao = descricao;
        }
        Direcao.prototype.toString = function () {
            return this.descricao;
        };

        Direcao.criar = function (letra) {
            switch (letra.toUpperCase()) {
                case this.norte:
                    return new Entidades.Norte();
                case this.leste:
                    return new Entidades.Leste();
                case this.oeste:
                    return new Entidades.Oeste();
                case this.sul:
                    return new Entidades.Sul();
                default:
                    throw "direção inexistente!";
            }
        };

        Direcao.prototype.daEsquerda = function () {
            throw "Metodo abstrato";
        };

        Direcao.prototype.daDireita = function () {
            throw "Metodo abstrato";
        };

        Direcao.prototype.mover = function (coordenada) {
            throw "Metodo abstrato";
        };

        Direcao.prototype.podeMover = function (terreno, coordenada) {
            var coordenadaFutura = new Entidades.Coordenada(coordenada.getEixoX(), coordenada.getEixoY());
            this.mover(coordenadaFutura);
            return terreno.estaDentro(coordenadaFutura);
        };
        Direcao.norte = "N";
        Direcao.leste = "E";
        Direcao.sul = "S";
        Direcao.oeste = "W";
        return Direcao;
    })();
    Entidades.Direcao = Direcao;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Direcao.js.map
