import {
    Component,
    ViewContainerRef,
    ViewChild,
    AfterContentInit,
    ComponentRef,
    TemplateRef
} from "@angular/core";

import { AuthFormComponent } from "./auth-form/auth-form.component";

import { User } from "./auth-form/auth-form.interface";

@Component({
    selector: "app-root",
    template: `
        <div>
            <div #entry></div>
            <template #template let-name let-location="location">
                {{ name }} : {{ location }}
            </template>
        </div>
    `
})
export class AppComponent implements AfterContentInit {
    component: ComponentRef<AuthFormComponent>;

    @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;
    @ViewChild("template") template: TemplateRef<any>;

    ngAfterContentInit() {
        this.entry.createEmbeddedView(this.template, {
            //implicit values will respond to any let statement in the HTML
            //as can be seen on line 20
            $implicit: "Adam",
            location: "Boise, ID"
        });
    }
}
