var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Entidades;
(function (Entidades) {
    var Comando = (function () {
        function Comando(descricao) {
            this.descricao = descricao;
        }
        Comando.prototype.toString = function () {
            return this.descricao;
        };

        Comando.criar = function (comando) {
            switch (comando.toUpperCase()) {
                case this.esquerda.toString():
                    return this.esquerda;
                case this.direita.toString():
                    return this.direita;
                case this.mover.toString():
                    return this.mover;
                default:
                    throw "comando inexistente!";
            }
        };

        Comando.criarLista = function (listaDeLetras) {
            var comandos = new Array();
            for (var i = 0; i < listaDeLetras.length; i++) {
                comandos.push(this.criar(listaDeLetras[i]));
            }
            return comandos;
        };

        Comando.prototype.enviar = function (rover) {
            throw "Metodo abstrato";
        };
        Comando.esquerda = new Esquerda();
        Comando.direita = new Direita();
        Comando.mover = new Mover();
        return Comando;
    })();
    Entidades.Comando = Comando;

    var Esquerda = (function (_super) {
        __extends(Esquerda, _super);
        function Esquerda() {
            _super.call(this, "L");
        }
        Esquerda.prototype.enviar = function (rover) {
            rover.girarParaDireita();
        };
        return Esquerda;
    })(Comando);
    Entidades.Esquerda = Esquerda;

    var Direita = (function (_super) {
        __extends(Direita, _super);
        function Direita() {
            _super.call(this, "R");
        }
        Direita.prototype.enviar = function (rover) {
            rover.girarParaDireita();
        };
        return Direita;
    })(Comando);
    Entidades.Direita = Direita;

    var Mover = (function (_super) {
        __extends(Mover, _super);
        function Mover() {
            _super.call(this, "M");
        }
        Mover.prototype.enviar = function (rover) {
            rover.mover();
        };
        return Mover;
    })(Comando);
    Entidades.Mover = Mover;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Comando.js.map
