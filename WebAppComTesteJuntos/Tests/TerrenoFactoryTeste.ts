/// <reference path="../../webapp/entidades/TerrenoFactory.ts" />
describe("Terreno Factory Teste", () => {
    it("Criar um terreno apartir de um comando", () => {
        var comando = "5 5";

        var terreno = Entidades.TerrenoFactory.criar(comando);

        expect(comando).toBe(terreno.tamanho());
    });
}) 