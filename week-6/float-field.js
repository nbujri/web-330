// Title: float-field.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // check if value is a number
  validate() {
    return !isNaN(this.field);
  }

  // return message if value if not a number
  getMessage() {
    return `${this.name}} must be a float value. You entered ${this.field}`;
  }
}
