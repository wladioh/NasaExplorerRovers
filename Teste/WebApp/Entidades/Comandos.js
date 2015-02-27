var Entidades;
(function (Entidades) {
    var Comandos = (function () {
        function Comandos(descricao) {
            this.descricao = descricao;
        }
        Comandos.prototype.toString = function () {
            return this.descricao;
        };

        Comandos.criar = function (comando) {
            switch (comando) {
                case this.esquerda.toString():
                    return this.esquerda;
                case this.direita.toString():
                    return this.direita;
                case this.mover.toString():
                    return this.mover;
                default:
                    throw "comando inexistente!";
            }
        };
        Comandos.esquerda = new Comandos("L");
        Comandos.direita = new Comandos("R");
        Comandos.mover = new Comandos("M");
        return Comandos;
    })();
    Entidades.Comandos = Comandos;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Comandos.js.map
