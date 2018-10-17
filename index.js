function produceDrivingRange(blockRange) {
  return function(start, end) {
    const range = Math.abs(parseInt(start) - parseInt(end));
    if (range <= blockRange) {
      return `within range by ${blockRange - range}`
    }
    else {
      return `${range - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(price) {
    return price * tipPercent;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  }
}
