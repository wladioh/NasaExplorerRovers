var Entidades;
(function (Entidades) {
    var RoverFactory = (function () {
        function RoverFactory() {
        }
        RoverFactory.criar = function (terreno, comando) {
            var comandos = comando.split(" ");
            var eixoX = Number(comandos[0]);
            var eixoY = Number(comandos[1]);
            var direcao = comandos[2];

            var coordenada = new Entidades.Coordenada(eixoX, eixoY);

            var rover = new Entidades.Rover(terreno, coordenada, Entidades.Direcao.criar(direcao));

            return rover;
        };
        return RoverFactory;
    })();
    Entidades.RoverFactory = RoverFactory;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=RoverFactory.js.map
