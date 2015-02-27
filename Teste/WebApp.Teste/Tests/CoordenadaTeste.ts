/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../webapp/entidades/Coordenada.ts" />

describe("Coordenada Testes", () => {

    var eixoX = 0;
    var eixoY = 0;

    var coordenada: Entidades.Coordenada;

    beforeEach(() => {
        coordenada = new Entidades.Coordenada(eixoX, eixoY);
    });

    it("Deve diminuir em 1 eixo y", () => {
        var novoEixoY = eixoY - 1;

        coordenada.diminuirEixoY();

        expect(novoEixoY).toBe(coordenada.getEixoY());
    });

    it("Deve aumentar em 1 eixo y", () => {
        var novoEixoY = eixoY + 1;

        coordenada.aumentarEixoY();

        expect(novoEixoY).toBe(coordenada.getEixoY());
    });

    it("Deve diminuir em 1 eixo X", () => {
        var novoEixoX = eixoX - 1;

        coordenada.diminuirEixoX();

        expect(novoEixoX).toBe(coordenada.getEixoX());
    });

    it("Deve aumentar em 1 eixo X", () => {
        var novoEixoX = eixoX + 1;

        coordenada.aumentarEixoX();

        expect(novoEixoX).toBe(coordenada.getEixoX());
    });  
});
