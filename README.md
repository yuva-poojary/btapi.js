# btapi.js
The official api for https://botstemple.glitch.me to post an get bots/users statistics.

## Usage Example
```js
const Client = require('btapi.js');
const BTClient = new Client('API_TOKEN', 'BOT_ID');
// If you only need get bot/users info in API_TOKEN and BOT_ID put 1.

// Posting server count.
BTClient.postServers(/*<guilds>*/).then(() => {
  console.log("Posted!");
});
```

```js
BTClient.getBot('id').then((bot) => {
  console.log(bot)
})
```
