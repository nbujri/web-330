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

  // check if the value is less than the max value
  validate() {
    return parseFloat(this.field) < this.max;
  }

  // return message if value is greater than max
  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
  }
}
