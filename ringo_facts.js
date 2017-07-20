const FACTS = require('./facts');

class RingoFacts {
  static responseFor(message, rtm) {
    let match = message.text.match(/facts? about (cats|dogs)/i);
    if (match) {
      this.sendFact(match[1], message.channel, rtm);
    }
  }

  static sendFact(type, channel, rtm) {
    let facts = FACTS[type];
    let rand = Math.floor(Math.random() * facts.length);
    rtm.sendMessage(facts[rand], channel);
  }
}

module.exports = RingoFacts
