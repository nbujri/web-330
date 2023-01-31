// ==========================================================
//     ; Title: Assignment 5.2
//     ; Author: Ngi Bujri
//     ; Date: 31 January, 2023
//     ; Description: app demonstrating JS iterators
// ==========================================================

export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  // return length of products
  count() {
    return this.products.length;
  }

  // add object to products
  add(obj) {
    this.products.push(obj);
  }

  // return each object in products
  *generator() {
    for (let product of this.products) {
      yield product;
    }
  }
}
