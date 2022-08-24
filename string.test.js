const { stringLength, reverseString, capitalize } = require('./string');
const Calculator = require('./calculator');

describe('Cehck String length', () => {
  it('length of the string Between 1 and 10', () => {
    expect(stringLength('Mahdi')).toBe(5);
    expect(stringLength('Hi')).toBe(2);
    expect(stringLength('Microverse')).toBe(10);
  });
});

describe('Reverse String', () => {
  it('Reverse the String', () => {
    expect(reverseString('Mahdi')).toBe('idhaM');
    expect(reverseString('Hi')).toBe('iH');
    expect(reverseString('nan')).toBe('nan');
  });
});


beforeEach(() => {
  cal = new Calculator;
});

describe('first number + second number', () => {
  it('Sum Two Numbers', () => {
    expect(cal.add(5, 5)).toBe(10);
    expect(cal.add(2, 2)).toBe(4);
    expect(cal.add(50, 50)).toBe(100);
  });
});

describe('First number - second Number', () => {
  it('Subtract Two numbers', () => {
    expect(cal.subtract(5, 5)).toBe(0);
    expect(cal.subtract(100, 50)).toBe(50);
    expect(cal.subtract(800, 500)).toBe(300);
  });
});

describe('Fisrt number / Second Number', () => {
  it('Divide Two Numbers', () => {
    expect(cal.divide(5,5)).toBe(1);
    expect(cal.divide(0,5)).toBe(0);
    expect(cal.divide(50,0)).toBe(0);
  });
});

describe('First Number * Second Number', () => {
  it('Multiply Two Numbers', () => {
    expect(cal.multiply(5, 5)).toBe(25);
    expect(cal.multiply(5, 50)).toBe(250);
    expect(cal.multiply(50, 50)).toBe(2500);
  });
});

describe('Capitalize string', () => {
  it('Change the first caracter to UpperCase', () => {
    expect(capitalize('mahdi')).toBe('Mahdi');
  });
});


