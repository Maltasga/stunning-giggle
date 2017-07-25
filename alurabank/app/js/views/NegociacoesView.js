var NegociacoesView = (function () {
    function NegociacoesView(seletor) {
        this._container = document.querySelector(seletor);
    }
    NegociacoesView.prototype.template = function (model) {
        return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th>DATA</th>\n                    <th>QUANTIDADE</th>\n                    <th>VALOR</th>\n                    <th>VOLUME</th>\n                </tr>\n            </thead>\n\n            <tbody>\n            " + model.paraArray().map(function (i) {
            return "\n                    <tr>\n                        <td>" + i.data.getDate() + "/" + (i.data.getMonth() + 1) + "/" + i.data.getFullYear() + "</td>\n                        <td>" + i.quantidade + "</td>\n                        <td>" + i.valor + "</td>\n                        <td>" + i.volume + "</td>\n                    </tr>                        \n                ";
        }).join('') + " \n            </tbody>\n\n            <tfoot>\n            </tfoot>\n        </table>\n        ";
    };
    NegociacoesView.prototype.update = function (negociacoes) {
        this._container.innerHTML = this.template(negociacoes);
    };
    return NegociacoesView;
}());
