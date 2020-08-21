const Discord = require("discord.js");

exports.run = (client,message,args) => {
    var gif = [
        "https://media.giphy.com/media/WS5tiX9dBqRVEmtl6e/giphy.gif", 
        "https://i.gifer.com/3f8o.gif",
        "https://66.media.tumblr.com/96c90512f183df6bff7d59f1addd9f35/tumblr_o9jwtg9Y7O1qzhjh2o1_400.gif",
        "https://thumbs.gfycat.com/ConfusedQuerulousCarp-size_restricted.gif",
        "https://media.giphy.com/media/daVAZonLPwv6ThjVX2/giphy.gif",
        "https://media.giphy.com/media/8rGKtL7Ksr16w/giphy.gif",
        "https://media.giphy.com/media/l41m1s2BGlUkOKvEA/giphy.gif",
        "https://media.giphy.com/media/Her9TInMPQYrS/giphy.gif"
    ]

    var random = gif[Math.floor(Math.random() * gif.length)];
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    
    if(!user) {
        return message.reply('Alvo do cutelo não encontrado');
    }
    
    let avatar = message.author.displayAvatarURL({format: "png"});
        const embed = new Discord.MessageEmbed()
            //.setTitle("Jogar Cutelo")
            .setColor("#00BFFF")
            .setDescription(`${message.author} tacou o cutelo em ${user}`)
            .setImage(random)
            .setTimestamp()
            //.setThumbnail(avatar)
            .setFooter("Team cutelo");
            //.setAuthor("");
        message.channel.send(embed);
}