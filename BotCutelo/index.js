const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'Usar token do seu bot';

bot.login(token)
bot.on('ready', () => {
    console.log('Pai ta on :)')
})

bot.on('message', msg => {
    if (msg.content === 'Cutelo'){
        msg.reply('Você disse cutelo ?' + 'images.png')
    }
})