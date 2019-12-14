import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { OddComponent } from "./odd.component";
import{ EvenComponent} from "./even.component";
import {Gamecontrol} from "./gamecontrol.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, OddComponent, EvenComponent,Gamecontrol ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }