# LAB - 2

## Validator 2, List and Vehicle classes

### Author: Calvin Hall

### Links and Resources
* [submission PR](https://github.com/Clownvin-cr-deltav-401d4/lab-02/pull/1)
* [travis](https://www.travis-ci.com/Clownvin-cr-deltav-401d4/lab-02)

### Modules
#### `validator.js`
##### Exported Values and Methods
Exports a Validator static utility class that contains:
* isValid(schema, data) - Test that the data matches the schema
* isString(input) - Test that the input is a string
* isNumber(input) - Test that the input is a number
* isObject(input) - Test that the input is an object
* isFunction(input) - Test that the input is a function
* isArray(input) - Test that the input is an array
* isBoolean(input) - Test that the input is a boolean
* isCorrectType(input, field) - Test that the input matches the field.
* isTruthy(input) - Test if the input is truthy

#### `list.js`
##### Exported Values and Methods
Exports a List class that contains:
* length - The length of the list
* data - An object that holds the list's data
* reindex - Sorts and the reassigns the data
* push(item) - Adds an item to the end of the list
* pop() - Removes and returns the last item in the list
* shift() - Removes and returns the first item in the list
* unshift(item) - Adds an item to the front of the list
* forEach(callback) - Invokes a callback for each element
* map(callback) - Returns a new array containing the results of the callback for each element
* filter(callback) - Returns a new array containing the elements the pass the filter callback
* reduce(callback, state) - Returns state after calling the callback on for each element, passing in and modifying the state

#### `vehicle-class`
##### Exported Values and Methods
Exports a Vehicle class, Car class, and Motorcycle class with:
###### Vehicle
* constructor(name, wheels) - Creates a new Vehicle with name and wheels
* name - The name of the vehicle
* wheels - The number of wheels
* drive() - Starts moving
* stop() - Stops moving
###### Car
* constructor(name) - Creates a new car with name
###### Motorcycle
* constructor(name) - Creates a new motorcycle with name
* wheelie() - Does a wheelie

#### Running the app
* `npm test`
  
#### Tests
* `npm test`

#### UML
* [link](https://i.imgur.com/pFMTg2O.png)
