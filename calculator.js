class Calculator {
  add = (n1, n2) => {
    return n1 + n2;
  }

  subtract = (n1, n2) => {
    return n1 -n2;
  }

  divide = (n1, n2) => {
    return n2 == 0 ? 0 : n1/n2;
  }

  multiply = (n1, n2) => {
    return n1 * n2;
  }
}

module.exports = Calculator;