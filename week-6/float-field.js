// Title: float-field.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    // if not NaN return true, else return false
    if (!Number.isNaN(parseFloat(this.field))) {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    // return message for value that is not a float
    return `${this.name} must be a float value. You entered ${this.field}`;
  }
}
