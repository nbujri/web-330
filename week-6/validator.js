// Title: validator.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

// import statements
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMaxField } from "./float-max-field.js";
import { FloatMinField } from "./float-min-field.js";

export class Validator {
  validators = [];
  messages = [];

  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // method to make field required
  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

  // method to ensure field is a float
  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  // method to ensure value is greater than min
  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  // method to ensure value is less than max
  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  validate() {
    for (let val of this.validators) {
      // if false is returned push error to messages array and return false
      if (val.validate() === false) {
        this.messages.push(val.getMessage());
        return false;
      }
    }
    return true;
  }
}
