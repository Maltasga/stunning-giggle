var View = (function () {
    function View(seletor) {
        this._container = $(seletor);
    }
    View.prototype.update = function (model) {
        this._container.html(this.template(model));
    };
    return View;
}());
