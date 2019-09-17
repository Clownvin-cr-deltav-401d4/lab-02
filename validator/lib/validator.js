'use strict';

class Validator {
  constructor() {
    throw new Error('Cannot instantiate type Validator.');
  }

  /**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
  static isString(input) {
    return typeof input === 'string';
  }

  static isObject(input) {
    return typeof input === 'object' && !(input instanceof Array);
  }

  static isArray(input, valueType) {
    return Array.isArray(input) && (valueType ? input.every(val => typeof val === valueType) : true);
  }

  static isBoolean(input) {
    return typeof input === 'boolean';
  }

  static isNumber(input) {
    return typeof input === 'number';
  }

  static isFunction(input) {
    return typeof input === 'function';
  }

  static isTruthy(input) {
    return !!input;
  }

  static isCorrectType(input, field) {
    switch (field.type) {
    case 'string': return Validator.isString(input);
    case 'number': return Validator.isNumber(input);
    case 'array': return Validator.isArray(input, field.valueType);
    case 'object': return Validator.isObject(input);
    case 'boolean': return Validator.isBoolean(input);
    default: return false;
    }
  }

  static isValid(schema, data) {

    let valid = true;

    for (let fieldName in schema.fields) {

      let field = schema.fields[fieldName];

      // Am I required and set?
      let required = field.required
        ? Validator.isTruthy(data[fieldName])
        : true;

      // Am I the right type (if we even care)
      let type = field.type
        ? Validator.isCorrectType(data[fieldName], field)
        : true;

      // If anything is false ...
      if (!(required && type)) {
        valid = false;
      }

    }
    return valid;
  }
}

module.exports = Validator;

