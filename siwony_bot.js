const Discord = require('discord.js');
const client = new Discord.Client();    //client 는 봇
const PREFIX = "시워나 "
const config = require('./config.json');
const hello_li = ["하로", "안녕", "안뇽"];

//로그인
client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
    //봇 ~하는중
    client.user.setActivity('siwony_bot!', { type: 'PLAYING' })
});

//디코 명령어
client.on('message', msg => {
    //인삿말
    let hello_idx = hello_li.indexOf(msg.content)
    if (msg.content === PREFIX + hello_li[hello_idx]) {
        let rand_num = Math.floor(Math.random() * 3 ) + 1; 
        switch (rand_num){
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
    //구르기
    else if(msg.content === PREFIX + "굴러" || msg.content === PREFIX + "굴러!"){
        let rand_num = Math.floor(Math.random() * 2 ) + 1; 
        switch (rand_num){
            case 1 :
                msg.channel.send("데구르르 쾅...!");
                break;
            case 2 :
                msg.channel.send("흐애ㅐ....");
        }
    }
    //시워니 드립
    else if(msg.content === PREFIX + "시원해" || msg.content === PREFIX + "시원스쿨"){
        let rand_num = Math.floor(Math.random() * 2) + 1; 
        switch (rand_num){
            case 1 :
                msg.channel.send(".....!!");
                break;
            case 2 :
                msg.channel.send("놀리자마여어ㅓ....야발...");
                break;
        }
    }
    //명령어가 없을떄
});


client.login(config.token);