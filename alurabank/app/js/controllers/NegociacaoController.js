var NegociacaoController = (function () {
    function NegociacaoController() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    NegociacaoController.prototype.adiciona = function (event) {
        event.preventDefault();
        var negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ",")), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
    };
    return NegociacaoController;
}());
