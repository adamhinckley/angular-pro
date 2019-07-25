import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";

@Component({
    selector: "stock-inventory",
    styleUrls: ["stock-inventory.component.scss"],
    templateUrl: "./stock-inventory.component.html"
})
export class StockInventoryComponent {
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl("abdc"),
            code: new FormControl("1234")
        })
    });
    onsubmit() {
        console.log("submit", this.form.value);
    }
}
