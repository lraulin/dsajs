class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    items = [];
    return this.items;
  }
}

// Use for binary conversion
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

// Use for conversion from any base
function baseConverter(decimal, base) {
  const remainderStack = new Stack();
  let remainder;
  let binaryString = '';

  while (decimal > 0) {
    remainder = Math.floor(decimal % base);
    remainderStack.push(remainder);
    decimal = Math.floor(decimal / base);
  }

  while (!remainderStack.isEmpty()) {
    binaryString += remainderStack.pop().toString();
  }
  console.log(binaryString);
  return binaryString;
}

baseConverter(10);

function parChecker(str) {
  const stack = new Stack();
  let balanced = true;
  let index = 0;
  while (index < str.length && balanced) {
    let symbol = str[index];
    if (symbol == '(') {
      stack.push(symbol);
    } else {
      if (stack.isEmpty()) {
        balanced = false;
      } else {
        stack.pop();
      }
    }
    index++;
  }
  if (balanced && stack.isEmpty()) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

parChecker('((()))');
parChecker('(()))()())(((');
