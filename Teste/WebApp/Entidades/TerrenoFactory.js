var Entidades;
(function (Entidades) {
    var TerrenoFactory = (function () {
        function TerrenoFactory() {
        }
        TerrenoFactory.criar = function (comando) {
            var comandos = comando.split(" ");
            var eixoX = Number(comandos[0]);
            var eixoY = Number(comandos[1]);

            var limite = new Entidades.Coordenada(eixoX, eixoY);

            return new Entidades.Terreno(limite);
        };
        return TerrenoFactory;
    })();
    Entidades.TerrenoFactory = TerrenoFactory;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=TerrenoFactory.js.map
