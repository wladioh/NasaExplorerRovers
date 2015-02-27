var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Entidades;
(function (Entidades) {
    var Sul = (function (_super) {
        __extends(Sul, _super);
        function Sul() {
            _super.call(this, Entidades.Direcao.sul);
        }
        Sul.prototype.daEsquerda = function () {
            return new Entidades.Leste();
        };

        Sul.prototype.daDireita = function () {
            return new Entidades.Oeste();
        };

        Sul.prototype.mover = function (coordenada) {
            coordenada.diminuirEixoY();
        };
        return Sul;
    })(Entidades.Direcao);
    Entidades.Sul = Sul;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Sul.js.map
