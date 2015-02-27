var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Entidades;
(function (Entidades) {
    var Oeste = (function (_super) {
        __extends(Oeste, _super);
        function Oeste() {
            _super.call(this, Entidades.Direcao.oeste);
        }
        Oeste.prototype.daEsquerda = function () {
            return new Entidades.Sul();
        };

        Oeste.prototype.daDireita = function () {
            return new Entidades.Norte();
        };

        Oeste.prototype.mover = function (coordenada) {
            coordenada.diminuirEixoX();
        };
        return Oeste;
    })(Entidades.Direcao);
    Entidades.Oeste = Oeste;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Oeste.js.map
