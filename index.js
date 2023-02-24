const TelegramBot = require("node-telegram-bot-api");
const { Configuration, OpenAIApi } = require("openai");

const openAiSecretKey = process.env.OPEN_AI_KEY;

const configuration = new Configuration({
  apiKey: openAiSecretKey,
});
const openai = new OpenAIApi(configuration);

const bot = new TelegramBot(process.env.BOT_API_TOKEN, { polling: true });

const modelId = "text-davinci-003";

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  try {
    const message = msg.text;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0,
      n: 1,
      stream: false,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
      max_tokens: 1060,
    });

    bot.sendMessage(chatId, response.choices?.[0].text || "Hi");
  } catch (err) {
    console.error(err);
  }
});
