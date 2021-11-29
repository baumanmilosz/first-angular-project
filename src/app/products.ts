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
  id: string,
  name: string,
  price: number,
  exportCountry: string | null,
  link: string
}
