# btapi.js
The official api for https://botstemple.glitch.me to post an get bots/users statistics.

## Usage Example
```js
const Client = require('btapi.js');
const BTClient = new Client('API_TOKEN', 'BOT_ID');

// Posting server count.
BTClient.postServers(<guilds>).then(() => {
  console.log("Posted!");
});
```
