/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import Calculator from '../modules/calculator.js';

describe('Testing Add', () => {
  it('Test 1: Test add Function #1', () => {
    //Assign
    const num1 = 4;
    const num2 = 2;
    let calc = new Calculator(num1, num2);

    //Act and assert
    const result = calc.add();

    //Assert
    expect(result).toBe(6);
  })

  it('Test 2: Test add Function #2', () => {
    //Assign
    const num1 = 5;
    const num2 = 3;
    let calc = new Calculator(num1, num2);

    //Act and assert
    const result = calc.add();

    //Assert
    expect(result).toBe(8);
  })

  it('Test 3: Test add Function #3', () => {
    //Assign
    const num1 = 0;
    const num2 = 1;
    let calc = new Calculator(num1, num2);

    //Act and assert
    const result = calc.add();

    //Assert
    expect(result).toBe(1);
  })
})

describe('Testing Subtruct', () => {
    it('Test 1: Test subtruct Function #1', () => {
      //Assign
      const num1 = 4;
      const num2 = 2;
      let calc = new Calculator(num1, num2);
  
      //Act and assert
      const result = calc.subtruct();
  
      //Assert
      expect(result).toBe(2);
    })
  
    it('Test 2: Test subtruct Function #2', () => {
      //Assign
      const num1 = 9;
      const num2 = 3;
      let calc = new Calculator(num1, num2);
  
      //Act and assert
      const result = calc.subtruct();
  
      //Assert
      expect(result).toBe(6);
    })
  
    it('Test 3: Test subtruct Function #3', () => {
      //Assign
      const num1 = 0;
      const num2 = 1;
      let calc = new Calculator(num1, num2);
  
      //Act and assert
      const result = calc.subtruct();
  
      //Assert
      expect(result).toBe(-1);
    })
  })

  describe('Testing Multiply', () => {
    it('Test 1: Test Multiply Function #1', () => {
      //Assign
      const num1 = 4;
      const num2 = 2;
      let calc = new Calculator(num1, num2);
  
      //Act and assert
      const result = calc.multiply();
  
      //Assert
      expect(result).toBe(8);
    })
  
    it('Test 2: Test Multiply Function #2', () => {
      //Assign
      const num1 = 5;
      const num2 = 3;
      let calc = new Calculator(num1, num2);
  
      //Act and assert
      const result = calc.multiply();
  
      //Assert
      expect(result).toBe(15);
    })
  
    it('Test 3: Test Multiply Function #3', () => {
      //Assign
      const num1 = 0;
      const num2 = 1;
      let calc = new Calculator(num1, num2);
  
      //Act and assert
      const result = calc.multiply();
  
      //Assert
      expect(result).toBe(0);
    })
  })

  describe('Testing Divide', () => {
    it('Test 1: Test Divide Function #1', () => {
      //Assign
      const num1 = 4;
      const num2 = 2;
      let calc = new Calculator(num1, num2);
  
      //Act and assert
      const result = calc.divide();
  
      //Assert
      expect(result).toBe(2);
    })
  
    it('Test 2: Test Divide Function #2', () => {
      //Assign
      const num1 = 5;
      const num2 = 3;
      let calc = new Calculator(num1, num2);
  
      //Act and assert
      const result = calc.divide();
  
      //Assert
      expect(Math.floor(result)).toBe(1);
    })
  
    it('Test 3: Test Divide Function #3', () => {
      //Assign
      const num1 = 0;
      const num2 = 1;
      let calc = new Calculator(num1, num2);
  
      //Act and assert
      const result = calc.divide();
  
      //Assert
      expect(result).toBe(0);
    })
  })