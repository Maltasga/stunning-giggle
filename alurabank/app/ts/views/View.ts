import { medirPerformance } from "../helpers/index";

export abstract class View<T> {
    private _container: JQuery;

    constructor(seletor: string, parametroOpcional?: boolean) {
        this._container = $(seletor);
    }
    
    update(model: T): void {
        this._container.html(this.template(model));
    }

    abstract template(model: T): string;
}