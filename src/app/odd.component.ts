import {Component, Input} from '@angular/core';

@Component({
    selector: 'odd-comp',
    template: ``
})
export class OddComponent {
    name='Odd';
    constructor() {
        console.log(this.name);

    }
    getName():string{
        return this.name;
    }
}
