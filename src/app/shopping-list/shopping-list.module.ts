import { NgModule } from '@angular/core';
import {ShoppingListComponent} from "./shopping-list.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule
],
  declarations: [ShoppingListComponent],
exports:[ShoppingListComponent]
})
export class ShoppingListModule {
  products = ['dasdsad']
}

