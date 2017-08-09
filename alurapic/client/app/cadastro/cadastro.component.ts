import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FotoService } from "../foto/foto.service";

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {

    service: FotoService;
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;

    constructor(service: FotoService, fb: FormBuilder) {
        this.service = service;

        this.meuForm = fb.group({
            titulo: ["", Validators.required],
            url: ["", Validators.required],
            descricao: [""]
        });
    }

    cadastrar(event: Event) {
        event.preventDefault();

        this.service.cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent();
            }, (erro: Error) => console.error(erro.message));
    }
}