import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "listagem",
    templateUrl: "./listagem.component.html"
})
export class ListagemComponent {

    fotos: Object[] = [];

    constructor(http: Http) {

        http.get("v1/fotos")
            .map(response => response.json())
            .subscribe((response) => {
                this.fotos = response
            }, erro => console.error(erro.message));
    }
}