import { Component } from "@angular/core";

@Component({
    selector: 'app-leading-spinner',
    template: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
    styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {}