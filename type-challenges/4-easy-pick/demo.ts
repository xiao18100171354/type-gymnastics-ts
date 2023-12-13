class GenericNumber<NumType> {
  zeroValue!: NumType;
  add!: (x: NumType, y: NumType) => NumType;
}

let stringNumeric  = new GenericNumber<string>();
stringNumeric.zeroValue = '1';
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))
