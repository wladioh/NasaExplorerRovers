/// <reference path="../../webapp/Servicos/ExploracaoServico.ts" />
describe("Exploração servico Teste", function () {
    it("Consigo criar um Rover apartir de um comando", function () {
        var servico = new Servicos.ExploracaoServico();

        var comandos = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];

        var localizacoes = servico.explorar(comandos);

        expect("1 3 N").toBe(localizacoes[0]);
        expect("5 1 E").toBe(localizacoes[1]);
    });
});
//# sourceMappingURL=ExploracaoServicoTeste.js.map
