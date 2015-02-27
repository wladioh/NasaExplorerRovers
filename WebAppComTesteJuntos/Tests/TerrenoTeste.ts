/// <reference path="../../webapp/entidades/coordenada.ts" />
/// <reference path="../../webapp/entidades/terreno.ts" />
describe("Terreno Teste",() => {
    var terreno: Entidades.Terreno;

    beforeEach(() => {
        var coordenada = new Entidades.Coordenada(5, 5);

        terreno = new Entidades.Terreno(coordenada);
    });

    it("Deve ter uma coordenada limite", () => {
        expect("5 5").toBe(terreno.tamanho());
    });

    it("Verifico se coordenada esta dentro dos limites do Eixo X e Eixo Y do terreno", () => {
        var coordenada = new Entidades.Coordenada(1, 1);

        var resultado = terreno.estaDentro(coordenada);

        expect(true).toBe(resultado);
    });

    it("Verifico se coordenada esta fora dos limites minimo do Eixo X do terreno", () => {
        var coordenada = new Entidades.Coordenada(-1, 1);

        var resultado = terreno.estaDentro(coordenada);

        expect(false).toBe(resultado);
    });

    it("Verifico se coordenada esta fora dos limites minimo do Eixo y do terreno", () => {
        var coordenada = new Entidades.Coordenada(1, -1);

        var resultado = terreno.estaDentro(coordenada);

        expect(false).toBe(resultado);
    });

    it("Verifico se coordenada esta fora dos limites maximo do Eixo X do terreno", () => {
        var coordenada = new Entidades.Coordenada(5, 1);

        var resultado = terreno.estaDentro(coordenada);

        expect(false).toBe(resultado);
    });

    it("Verifico se coordenada esta fora dos limites maximo do Eixo y do terreno", () => {
        var coordenada = new Entidades.Coordenada(1, 5);

        var resultado = terreno.estaDentro(coordenada);

        expect(false).toBe(resultado);
    });
}) 