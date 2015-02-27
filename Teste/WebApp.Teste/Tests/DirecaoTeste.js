/// <reference path="../../webapp/entidades/direcoes/direcao.ts" />
/// <reference path="../../webapp/entidades/direcoes/leste.ts" />
/// <reference path="../../webapp/entidades/direcoes/norte.ts" />
/// <reference path="../../webapp/entidades/direcoes/oeste.ts" />
/// <reference path="../../webapp/entidades/direcoes/sul.ts" />
describe("Direção Teste", function () {
    it("Criar direção Norte apartir da letra N", function () {
        var letra = "N";

        var comando = Entidades.Direcao.criar(letra);

        expect(letra).toBe(comando.toString());
    });

    it("Criar direção Sul apartir da letra S", function () {
        var letra = "S";

        var comando = Entidades.Direcao.criar(letra);

        expect(letra).toBe(comando.toString());
    });

    it("Criar direção Lest apartir da letra E", function () {
        var letra = "E";

        var comando = Entidades.Direcao.criar(letra);

        expect(letra).toBe(comando.toString());
    });

    it("Criar direção Oeste apartir da letra W", function () {
        var letra = "W";

        var comando = Entidades.Direcao.criar(letra);

        expect(letra).toBe(comando.toString());
    });

    it("Não deve criar direção com letra diferente de N, S, E, W", function () {
        var letra = "O";

        var acao = function () {
            return Entidades.Direcao.criar(letra);
        };

        expect(acao).toThrow();
    });

    it("Esquerda da direção norte deve ser oeste", function () {
        var norte = new Entidades.Norte();

        var esquerda = norte.daEsquerda();

        expect(esquerda.toString()).toBe(Entidades.Direcao.oeste);
    });

    it("Esquerda da direção oeste deve ser sul", function () {
        var oeste = new Entidades.Oeste();

        var esquerda = oeste.daEsquerda();

        expect(esquerda.toString()).toBe(Entidades.Direcao.sul);
    });

    it("Esquerda da direção sul deve ser leste", function () {
        var sul = new Entidades.Sul();

        var esquerda = sul.daEsquerda();

        expect(esquerda.toString()).toBe(Entidades.Direcao.leste);
    });

    it("Esquerda da direção leste deve ser norte", function () {
        var leste = new Entidades.Leste();

        var esquerda = leste.daEsquerda();

        expect(esquerda.toString()).toBe(Entidades.Direcao.norte);
    });

    it("Direita da direção norte deve ser leste", function () {
        var norte = new Entidades.Norte();

        var direita = norte.daDireita();

        expect(direita.toString()).toBe(Entidades.Direcao.leste);
    });

    it("Direita da direção leste deve ser sul", function () {
        var leste = new Entidades.Leste();

        var direita = leste.daDireita();

        expect(direita.toString()).toBe(Entidades.Direcao.sul);
    });

    it("Direita da direção sul deve ser oeste", function () {
        var sul = new Entidades.Sul();

        var direita = sul.daDireita();

        expect(direita.toString()).toBe(Entidades.Direcao.oeste);
    });

    it("Direita da direção oeste deve ser norte", function () {
        var oeste = new Entidades.Oeste();

        var direita = oeste.daDireita();

        expect(direita.toString()).toBe(Entidades.Direcao.norte);
    });

    it("Para se mover na direcao norte coordenada aumenta eixo y", function () {
        var norte = new Entidades.Norte();
        var coordenada = new Entidades.Coordenada(1, 1);
        norte.mover(coordenada);

        expect(coordenada.getEixoY()).toBe(2);
    });

    it("Para se mover na direcao sul coordenada diminuir eixo y", function () {
        var sul = new Entidades.Sul();
        var coordenada = new Entidades.Coordenada(1, 1);

        sul.mover(coordenada);

        expect(coordenada.getEixoY()).toBe(0);
    });

    it("Para se mover na direcao oeste coordenada diminuir eixo x", function () {
        var oeste = new Entidades.Oeste();
        var coordenada = new Entidades.Coordenada(1, 1);

        oeste.mover(coordenada);

        expect(coordenada.getEixoX()).toBe(0);
    });

    it("Para se mover na direcao leste coordenada aumentar eixo x", function () {
        var leste = new Entidades.Leste();
        var coordenada = new Entidades.Coordenada(1, 1);

        leste.mover(coordenada);

        expect(coordenada.getEixoX()).toBe(2);
    });

    it("certifica que pode mover na direcao norte em um terreno", function () {
        var norte = new Entidades.Norte();
        var coordenada = new Entidades.Coordenada(2, 1);
        var limite = new Entidades.Coordenada(2, 2);
        var terreno = new Entidades.Terreno(limite);

        var resultado = norte.podeMover(terreno, coordenada);

        expect(resultado).toBe(true);
    });

    it("certifica que não pode mover na direcao norte em um terreno", function () {
        var norte = new Entidades.Norte();
        var coordenada = new Entidades.Coordenada(2, 2);
        var limite = new Entidades.Coordenada(2, 2);
        var terreno = new Entidades.Terreno(limite);

        var resultado = norte.podeMover(terreno, coordenada);

        expect(resultado).toBe(false);
    });

    it("certifica que pode mover na direcao sul em um terreno", function () {
        var norte = new Entidades.Norte();
        var coordenada = new Entidades.Coordenada(0, 1);
        var limite = new Entidades.Coordenada(2, 2);
        var terreno = new Entidades.Terreno(limite);

        var resultado = norte.podeMover(terreno, coordenada);

        expect(resultado).toBe(true);
    });

    it("certifica que não pode mover na direcao sul em um terreno", function () {
        var sul = new Entidades.Sul();
        var coordenada = new Entidades.Coordenada(0, 0);
        var limite = new Entidades.Coordenada(2, 2);
        var terreno = new Entidades.Terreno(limite);

        var resultado = sul.podeMover(terreno, coordenada);

        expect(resultado).toBe(false);
    });

    it("certifica que pode mover na direcao oeste em um terreno", function () {
        var oeste = new Entidades.Oeste();
        var coordenada = new Entidades.Coordenada(1, 0);
        var limite = new Entidades.Coordenada(2, 2);
        var terreno = new Entidades.Terreno(limite);

        var resultado = oeste.podeMover(terreno, coordenada);

        expect(resultado).toBe(true);
    });

    it("certifica que não pode mover na direcao oeste em um terreno", function () {
        var oeste = new Entidades.Oeste();
        var coordenada = new Entidades.Coordenada(0, 0);
        var limite = new Entidades.Coordenada(2, 2);
        var terreno = new Entidades.Terreno(limite);

        var resultado = oeste.podeMover(terreno, coordenada);

        expect(resultado).toBe(false);
    });

    it("certifica que pode mover na direcao leste em um terreno", function () {
        var oeste = new Entidades.Oeste();
        var coordenada = new Entidades.Coordenada(1, 2);
        var limite = new Entidades.Coordenada(2, 2);
        var terreno = new Entidades.Terreno(limite);

        var resultado = oeste.podeMover(terreno, coordenada);

        expect(resultado).toBe(true);
    });

    it("certifica que não pode mover na direcao leste em um terreno", function () {
        var leste = new Entidades.Leste();
        var coordenada = new Entidades.Coordenada(2, 2);
        var limite = new Entidades.Coordenada(2, 2);
        var terreno = new Entidades.Terreno(limite);

        var resultado = leste.podeMover(terreno, coordenada);

        expect(resultado).toBe(false);
    });
});
//# sourceMappingURL=DirecaoTeste.js.map
