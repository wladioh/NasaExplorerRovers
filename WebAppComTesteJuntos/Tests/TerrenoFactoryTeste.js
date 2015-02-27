/// <reference path="../../webapp/entidades/TerrenoFactory.ts" />
describe("Terreno Factory Teste", function () {
    it("Criar um terreno apartir de um comando", function () {
        var comando = "5 5";

        var terreno = Entidades.TerrenoFactory.criar(comando);

        expect(comando).toBe(terreno.tamanho());
    });
});
//# sourceMappingURL=TerrenoFactoryTeste.js.map
