# timeout-promisified
### Delay inside asynchronous code...

### Installation
```shell
  yarn add timeout-promisified
```

### Example
```js
  const { timeout } = require('timeout-promisified');

  (async () => {
    console.log('Hello, ');
    await timeout(10000); // Delay 10 seconds (10000 milliseconds)
    console.log('World!');
  })();
```