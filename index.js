
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

    // Генерируем ответ с помощью 
    
 
    
   const response = await openai.createCompletion({
    model:davinci-003",
    prompt: message,
    temperature: 0,
    n: 1,
    stream: false,
    presence_penalty: 0,
    frequency_penalty: 0,
    top_p: 1,
    max_tokens: 1060,
  });
  
    // Отправляем ответное сообщение пользователю
    bot.sendMessage(chatId, response.choices[0].text);
  } catch (err) {
    console.error(err);
  }
});
