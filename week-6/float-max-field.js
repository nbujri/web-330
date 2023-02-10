// Title: float-max-field.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  validate() {
    // return true is value less than max, else return false
    if (parseFloat(this.field) < this.max) {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    // error message for value that is greater than max
    return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
  }
}
