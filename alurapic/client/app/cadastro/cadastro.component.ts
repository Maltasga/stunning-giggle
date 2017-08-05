import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {

    http: Http;
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;

    constructor(http: Http, fb: FormBuilder) {
        this.http = http;
        this.meuForm = fb.group({
            titulo: ["", Validators.required],
            url: ["", Validators.required],
            descricao: [""]
        });
    }

    cadastrar(event: Event) {
        event.preventDefault();

        let header = new Headers();
        header.append("Content-Type", "application/json");

        this.http.post("v1/fotos", JSON.stringify(this.foto), { headers: header })
            .subscribe(() => {
                this.foto = new FotoComponent();
            }, (erro: Error) => console.error(erro.message));

        console.log(this.foto);
    }
}