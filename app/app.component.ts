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
            <ng-container
                [ngTemplateOutlet]="template"
                [ngTemplateOutletContext]="context"
            >
            </ng-container>
            <div #entry></div>
            <template #template let-name let-location="location">
                {{ name }} : {{ location }}
            </template>
        </div>
    `
})
export class AppComponent {
    context = {
        $implicit: "Adam",
        location: "Boise ID"
    };
}
