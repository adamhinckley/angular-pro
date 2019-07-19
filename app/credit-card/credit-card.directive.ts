import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: "[credit-card]"
})
export class CreditCardDirective {
    //host listener is being hosted by the input in app.component.ts
    @HostListener("input", ["$event"])
    onkeydown(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement;

        let trimmed = input.value.replace(/\s+/g, "");
        if (trimmed.length > 16) {
            trimmed = trimmed.substr(0, 16);
        }
        let numbers = [];
        for (let i = 0; i < trimmed.length; i += 4) {
            numbers.push(trimmed.substr(i, 4));
            console.log(numbers);
        }

        input.value = numbers.join("  ");
    }
}
