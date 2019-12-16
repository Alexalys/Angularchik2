import {Component, ViewChild} from '@angular/core';
import {OddComponent} from "./odd.component";
import {EvenComponent} from "./even.component";

@Component({
    selector: 'game-comp',
    template: `
                <button (click)="callEvent()">Start game</button>
                <button (click)="stopEvent()">Stop game</button>
                <p>Компонент {{name}}</p>
                <even-comp></even-comp>
                <odd-comp></odd-comp>
                <table>
                    <tr *ngFor="let item of arrOdd">
                        <td>{{item.name}}</td> 
                    </tr>
                    <tr *ngFor="let item of arrEven">
                        <td>{{item.name}}</td>
                    </tr>
                </table>`
})
export class Gamecontrol {
    id_event=0;
    procID=0;
    name = "Любой";
    arrOdd: OddComponent[]=[];
    arrEven: EvenComponent[]=[];

    callEvent():void  {
        this.procID=setInterval(()=>{this.startFunc();},1000);
    }
    startFunc():void{
        this.id_event+=1;

        if(this.id_event%2==0) {
            const odd=new OddComponent();
            this.name=odd.getName();
            this.arrOdd.push(odd);
            this.name=this.arrOdd[this.arrOdd.length-1].getName() + (this.arrOdd.length);
            console.log('Array with odd objects and its length',this.arrOdd,this.arrOdd.length);

        }
        else {
            const even=new EvenComponent();
            this.arrEven.push(even);
            this.name=this.arrEven[this.arrEven.length-1].getName() + (this.arrEven.length);
            console.log('Array with even objects and its length',this.arrEven,this.arrEven.length);

        }
    }
    stopEvent():void{
        clearInterval(this.procID);
    }

}
