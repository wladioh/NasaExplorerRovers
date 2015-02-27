/// <reference path="../../webapp/entidades/comandos/comando.ts" />
/// <reference path="../../webapp/entidades/comandos/direita.ts" />
/// <reference path="../../webapp/entidades/comandos/esquerda.ts" />
/// <reference path="../../webapp/entidades/comandos/mover.ts" />

describe("Comando Teste", () => {
    it("Criar comando esquerda apartir da letra L", () => {
        var letra = "L";

        var comando = Entidades.Comando.criar(letra);

        expect(letra).toBe(comando.toString());
    });

    it("Criar comando direita apartir da letra R", () => {
        var letra = "R";

        var comando = Entidades.Comando.criar(letra);

        expect(letra).toBe(comando.toString());
    });

    it("Criar comando mover apartir da letra M", () => {
        var letra = "M";

        var comando = Entidades.Comando.criar(letra);

        expect(letra).toBe(comando.toString());
    });

    it("Não deve criar comando com letra diferente de L R ou M", () => {
        var letra = "O";

        var acao = () => Entidades.Comando.criar(letra);

        expect(acao).toThrow();
    });

    it("Criar lista de comandos apartir de uma lista de letras", () => {
        var listaDeLetras: Array<string> = ["L", "R", "M"];

        var comandos = Entidades.Comando.criarLista(listaDeLetras);

        expect(comandos.length).toBe(3);
    });

    it("Enviar comando esquerda deve girar Rover para esquerda", () => {
        var comando = new Entidades.Esquerda();

        var limite = new Entidades.Coordenada(5, 5);

        var terreno = new Entidades.Terreno(limite);
        var coordenada = new Entidades.Coordenada(2, 2);
        var direcao = Entidades.Direcao.criar("N");
        var rover = new Entidades.Rover(terreno, coordenada, direcao);

        comando.enviar(rover);

        expect("2 2 W").toBe(rover.localizacao());
    });

    it("Enviar comando direita deve girar Rover para direita", () => {
        var comando = new Entidades.Direita();

        var limite = new Entidades.Coordenada(5, 5);

        var terreno = new Entidades.Terreno(limite);
        var coordenada = new Entidades.Coordenada(2, 2);
        var direcao = Entidades.Direcao.criar("N");
        var rover = new Entidades.Rover(terreno, coordenada, direcao);

        comando.enviar(rover);

        expect("2 2 E").toBe(rover.localizacao());
    });

    it("Enviar comando mover deve mover Rover", () => {
        var comando = new Entidades.Mover();

        var limite = new Entidades.Coordenada(5, 5);

        var terreno = new Entidades.Terreno(limite);
        var coordenada = new Entidades.Coordenada(2, 2);
        var direcao = Entidades.Direcao.criar("N");
        var rover = new Entidades.Rover(terreno, coordenada, direcao);

        comando.enviar(rover);

        expect("2 3 N").toBe(rover.localizacao());
    });
}) 