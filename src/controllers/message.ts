import bot from '@providers/bot';
import { generateText } from '@services/generates';
bot.on('message', async (ctx) => {
  try {
    const message = ctx.message.text || '';
    const result = await generateText(message);

    await ctx.reply(result.text, {
      parse_mode: 'Markdown',
    });
  } catch (error) {
    console.log(error);
  }
});
