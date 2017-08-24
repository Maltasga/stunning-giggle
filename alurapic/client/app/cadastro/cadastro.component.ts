import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FotoService } from "../foto/foto.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {

    service: FotoService;
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    route: ActivatedRoute;

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute) {
        this.service = service;
        this.route = route;

        this.route.params.subscribe(p => {
            let id = p["id"];

            this.service.buscar(id)
                .subscribe(res => {
                    this.foto = res;
                });
        });

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