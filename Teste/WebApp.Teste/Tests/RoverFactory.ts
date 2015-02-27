/// <reference path="../../webapp/entidades/roverfactory.ts" />
describe("Rover Factory Teste", () => {
    it("Consigo criar um Rover apartir de um comando", () => {
        var comando = "1 2 N";
        var limite = new Entidades.Coordenada(5, 5);
        var terreno = new Entidades.Terreno(limite);

        var rover = Entidades.RoverFactory.criar(terreno, comando);

        expect(comando).toBe(rover.localizacao());
    });
}) 