export const products = [{
  id: '1',
  name: "Banana",
  price: 10,
  exportCountry: null,
  link: "http://google.com"
},
  {
    id: '2',
    name: "Apples",
    price: 8,
    exportCountry: "Poland",
    link: null
  }];

export interface Product {
  id: any,
  name: any,
  price: any,
  exportCountry: any,
  link: any
}
