'use strict';

/**
 * A basic list implementation.
 */
class List {

  /**
   * Creates a new, empty list.
   */
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Sorts the data, and re-assigns the data and length properties.
   */
  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});

    this.length = Object.keys(data).length;
    this.data = data;
  }

  /**
   * Adds a new item to the end of the list.
   * @param {*} item the item to add
   */
  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }

  /**
   * Removes the item at the end of the list.
   * @returns the item that was removed
   */
  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  /**
   * Removes the item at the beginning of the list.
   * @returns the item that was removed
   */
  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  /**
   * Adds the item to the beginning of the list
   * @param {*} item the item to add
   */
  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }

  /**
   * Calls the callback for each element
   * @param {*} callback callback to invoke
   */
  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  /**
   * Creates a new array with the results of calling the callback for each element
   * @param {*} callback callback to invoke
   */
  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }

  /**
   * Creates a new array with the elements that pass the filter callback
   * @param {*} callback callback to filter elements
   */
  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  /**
   * Returns the state after passing it through a callback for each element
   * @param {*} callback callback to invoke
   * @param {*} state the initial state
   */
  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }

}

module.exports = List;
