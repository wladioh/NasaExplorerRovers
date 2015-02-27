var Servicos;
(function (Servicos) {
    var ExploracaoServico = (function () {
        function ExploracaoServico() {
        }
        ExploracaoServico.prototype.explorar = function (listaDeComandos) {
            var localizacoes = new Array();
            var limitesDoTerreno = listaDeComandos[0];
            var terreno = Entidades.TerrenoFactory.criar(limitesDoTerreno);
            var controlador = new Entidades.Controlador();
            for (var index = 1; index < listaDeComandos.length; index++) {
                var posicaoDoRover = listaDeComandos[index];
                index++;
                var comandosDoRover = listaDeComandos[index];

                var rover = Entidades.RoverFactory.criar(terreno, posicaoDoRover);
                var comandos = Entidades.Comando.criarLista(comandosDoRover.split(""));

                controlador.controlar(rover, comandos);
                localizacoes.push(rover.localizacao());
            }
            return localizacoes;
        };
        return ExploracaoServico;
    })();
    Servicos.ExploracaoServico = ExploracaoServico;
})(Servicos || (Servicos = {}));
//# sourceMappingURL=ExploracaoServico.js.map
