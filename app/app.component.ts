import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <div>
            <label>
                Credit Card Number
                <input
                    name="credit-card"
                    type="text"
                    placeholder="Enter your 16 digit number"
                    credit-card
                />
            </label>
        </div>
    `
})
export class AppComponent {}
