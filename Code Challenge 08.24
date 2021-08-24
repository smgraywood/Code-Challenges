class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
    this.isEmpty = () => Boolean(!this.getLength())
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

describe("Tests", () => {
  it("test", () => {
const queue = new Queue();
queue.enqueue("hello")

Test.assertEquals(queue.peek(), "hello");
Test.assertEquals(queue.dequeue(), "hello");
  });
});
