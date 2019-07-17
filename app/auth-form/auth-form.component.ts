import { Component, Output, EventEmitter } from "@angular/core";

import { User } from "./auth-form.interface";

@Component({
    selector: "auth-form",
    styles: [
        `
            .email {
                border-color: #9f72e6;
            }
        `
    ],
    templateUrl: "auth-form.component.html"
})
export class AuthFormComponent {
    title = "Login";

    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

    onSubmit(value: User) {
        this.submitted.emit(value);
    }
}
