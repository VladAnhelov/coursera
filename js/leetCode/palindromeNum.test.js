const { default: TestRunner } = require('jest-runner');
const palindromeNum = require(`./palindromeNum`);

test('returns true/false if this is a palindromeNum', () => {
  expect(palindromeNum(121)).toBe(true);
});

test('returns true/false if this is a palindromeNum', () => {
  expect(palindromeNum(-10)).toBe(false);
});

test('returns true/false if this is a palindromeNum', () => {
  expect(palindromeNum(1210021)).toBe(false);
});
