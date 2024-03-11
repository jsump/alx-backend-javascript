export default function createInt8TypedArray(length, position, value) {
  const intEightArray = new Int8Array(length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  intEightArray[position] = value;

  return intEightArray;
}
