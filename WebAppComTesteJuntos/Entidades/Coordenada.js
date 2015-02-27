var Entidades;
(function (Entidades) {
    var Coordenada = (function () {
        function Coordenada(eixoX, eixoY) {
            this.eixoY = eixoY;
            this.eixoX = eixoX;
        }
        Coordenada.prototype.getEixoY = function () {
            return this.eixoY;
        };
        Coordenada.prototype.getEixoX = function () {
            return this.eixoX;
        };

        Coordenada.prototype.toString = function () {
            return this.eixoX + ' ' + this.eixoY;
        };

        Coordenada.prototype.aumentarEixoY = function () {
            this.eixoY++;
        };

        Coordenada.prototype.diminuirEixoX = function () {
            this.eixoX--;
        };

        Coordenada.prototype.aumentarEixoX = function () {
            this.eixoX++;
        };

        Coordenada.prototype.diminuirEixoY = function () {
            this.eixoY--;
        };
        return Coordenada;
    })();
    Entidades.Coordenada = Coordenada;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Coordenada.js.map
