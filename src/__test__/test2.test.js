const reverseString = require('../modules/stringReverse.js');

it('Test 1: Test string reverse Function', () => {
  // Assign
  const str = 'car';

  // Act
  const reverse = reverseString(str);

  // Assert
  expect(reverse).toBe('rac');
});
