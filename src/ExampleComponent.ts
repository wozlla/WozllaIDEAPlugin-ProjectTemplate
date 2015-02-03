/// <reference path="../typings/tsd.d.ts" />
module YourProject {

    export class ExampleComponent extends WOZLLA.Component {

        init():void {
            super.init();
            console.log("init example component");
        }
    }

    WOZLLA.Component.register(ExampleComponent, {
        name: "YourProject.ExampleComponent",
        properties: []
    });

}