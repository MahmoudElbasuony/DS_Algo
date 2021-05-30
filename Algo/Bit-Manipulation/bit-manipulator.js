export class BitManipulator {
  static getIthBit(number, bitPosition = 0) {
    validateNumber(number, "getIthBit() requires valid number");
    validateNumber(bitPosition, "getIthBit() requires valid position number");
    return (1 << bitPosition) & number;
  }
  static setIthBit(number, bitPosition = 0) {
    validateNumber(number, "setIthBit() requires valid number");
    validateNumber(bitPosition, "setIthBit() requires valid position number");
    return (1 << bitPosition) | number;
  }
  static clearBit(number, bitPosition = 0) {
    validateNumber(number, "clearBit() requires valid number");
    validateNumber(bitPosition, "clearBit() requires valid position number");
    return ~(1 << bitPosition) & number;
  }
  static updateBit(number, bitPosition = 0, newBit) {
    validateNumber(number, "updateBit() requires valid number");
    validateNumber(bitPosition, "updateBit() requires valid position number");
    if (newBit !== 0 && newBit !== 1)
      throw new Error("updateBit() requires valid bit");

    return newBit === 0
      ? BitManipulator.clearBit(number, bitPosition)
      : BitManipulator.setIthBit(number, bitPosition);
  }
  static isEven(number) {
    validateNumber(number, "isEven() requires valid number");
    return (number & 1) === 0;
  }
  static isPositive(number) {
    validateNumber(number, "isPositive() requires valid number");
    if (number === 0) {
      return false;
    }
    return number >> 31 === 0;
  }
  static multiplyByTwo(number) {
    validateNumber(number, "multiplyByTwo() requires valid number");
    return number << 1;
  }
  static divideyByTwo(number) {
    validateNumber(number, "divideyByTwo() requires valid number");
    return number >> 1;
  }
}

function validateNumber(number, error = "invalid number") {
  if (
    number === undefined ||
    number === null ||
    Number.isNaN(number) ||
    !Number.isInteger(number)
  )
    throw Error(error);
}
