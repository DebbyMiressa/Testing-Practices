/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import capitalize from '../modules/capitalize.js'

it('Test 1: Test a function which capitalize the first character of a string', () => {
    // Assign
    const str = 'string';

    // Act
    const capitalized = capitalize(str);

    // Assert
    expect(capitalized).toBe('String');
})
    