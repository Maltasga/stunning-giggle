import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FotoService } from "../foto/foto.service";
import { Router, ActivatedRoute } from "@angular/router";

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
    router: Router;
    mensagem: string = "";

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(p => {
            let id = p["id"];
            if (id) {
                this.service.buscar(id)
                    .subscribe(res => {
                        this.foto = res;
                    });
            }
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
            .subscribe(response => {
                this.mensagem = response.mensagem;
                this.foto = new FotoComponent();
                if (!response.inclusao) this.router.navigate(['']);
            }, (erro: Error) => console.error(erro.message));
    }
}