const { default: TestRunner } = require('jest-runner');
const mergeTwoLists = require(`./mergeTwoLists`);

test('Merge the two lists in a one sorted list.', () => {
  expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toContain([1, 1, 2, 3, 4, 4]);
});

test('Merge the two lists in a one sorted list.', () => {
  expect(mergeTwoLists([], [])).toBe([]);
});

test('Merge the two lists in a one sorted list.', () => {
  expect(mergeTwoLists([], [0])).toBe([0]);
});
