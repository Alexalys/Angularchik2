import { Component } from '@angular/core';

@Component({
    selector: 'even-comp',
    template: ``
})
export class EvenComponent {
    name='Even';
    constructor() {
        console.log(this.name);
    }
    getName():string{
        return this.name;
    }
}
