/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../webapp/entidades/rover.ts" />

describe("Rover Testes", () => {
    var coordenadaX = 1;
    var coordenadaY = 1;
    var direcao = new Entidades.Norte();
    var rover: Entidades.Rover;
    var terreno: Entidades.Terreno;

    beforeEach(() => {
        var coordenadasLimite = new Entidades.Coordenada(5, 5);
        terreno = new Entidades.Terreno(coordenadasLimite);

        var coordenada = new Entidades.Coordenada(coordenadaX, coordenadaY);

        rover = new Entidades.Rover(terreno, coordenada, direcao);
    });

    it("Deve retornar sua posição com sua direção", () => {
        expect(coordenadaX + " " + coordenadaY + " " + direcao.toString()).toBe(rover.localizacao());
    });

    it("Deve girar para esquerda", () => {
        rover.girarParaEsquerda();

        expect(coordenadaX + " " + coordenadaY + " " + Entidades.Direcao.oeste.toString()).toBe(rover.localizacao());
    });

    it("Deve girar para direita", () => {
        rover.girarParaDireita();

        expect(coordenadaX + " " + coordenadaY + " " + Entidades.Direcao.leste.toString()).toBe(rover.localizacao());
    });

    it("Deve mover uma posição para na direção norte", () => {
        var novaCoordenadaY = coordenadaY + 1;

        rover.mover();

        expect(coordenadaX + " " + novaCoordenadaY + " " + direcao.toString()).toBe(rover.localizacao());
    });

    it("Deve mover na direção oeste", () => {
        var novaCoordenadaX = coordenadaX - 1;

        rover.girarParaEsquerda();

        rover.mover();

        expect(novaCoordenadaX + " " + coordenadaY + " " +Entidades.Direcao.oeste.toString()).toBe(rover.localizacao());
    });

    it("Deve mover na direção leste", () => {
        var novaCoordenadaX = coordenadaX + 1;

        rover.girarParaDireita();

        rover.mover();

        expect(novaCoordenadaX + " " + coordenadaY + " " + Entidades.Direcao.leste.toString()).toBe(rover.localizacao());
    });

    it("Deve mover na direção sul", () => {
        var novaCoordenadaY = coordenadaY - 1;

        rover.girarParaDireita();
        rover.girarParaDireita();

        rover.mover();

        expect(coordenadaX + " " + novaCoordenadaY+ " " + Entidades.Direcao.sul.toString()).toBe(rover.localizacao());
    });

    it("Deve ter um terreno", () => {
        expect(terreno).toBe(rover.getTerreno());
    });
});
 