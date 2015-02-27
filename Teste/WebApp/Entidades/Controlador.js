var Entidades;
(function (Entidades) {
    var Controlador = (function () {
        function Controlador() {
        }
        Controlador.prototype.controlar = function (rover, comandos) {
            for (var i = 0; i < comandos.length; i++) {
                var comando = comandos[i];
                comando.enviar(rover);
            }
        };
        return Controlador;
    })();
    Entidades.Controlador = Controlador;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Controlador.js.map
