import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { Product } from "../../models/product.interface";

@Component({
    selector: "stock-inventory",
    styleUrls: ["stock-inventory.component.scss"],
    templateUrl: "./stock-inventory.component.html"
})
export class StockInventoryComponent {
    products: Product[] = [
        { id: 1, price: 2800, name: "MacBook Pro" },
        { id: 2, price: 2000, name: "Ultra-wide monitor" },
        { id: 3, price: 25, name: "Web cam" },
        { id: 4, price: 100, name: "keyboard" },
        { id: 5, price: 160, name: "Air Pods" }
    ];

    form = this.fb.group({
        store: this.fb.group({
            branch: "",
            code: ""
        }),
        selector: this.createStock({}),
        stock: this.fb.array([
            this.createStock({ product_id: 1, quantity: 10 }),
            this.createStock({ product_id: 3, quantity: 50 })
        ])
    });

    constructor(private fb: FormBuilder) {}

    createStock(stock) {
        const { product_id, quantity } = stock;
        return this.fb.group({
            product_id: parseInt(product_id, 10) || "",
            quantity: quantity || 10
        });
    }

    addStock(stock) {
        const control = this.form.get("stock") as FormArray;
        control.push(this.createStock(stock));
    }

    removeStock({ group, index }: { group: FormGroup; index: number }) {
        const control = this.form.get("stock") as FormArray;
        control.removeAt(index);
    }

    onsubmit() {
        console.log("submit", this.form.value);
    }
}
