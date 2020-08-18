const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on("ready", () => {
    console.log(`Pai ta on :), em ${client.channels.size} canais, em ${client.guilds.size} servidores, com ${client.users.size} usuarios.`);
    client.user.setActivity(`Eu estou em ${client.guilds.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O Bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`)
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
});

client.on('message', msg => {
    if (msg.content === 'Cutelo'){
        msg.reply('Você disse cutelo ?')
        msg.channel.send("https://media1.giphy.com/media/AFXYlkKQPdX60Rgm9r/source.gif")
    }
})

client.login(config.token);