import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {Products} from '../products'

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  // @ts-ignore
  @Input() product!: Product;
  @Output() notify = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

}
