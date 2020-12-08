const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === ';ping') {

       message.reply('pong');

       }

});


client.on('message', message => {

    if (message.content === ';help') {

       message.reply(';help, ;ping, ;verify');

       }

});
 client.on('message', message => {

    if (message.content === ';verify') {

       message.reply('[insert message embed]');

       }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
