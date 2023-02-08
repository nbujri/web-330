// Title: validator.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

// import statements
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // array for holding objects of imported classes
  validators = [];
  // array for holding error messages from imported classes
  messages = [];

  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  validate() {
    for (let obj of this.validators) {
      if (!obj.validate()) {
        this.messages.push(obj.getMessage());
        return false;
      } else {
        return true;
      }
    }
  }
}
