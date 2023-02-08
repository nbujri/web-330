// Title: required-field.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // function checking if field is a string or not
  validate() {
    return typeof this.field === "string";
  }

  // return message if field is empty
  getMessage() {
    return `${this.name} is a required field.`;
  }
}
