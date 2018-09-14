'use strict';

const pathChild = ([head, ...rest]) => obj => {
  const child = obj[head];

  if (child === undefined)
    return obj;

  if (rest.length > 0)
    return pathChild(rest)(child);

  return child;
};

const prepareMessage = pathChild(['event', 'updated', 'published', '0', 'message']);

const isGroupChat = obj => obj.type === 'groupchat';
const isChatMessage = obj => obj.body !== undefined;

const allPass = item => (...conditions) =>
  conditions.every(func => func(item));

module.exports = (client) => {
  client.on('pubsub:published', (event) => {
    const message = prepareMessage(event);

    if (allPass(message)(isGroupChat, isChatMessage)) {
      client.emit('pubsub:published:message', message);
    }
  });
};
