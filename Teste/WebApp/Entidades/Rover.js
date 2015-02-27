/// <reference path="direcoes/direcao.ts" />
/// <reference path="coordenada.ts" />
var Entidades;
(function (Entidades) {
    var Rover = (function () {
        function Rover(terreno, coordenada, direcao) {
            this.coordenada = coordenada;
            this.direcao = direcao;
            this.terreno = terreno;
        }
        Rover.prototype.localizacao = function () {
            return this.coordenada.toString() + " " + this.direcao.toString();
        };

        Rover.prototype.girarParaEsquerda = function () {
            this.direcao = this.direcao.daEsquerda();
        };

        Rover.prototype.girarParaDireita = function () {
            this.direcao = this.direcao.daDireita();
        };

        Rover.prototype.mover = function () {
            if (this.direcao.podeMover(this.terreno, this.coordenada)) {
                this.direcao.mover(this.coordenada);
            }
        };

        Rover.prototype.getTerreno = function () {
            return this.terreno;
        };
        return Rover;
    })();
    Entidades.Rover = Rover;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=Rover.js.map
