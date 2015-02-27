var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Entidades;
(function (Entidades) {
    var Esquerda = (function (_super) {
        __extends(Esquerda, _super);
        function Esquerda() {
            _super.call(this, "L");
        }
        Esquerda.prototype.enviar = function (rover) {
            rover.girarParaEsquerda();
        };
        return Esquerda;
    })(Entidades.Comando);
    Entidades.Esquerda = Esquerda;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Esquerda.js.map
