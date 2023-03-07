import { positionID } from "../utils";
import Position from "./Position";

class Snake {
  #head: Position;
  #tail: Position;
  #bodyMap: Map<string, Position>;
  #bodyArray: Position[];

  constructor(snake: Position[]) {
    this.#head = snake[0];
    this.#tail = snake[snake.length - 1];
    this.#bodyMap = new Map(
      snake.map((pos) => [positionID(pos), pos])
    );
    this.#bodyArray = snake;

    this.setHead = this.setHead.bind(this);
    this.getHead = this.getHead.bind(this);
    this.setTail = this.setTail.bind(this);
    this.getTail = this.getTail.bind(this);
    this.removeTail = this.removeTail.bind(this);
    this.getBody = this.getBody.bind(this);
    this.move = this.move.bind(this);
    this.has = this.has.bind(this);
  }

  setHead(newHead: Position) {
    this.#head = newHead;
  }

  setTail(newTail: Position) {
    this.#tail = newTail;
  }

  has(pos: Position) {
    return this.#bodyMap.has(positionID(pos));
  }

  getHead() {
    return this.#head;
  }
  getTail() {
    return this.#tail;
  }

  removeTail(tail: Position) {
    this.#bodyArray.pop();
    this.#bodyMap.delete(positionID(tail));
    this.setTail(this.#bodyArray[this.#bodyArray.length - 1]);
  }

  getBody() {
    return this.#bodyArray;
  }

  move(positionShift: Position) {
    const currentHead = this.getHead();
    const newHead = new Position(
      currentHead.getRow() + positionShift.getRow(),
      currentHead.getCol() + positionShift.getCol()
    );
    this.setHead(newHead);
    this.removeTail(this.getTail());
    this.#bodyMap.set(positionID(newHead), newHead);
    this.#bodyArray.unshift(newHead);
  }
}

export default Snake;
