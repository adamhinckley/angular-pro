import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
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

    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl("abdc"),
            code: new FormControl("1234")
        }),
        selector: this.createStock({}),
        stock: new FormArray([
            this.createStock({ product_id: 1, quantity: 10 }),
            this.createStock({ product_id: 3, quantity: 50 })
        ])
    });

    createStock(stock) {
        const { product_id, quantity } = stock;
        return new FormGroup({
            product_id: new FormControl(parseInt(product_id, 10) || ""),
            quantity: new FormControl(quantity || 10)
        });
    }

    onsubmit() {
        console.log("submit", this.form.value);
    }
}
