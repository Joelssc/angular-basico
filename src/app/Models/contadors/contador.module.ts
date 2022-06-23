import { NgModule } from "@angular/core";
import { ContadorComponet } from "./contador/contador.componet";

@NgModule({
    declarations:[
        ContadorComponet,
    ],
    exports:[
        ContadorComponet
    ],
})

export class ContadorModule{
}