'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning then default ifself', () => {
  expect(convert(2, 'BTC', 'BTC')).toBe(2);
});

test('should return a number', () => {
  expect(Number.isInteger(convert(2, 'BTC', 'BTC', 'Number'))).toBe(true);
});

test('should return a Big number', () => {
  expect(convert(2, 'BTC', 'BTC', 'Big')).toEqual(Big(2));
});

test('should return a string', () => {
  expect(typeof(convert(2100, 'mBTC', 'BTC', 'String'))).toBe('string');
});

test('should convert a number from interger', () => {
  expect(typeof(convert(123456789012345, 'Satoshi', 'BTC', 'Number'))).toBe('number');
});

test('should convert a number from float', () => {
  expect(typeof(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number'))).toBe('number');
});

test('should convert a string', () => {
  expect(typeof(convert('2', 'BTC', 'BTC', 'Number'))).toBe('number');
});

test('should convert a Big number', () => {
  expect(typeof(convert(new Big(2), 'BTC', 'BTC', 'Number'))).toBe('number');
});

test('should convert a NaN to a number', () => {
  expect(typeof(convert(NaN, 'BTC', 'BTC', 'Number'))).toBe('number');
  expect(typeof(convert(NaN, 'BTC', 'mBTC', 'Number'))).toBe('number');
});

test('should convert a NaN to a string', () => {
  expect(typeof(convert(NaN, 'BTC', 'BTC', 'String'))).toBe('string');
  expect(typeof(convert(NaN, 'BTC', 'mBTC', 'String'))).toBe('string');
});

test('should not convert a NaN to a Big', () => {
  expect(() => {
    convert(NaN, 'BTC', 'BTC', 'Big');
  }).toThrow();
});

test('should handle rounding errors', () => {
  expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).toEqual(0.000000046);
  expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toEqual(4.6);
});

test('should throw when untest is undefined', () => {
  expect(() => {
    convert(new Big(2), 'x', 'BTC', 'Number');
  }).toThrow();

  expect(() => {
    convert(new Big(2), 'BTC', 'x', 'Number');
  }).toThrow();

  expect(() => {
    convert(NaN, 'x', 'BTC', 'Number');
  }).toThrow();

  expect(() => {
    convert(NaN, 'BTC', 'x', 'Number');
  }).toThrow();
});

test('should throw when representaion is undefined', () => {
  expect(() => {
    convert(2, 'BTC', 'mBTC', 'x');
  }).toThrow();

  expect(() => {
    convert(NaN, 'BTC', 'mBTC', 'x');
  }).toThrow();

});

test('should allow untest aliases', () => {
  expect(() => {
    convert(4.6, 'Satoshi', 'sat');
  }).not.toThrow();

  expect(() => {
    convert(4.6, 'μBTC', 'bit');
  }).not.toThrow();
});



test('shloud throw adding a unit that already exist with a different factor' , () =>{
  expect(() => {
    convert.addUnit('Satoshi' , new Big(2));
  }).toThrow();
});
