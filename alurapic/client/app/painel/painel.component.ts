import { Component, Input, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "painel",
    templateUrl: "./painel.component.html",
    styleUrls: ["./painel.component.css"]
})
export class PainelComponent implements OnInit {
    @Input() titulo: String;

    ngOnInit(): void {
        this.titulo =
            this.titulo.length > 10
                ? `${this.titulo.substr(0, 10)}...`
                : this.titulo;
    }
}