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

//메세지가 왔을때
client.on('message', msg => {
    if(msg.author.bot){return}//봇이면 리턴
    else if(msg.content.indexOf(PREFIX) !== 0){return}//접두사 안붙이면 리턴

    let commend = msg.content.substring(PREFIX.length, msg.length);    //접두사 제외한 단어 자르기
    console.log(commend);
    //도움말
    if(commend === "도움말" || commend === "help" || commend === "커맨드"){
        msg.reply('url........');
    }
    //인삿말
    else if (commend === "하로" || commend === "안녕" || commend === "안뇽") {
        let rand_num = Math.floor(Math.random() *3 ) + 1; 
        switch (rand_num){
            case 1 : msg.channel.send('하로o//');
                break;
            case 2 : msg.channel.send('안뇽!');
                break;
            case 3 : msg.channel.send('안녕하세여ㅓ...!');
                break;
            case 4 : msg.channel.send('0ㅅ0');
                break;
        }
    }
    //구르기
    else if(commend === "굴러" || commend === "굴러!"){
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
    else if(commend === "시원해" || commend === "시원스쿨"){
        let rand_num = Math.floor(Math.random() * 3) + 1; 
        switch (rand_3um){
            case 1 :
                msg.channel.send(".....!!");
                break;
            case 2 :
                msg.channel.send("놀리자마여어ㅓ....야발...");
                break;
            case 3 : msg.channel.send('0ㅅ0');
                break;
3       }   
    }
    else if(commend === "라이츄"){
        let rand_num = Math.floor(Math.random() * 4) + 1; 
        switch (rand_num){
            case 1 :
                msg.channel.send("엄청나신분...!!");
                break;
            case 2 :
                msg.channel.send("선배님...!");
                break;
            case 3 :
                msg.channel.send("라이츄!");
            case 4 :
                msg.channel.send("겨울특강 없다고요....?");
        }
    }
    else{   //도움말이 없얼떄
        let rand_num = Math.floor(Math.random() * 3) + 1; 
        switch (rand_num){
            case 1 : msg.channel.send(".....?");
                break;
            case 2 : msg.channel.send("(갸웃...?");
                break;
            case 3 : msg.channel.send("그게뭐에요....?");
                break;
        }
    }
});


client.login(config.token);