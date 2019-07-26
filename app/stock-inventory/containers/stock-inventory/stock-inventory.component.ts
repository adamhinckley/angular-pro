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
        }),
        selector: new FormGroup({
            product_id: new FormControl(""),
            quantity: new FormControl(10)
        }),
        stock: new FormArray([])
    });
    onsubmit() {
        console.log("submit", this.form.value);
    }
}
