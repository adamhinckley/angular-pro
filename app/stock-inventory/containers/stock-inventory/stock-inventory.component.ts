import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { Product, Item } from "../../models/product.interface";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";

import { StockInventoryService } from "../../services/stock-inventory.service";

@Component({
    selector: "stock-inventory",
    styleUrls: ["stock-inventory.component.scss"],
    templateUrl: "./stock-inventory.component.html"
})
export class StockInventoryComponent implements OnInit {
    products: Product[];

    productMap: Map<number, Product>;

    form = this.fb.group({
        store: this.fb.group({
            branch: "",
            code: ""
        }),
        selector: this.createStock({}),
        stock: this.fb.array([])
    });

    constructor(private fb: FormBuilder, private stockService: StockInventoryService) {}

    ngOnInit() {
        const cart = this.stockService.getCartItems();
        const products = this.stockService.getProducts();

        Observable.forkJoin(cart, products).subscribe(
            ([cart, products]: [Item[], Product[]]) => {
                const myMap = products.map<[number, Product]>(product => [
                    product.id,
                    product
                ]);

                this.productMap = new Map<number, Product>(myMap);
                this.products = products;
                cart.forEach(item => this.addStock(item));
            }
        );
    }

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
