import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

        const promisse = fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => console.log(err));

        return (promisse as Promise<Negociacao[]>);
    }
}

export interface HandlerFunction {
    (res: Response): Response;
}