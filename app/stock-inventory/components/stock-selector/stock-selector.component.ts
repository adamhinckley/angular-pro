import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Product } from "../../models/product.interface";

@Component({
    selector: "stock-selector",
    styleUrls: ["stock-selector.component.scss"],
    templateUrl: "./stock-selector.component.html"
})
export class StockSelectorComponent {
    @Input()
    parent: FormGroup;

    @Input()
    products: Product[];

    @Output()
    added = new EventEmitter<any>();

    onAdd() {
        this.added.emit(this.parent.get("selector").value);
    }
}
