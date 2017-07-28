import { View } from "./View";
import { Negociacoes } from "../models/Negociacoes";

export class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.paraArray().map(i =>
                `
                    <tr>
                        <td>${i.data.getDate()}/${i.data.getMonth() + 1}/${i.data.getFullYear()}</td>
                        <td>${i.quantidade}</td>
                        <td>${i.valor}</td>
                        <td>${i.volume}</td>
                    </tr>                        
                `).join('')} 
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }
}