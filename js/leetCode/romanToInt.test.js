const { default: TestRunner } = require('jest-runner');
const romanToInt = require(`./romanToInt`);

test('covert rom to arab nums', () => {
  expect(romanToInt('III')).toBe(3);
});

test('covert rom to arab nums', () => {
  expect(romanToInt('LVIII')).toBe(58);
});

test('covert rom to arab nums', () => {
  expect(romanToInt('MCDLXXIX')).toBe(1479);
});
