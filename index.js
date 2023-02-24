
const TelegramBot = require('node-telegram-bot-api');
const openai = require('openai');

// Создаем экземпляр бота и указываем токен, полученный у BotFather
const bot = new TelegramBot(process.env.BOT_API_TOKEN, {polling: true});

// Указываем токен OpenAI API и ID модели
openai.apiKey =process.env.OPEN_AI_KEY ;
const modelId = 'text-davinci-003';

// Обрабатываем все сообщения
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  try {
    // Извлекаем текст сообщения
    const message = msg.text;

    // Генерируем ответ с помощью OpenAI API
    const response = await openai.completions.create({
      engine: 'davinci',
      prompt: message,
      maxTokens: 150,
      n: 1,
      stop: ['\n', '.', '!', '?'],
      temperature: 0.5
    });

    // Отправляем ответное сообщение пользователю
    bot.sendMessage(chatId, response.choices[0].text);
  } catch (err) {
    console.error(err);
  }
});
