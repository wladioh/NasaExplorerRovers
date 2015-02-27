var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Entidades;
(function (Entidades) {
    var Mover = (function (_super) {
        __extends(Mover, _super);
        function Mover() {
            _super.call(this, "M");
        }
        Mover.prototype.enviar = function (rover) {
            rover.mover();
        };
        return Mover;
    })(Entidades.Comando);
    Entidades.Mover = Mover;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Mover.js.map
