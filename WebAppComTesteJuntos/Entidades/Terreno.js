var Entidades;
(function (Entidades) {
    var Terreno = (function () {
        function Terreno(coordenadasLimite) {
            this.coordenadasLimite = coordenadasLimite;
        }
        Terreno.prototype.tamanho = function () {
            return this.coordenadasLimite.toString();
        };

        Terreno.prototype.verificarEixoX = function (coordenada) {
            var eixoXMaiorIgualqueZero = coordenada.getEixoX() >= 0;
            var eixoXMenorQueLimite = coordenada.getEixoX() < this.coordenadasLimite.getEixoX();
            return eixoXMaiorIgualqueZero && eixoXMenorQueLimite;
        };

        Terreno.prototype.verificarEixoY = function (coordenada) {
            var eixoYMaiorIgualqueZero = coordenada.getEixoY() >= 0;
            var eixoYMenorQueLimite = coordenada.getEixoY() < this.coordenadasLimite.getEixoY();
            return eixoYMaiorIgualqueZero && eixoYMenorQueLimite;
        };

        Terreno.prototype.estaDentro = function (coordenada) {
            var estaDentroDoEixoX = this.verificarEixoX(coordenada);
            var estaDentroDoEixoY = this.verificarEixoY(coordenada);
            return estaDentroDoEixoX && estaDentroDoEixoY;
        };
        return Terreno;
    })();
    Entidades.Terreno = Terreno;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Terreno.js.map
