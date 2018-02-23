class Sorter {
  constructor() {
    this.array = [];
    this.ccmpareFunction = function (a, b) {
      return a - b;
    }
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var temp = [];

    for (var i = 0; i < indices.length; i++) {
      temp.push(this.array[indices[i]]);
    }

    indices.sort();
    temp.sort(this.ccmpareFunction);

    for (var i = 0; i < indices.length; i++) {
      this.array[indices[i]] = temp[i];
    }
  }

  setComparator(compareFunction) {
    this.ccmpareFunction = compareFunction;
  }
}

module.exports = Sorter;