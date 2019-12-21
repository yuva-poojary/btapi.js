# btapi.js
The official api for https://botstemple.glitch.me to post an get bots/users statistics.

## Usage Example

#### Publish the number of servers.

**With eris**
```js
const Eris = require("eris");
const BT = require('btapi.js');
const BTClient = new BT('BOT_API_TOKEN', 'BOT_ID');
// Replace BOT_API_TOKEN with your bot api token. This can be generated in the web.
var bot = new Eris("BOT_TOKEN");
// Replace BOT_TOKEN with your bot account's token.

bot.on('ready', () => {
  BTClient.postServers(bot.guilds.size).then((response) => {
    console.log('Ready.')
    console.log(response) // For information.
  })
})
bot.connect()
```

**With discord.js**
```js
const Discord = require('discord.js');
const BT = require('btapi.js');
const BTClient = new BT('BOT_API_TOKEN', 'BOT_ID');
// Replace BOT_API_TOKEN with your bot api token. This can be generated in the web.
const client = new Discord.Client()

client.on('ready', () => {
  BTClient.postServers(client.guilds.size).then((response) => {
    console.log('Ready.')
    console.log(response) // For information.
  })
})
client.login('BOT_TOKEN');
```
