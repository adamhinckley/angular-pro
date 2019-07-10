import { Component, Output, EventEmitter } from "@angular/core";

import { User } from "./auth-form.interface";

// the ng-content tag is necessary for grapping and displaying the
// the h3's in app.component.ts (parent)
@Component({
    selector: "auth-form",
    template: `
        <div>
            <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
                <ng-content></ng-content>
                <label>
                    Email address
                    <input type="email" name="email" ngModel />
                </label>
                <label>
                    Password
                    <input type="password" name="password" ngModel />
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    `
})
export class AuthFormComponent {
    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

    onSubmit(value: User) {
        this.submitted.emit(value);
    }
}
