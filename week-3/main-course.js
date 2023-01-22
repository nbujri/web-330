// =============================================================================
//     ; Title: Assignment 3.2
//     ; Author: Ngi Bujri
//     ; Date: 17 January, 2023
//     ; Description: app to demonstrate inheritance, forEach(), and checkboxes
// =============================================================================

import { Product } from "./product.js";

export class MainCourse extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
