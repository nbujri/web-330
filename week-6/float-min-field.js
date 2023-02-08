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

  // check if the value is greater than the min value
  validate() {
    return parseFloat(this.field) > this.min;
  }

  // return message if value is less than min
  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
