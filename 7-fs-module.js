const { readFile, writeFile} = require('fs');

console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return;
  }

  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return;
    }

    const second = result;

  writeFile('./content/re-write-module.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
    if (err) {
      console.log(err)
      return;
    }
    console.log('Done with this book');
  })
  })
})
console.log('Start next book');