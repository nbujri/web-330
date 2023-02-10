// Title: required-field.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    // return true if field is not empty, else false
    if (this.field !== "") {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    // return error message for empty field
    return `${this.name} is a required field.`;
  }
}
