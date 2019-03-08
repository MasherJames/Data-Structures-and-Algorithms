function* generators(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
  yield i + 4;
}

function* parent_generator(i) {
  yield i;
  yield* generators(i);
  return i + 10;
}

const gen = parent_generator(10);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* add(a, b) {
  return a + b;
}

let res = add(1, 2);
console.log(res.next());
