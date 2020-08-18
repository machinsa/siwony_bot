const Discord = require('discord.js');
const client = new Discord.Client();    //client 는 봇
const PREFIX = "시워나 "
const config = require('./config.json');

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

//디코 명령어
client.on('message', msg => {
    //인삿말
    if (msg.content === PREFIX + '하로' || msg.content === PREFIX + '안녕' || msg.content === PREFIX + '안뇽') {
        let hello_rand_num = Math.floor(Math.random() * 3 ) + 1;
        switch (hello_rand_num){
            case 1 :
                msg.channel.send('하로o//');
                break;
            case 2 :
                msg.channel.send('안뇽!');
                break;
            case 3 :
                msg.channel.send('안녕하세여ㅓ...!');
                break;
        }
    }
    //명령어가 없을떄
    else{
        let cmd_not_found = Math.floor(Math.random() * 2) + 1;
        switch (cmd_not_found){
            case 1 :
                msg.channel.send('(갸웃..?');
                break;
            case 2 :
                msg.channel.send('몰라여...^^ㅣ발...')
                break;
        }
        return 
    }
});


client.login(config.token);