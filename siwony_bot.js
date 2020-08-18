const Discord = require('discord.js');
const client = new Discord.Client();    //client 는 봇
const PREFIX = "시워나"
const config = require('./config.json');

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if (msg.content === PREFIX + 'ping') {
        msg.channel.send('ping');
    }
});

client.login(config.token);