const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) {
    console.log(client.user.tag + ' has logged in.');
    client.user.setPresence({ 
      activity: { 
        name: 'Bot created by Luna.#7875 | Prefix - t',
        type: "PLAYING"
       }, 
       status: 'dnd'
    })
     .catch(console.error);
  }
}