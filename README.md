# timeout-promise
### Delay inside asynchronous code...

### Example:
```js
  const { timeout } = require('timeout-promise');

  (async () => {
    console.log('Hello, ');
    await timeout(10000); // Delay 10 seconds (10000 milliseconds)
    console.log('World!');
  })();
```