import { Component } from "@angular/core";
import { FotoService } from "../foto/foto.service";
import { FotoComponent } from "../foto/foto.component";
@Component({
    moduleId: module.id,
    selector: "listagem",
    templateUrl: "./listagem.component.html"
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];

    constructor(service: FotoService) {

        service.lista().subscribe((response) => {
            this.fotos = response
        }, erro => console.error(erro.message));
    }
}