var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Entidades;
(function (Entidades) {
    var Direita = (function (_super) {
        __extends(Direita, _super);
        function Direita() {
            _super.call(this, "R");
        }
        Direita.prototype.enviar = function (rover) {
            rover.girarParaDireita();
        };
        return Direita;
    })(Entidades.Comando);
    Entidades.Direita = Direita;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Direita.js.map
