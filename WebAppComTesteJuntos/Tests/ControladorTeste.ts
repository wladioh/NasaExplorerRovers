/// <reference path="../../webapp/entidades/Controlador.ts" />
describe("Controlador Teste", () => {

    var controlador: Entidades.Controlador;
    var rover: Entidades.Rover;

    beforeEach(() => {
        var limite = new Entidades.Coordenada(5, 5);

        var terreno = new Entidades.Terreno(limite);
        var coordenada = new Entidades.Coordenada(2, 2);
        var direcao = Entidades.Direcao.criar("N");
        rover = new Entidades.Rover(terreno, coordenada, direcao);

        controlador = new Entidades.Controlador();
    });

    it("Deve controlar apartir dos comandos recibidos", () => {
        var comandos = Entidades.Comando.criarLista("MRML".split(""));

        controlador.controlar(rover, comandos);

        expect("3 3 N").toBe(rover.localizacao());
    });
})  