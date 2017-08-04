import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";
@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {

    http: Http;
    foto: FotoComponent = new FotoComponent();

    constructor(http: Http) {
        this.http = http;
    }

    cadastrar(event: Event) {
        event.preventDefault();

        let header = new Headers();
        header.append("Content-Type", "application/json");

        this.http.post("v1/fotos", JSON.stringify(this.foto), { headers: header })
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log("foto salva");
            }, (erro: Error) => console.error(erro.message));

        console.log(this.foto);
    }
}