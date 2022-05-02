const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  list = null;
  first = null;

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    if (this.list === null) {
      this.list = new ListNode();
      this.list.value = value;
      this.first = this.list;
      return;
    }

    this.list.next = new ListNode();
    this.list = this.list.next;
    this.list.value = value;
  }

  dequeue() {
    if (this.first && this.first.value) {
      let val = this.first.value;
      this.first = this.first.next;
      return val;
    }
  }
}

module.exports = {
  Queue
};


// const queue = new Queue();

// queue.enqueue(1); // добавляет элемент в очередь
// queue.enqueue(3); // добавляет элемент в очередь
// queue.dequeue(); // возвращает элемент из начала очереди и удаляет его, возвращает 1
// queue.getUnderlyingList() // возвращает { value: 3, next: null }