/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import StringLength from '../modules/stringLength.js'

it('Test 1: Test string length count Function', () => {
    // Assign
    const str = 'String';

    // Act
    const len = StringLength(str);

    // Assert
    expect(len).toBe(6);
})