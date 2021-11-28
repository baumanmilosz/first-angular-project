import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  products = [{
    name: "Banana",
    price: 10,
    exportCountry: null,
    link: "http://google.com"
  },
    {
      name: "Apples",
      price: 8,
      exportCountry: "Poland",
      link: null
    }];

  addToCart() {
    alert('Product was added to cart.')
  };

  onNotify(exportCountry: string | null) {
    alert(`This product is from ${exportCountry}.`)
  }
}
