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

let stack2 = new StackClass();
stack2.push(3);
stack2.push(4);
stack2.push(8);
stack2.push(3);
stack2.print();
