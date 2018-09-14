# GroupChat Unjoined Messages

This plugin inserts the capability of receive and prepare a message from a unjoined room, as joined room message.

## Install

Just run ```yarn add xmpp-groupchat-unjoined-messages``` or ```npm install --save xmpp-groupchat-unjoined-messages```.

## Configuration

This plugin needs no configuration.

## How to use

For Node/CommonJS:

```javascript
const GroupChatUnjoinedMessages = require('xmpp-groupchat-unjoined-messages');

client.use(GroupChatUnjoinedMessages);
``` 

For ES6+:
```javascript
import GroupChatUnjoinedMessages from 'xmpp-groupchat-unjoined-messages';

client.use(GroupChatUnjoinedMessages);
```

## Events
This package enable a new event to subscribe, **pubsub:published:message**, and its described above:
```javascript
client.on('pubsub:published:message', (msg) => {
  console.log(msg);
});
```

## License

This plugin is [MIT licensed](./LICENSE).