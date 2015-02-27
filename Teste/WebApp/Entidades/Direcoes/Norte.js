var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Entidades;
(function (Entidades) {
    var Norte = (function (_super) {
        __extends(Norte, _super);
        function Norte() {
            _super.call(this, Entidades.Direcao.norte);
        }
        Norte.prototype.daEsquerda = function () {
            return new Entidades.Oeste();
        };

        Norte.prototype.daDireita = function () {
            return new Entidades.Leste();
        };

        Norte.prototype.mover = function (coordenada) {
            coordenada.aumentarEixoY();
        };
        return Norte;
    })(Entidades.Direcao);
    Entidades.Norte = Norte;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Norte.js.map
