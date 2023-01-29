/*
==========================================================
    ; Title: Assignment 
    ; Author: Ngi Bujri
    ; Date: 26 January, 2023
    ; Description: calorie app demonstrating static properties, built-in functions and lambda expressions
==========================================================
 */

import { FoodModel } from "./food-model.js";

export class CalorieConverter {
  static data = [
    new FoodModel(1007, "Egg", 78),
    new FoodModel(1008, "Apple", 95),
    new FoodModel(1009, "Hamburger", 354),
    new FoodModel(1010, "Fries", 400),
    new FoodModel(1011, "Banana", 105),
    new FoodModel(1012, "Soda", 150),
  ];

  // return array of item matching user input
  static find(searchString) {
    return this.data.filter((food) =>
      // call toLowerCase for case sensitivity
      food.name.toLowerCase().includes(searchString)
    );
  }
}
