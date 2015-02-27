module Servicos {
    export class ExploracaoServico {
        explorar(listaDeComandos: Array<string>): Array<string> {
            var localizacoes = new Array<string>();
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
        }
    }
} 