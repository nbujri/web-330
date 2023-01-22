// =============================================================================
//     ; Title: Assignment 3.2
//     ; Author: Ngi Bujri
//     ; Date: 17 January, 2023
//     ; Description: app to demonstrate inheritance, forEach(), and checkboxes
// =============================================================================

export class Bill {
  // arrays to hold selected items
  _beverages = [];
  _appetizers = [];
  _mainCourses = [];
  _desserts = [];

  // add selected beverage to _beverages array
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }

  // add selected appetizer to _appetizers array
  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }

  // add selected mainCourse to _mainCourses array
  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }

  // add selected desert to _deserts array
  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  // get total cost of all items selected
  getTotal() {
    let total = 0;

    // loop through each array
    // add each item price to the total
    let beverageTotal = this._beverages.forEach(function (beverage) {
      total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function (appetizer) {
      total += parseFloat(appetizer.price);
    });

    let mainCourseTotal = this._mainCourses.forEach(function (mainCourse) {
      total += parseFloat(mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(function (dessert) {
      total += parseFloat(dessert.price);
    });
  }
}
