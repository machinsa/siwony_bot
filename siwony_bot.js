const Discord = require('discord.js');
const client = new Discord.Client();    //client 는 봇
const token = "NzQ0ODcwNTA2NDMxNTEyNjE4.Xzpgtw.UWLn6hqXjJ9FojiGJ4Z22422pe0";  //토큰

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong!');
    }
});

client.login(token);