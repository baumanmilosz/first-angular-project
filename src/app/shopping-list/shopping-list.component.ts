import {Component, OnInit} from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  products = products;

  onNotify(exportCountry: string | null) {
    alert(`This product is from ${exportCountry}.`)
  }

  constructor() { }

  ngOnInit(): void {
  }
}
