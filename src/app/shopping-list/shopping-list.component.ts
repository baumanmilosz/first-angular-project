import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  products = [{
    name: "Banana",
    price: 10,
    description: 'Bananas have a lot of carbs.'
  },
    {
      name: "Apples",
      price: 8,
      description: 'sdsa'
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
