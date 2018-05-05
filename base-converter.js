function baseConverter(decimal, base) {
  const remainderStack = [];
  let remainder;
  let binaryString = '';

  while (decimal > 0) {
    remainder = Math.floor(decimal % base);
    remainderStack.push(remainder);
    decimal = Math.floor(decimal / base);
  }

  while (remainderStack.length > 0) {
    binaryString += remainderStack.pop().toString();
  }
  console.log(binaryString);
  return binaryString;
}

baseConverter(10, 2);
