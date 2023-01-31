// ==========================================================
//     ; Title: Assignment 5.2
//     ; Author: Ngi Bujri
//     ; Date: 31 January, 2023
//     ; Description: app demonstrating JS iterators
// ==========================================================

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Math.random().toString(16).slice(2);
  }
}
