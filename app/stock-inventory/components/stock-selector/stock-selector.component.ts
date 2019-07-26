import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "stock-selector",
    styleUrls: ["stock-selector.component.scss"],
    templateUrl: "./stock-selector.component.html"
})
export class StockSelectorComponent {
    @Input()
    parent: FormGroup;
}
