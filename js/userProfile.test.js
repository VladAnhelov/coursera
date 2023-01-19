const { default: TestRunner } = require('jest-runner');
const addFive = require(`./userProfile`);

test('returns num plus 5', () => {
  expect(addFive(1)).toBe(6);
});
