import { Stack } from 'stack';

function decToBin(decimal) {
  const remainderStack = new Stack();
  let remainder;
  let binaryString = '';

  while (decimal > 0) {
    remainder = Math.floor(decimal % 2);
    remainderStack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  while (!remainderStack.isEmpty()) {
    binaryString += remainderStack.pop().toString();
  }
  console.log(binaryString);
  return binaryString;
}

decToBin(10);
