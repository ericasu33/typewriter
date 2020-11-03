const sentence = "Hello there from lighthouse";

let time = 0;
let delay = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += delay;
}

setTimeout(() => {
  process.stdout.write('\n');
}, time);