var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Entidades;
(function (Entidades) {
    var Leste = (function (_super) {
        __extends(Leste, _super);
        function Leste() {
            _super.call(this, Entidades.Direcao.leste);
        }
        Leste.prototype.daEsquerda = function () {
            return new Entidades.Norte();
        };

        Leste.prototype.daDireita = function () {
            return new Entidades.Sul();
        };

        Leste.prototype.mover = function (coordenada) {
            coordenada.aumentarEixoX();
        };
        return Leste;
    })(Entidades.Direcao);
    Entidades.Leste = Leste;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Leste.js.map
