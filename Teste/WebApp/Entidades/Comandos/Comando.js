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
                case this.esquerda:
                    return new Entidades.Esquerda();
                case this.direita:
                    return new Entidades.Direita();
                case this.mover:
                    return new Entidades.Mover();
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
        Comando.esquerda = "L";
        Comando.direita = "R";
        Comando.mover = "M";
        return Comando;
    })();
    Entidades.Comando = Comando;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Comando.js.map
