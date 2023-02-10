// Title: float-min-field.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  validate() {
    // if value is greater than min return true, else return false
    if (parseFloat(this.field) > this.min) {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    // error message for value entered that is less than min
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
