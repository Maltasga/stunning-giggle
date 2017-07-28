import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacao, Negociacoes, NegociacaoParcial } from "../models/index";
import { medirPerformance, domInject, timeout } from "../helpers/index";

export class NegociacaoController {
    @domInject("#data")
    private _inputData: JQuery;
    @domInject("#quantidade")
    private _inputQuantidade: JQuery;
    @domInject("#valor")
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ","));

        if (!this._ehDiaUtil(data)) {

            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
    }

    @timeout(500)
    importar() {
        function isOk(response: Response) {
            if (response.ok) {
                return true;
            } else {
                throw new Error(response.statusText);
            }
        }

        fetch("http://localhost:8080/dados")
            .then(r => r.json())
            .then((dados: NegociacaoParcial[]) => {
                dados
                    .map(d => new Negociacao(new Date(), d.vezes, d.montante))
                    .forEach(n => this._negociacoes.adiciona(n))

                this._negociacoesView.update(this._negociacoes);
            })
            .catch(e => console.log(e));

        this._mensagemView.update("Importação realizada com sucesso!");
    }

    private _ehDiaUtil(date: Date): boolean {
        return date.getDay() != DiaDaSemana.Sabado && date.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
}