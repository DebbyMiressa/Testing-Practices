export default class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add = () => this.x + this.y;

  subtruct = () => this.x - this.y;

  multiply = () => this.x * this.y;

  divide = () => this.x / this.y;
}