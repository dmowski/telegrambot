const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_API_TOKEN, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Я получил ваше сообщение!');
});
