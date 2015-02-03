var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../typings/tsd.d.ts" />
var YourProject;
(function (YourProject) {
    var ExampleComponent = (function (_super) {
        __extends(ExampleComponent, _super);
        function ExampleComponent() {
            _super.apply(this, arguments);
        }
        ExampleComponent.prototype.init = function () {
            _super.prototype.init.call(this);
            console.log("init example component");
        };
        return ExampleComponent;
    })(WOZLLA.Component);
    YourProject.ExampleComponent = ExampleComponent;
    WOZLLA.Component.register(ExampleComponent, {
        name: "YourProject.ExampleComponent",
        properties: []
    });
})(YourProject || (YourProject = {}));
//# sourceMappingURL=externals.js.map