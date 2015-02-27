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
        };
        Direcao.norte = new Direcao("N");
        Direcao.leste = new Direcao("E");
        Direcao.sul = new Direcao("S");
        Direcao.oeste = new Direcao("W");
        return Direcao;
    })();
    Entidades.Direcao = Direcao;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Direcao.js.map
