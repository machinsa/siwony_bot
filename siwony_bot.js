const Discord = require('discord.js');
const client = new Discord.Client();    //client 는 봇
const PREFIX = "시워나 "
const config = require('./config.json');

//로그인
client.login(config.token);
client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
    //봇 ~하는중
    client.user.setActivity('siwony_bot!', { type: 'PLAYING' })
});

//메세지가 왔을때
client.on('message', msg => {
    if(msg.author.bot){return}//봇이면 리턴
    else if(msg.content.indexOf(PREFIX) !== 0){return}//접두사 안붙이면 리턴

    let command = msg.content.substring(PREFIX.length, msg.length);    //접두사 제외한 단어 자르기
    console.log(command);
    //도움말
    if(command === "도움말" || command === "help" || command === "커맨드"){
        const embed = new Discord.MessageEmbed()
            .setTitle("siwony_bot!(시워니봇)") // 여기는 임베드에서 타이틀로 사용됩니다!
            .setDescription("siwony_ 가 js공부하고싶어 만든봇이에여 요거는 ") // 여기는 타이틀을 설명해주는 걸로 사용됩니다!
            .setColor("0x87cefa") // 참고로 색은 헥사 넣으면 안되고 그 걍 나한테 물어봐 여기는 색상을 설정하는 공간인데 HEX값을 넣으셔도 됩니다! (#7239DA) "red" 말고 다른것들도 있어요! 맨 밑에다가 적어놓을테니 확인해주세요!
            .setFooter("밑부분") // 여기는 임베드의 밑부분에서 말머리로 사용됩니다!
            //.setThumbnail("http://blogfiles.naver.net/20151023_23/shin_0305_1445573936921jrPRT_JPEG/%BD%E6%B3%D7%C0%CF%BF%B9%BD%C3.jpg") // 여기는 임베드에서 썸네일로 불려옵니다! (URL를 넣어가 경로를 기입하면 그 경로에 있는 이미지를 불러와 썸네일로 이용되요!
            //.setImage("url") // 여기는 임베드에서 이미지로 사용되는 곳입니다. // 위에 설명이랑 같아요
        
            .setTimestamp() // 여기는 타임스탬프를 설정하는 공간인데 비워두면 현재시각, 여기에 타임스탬프를 넣으시면 그 값에 맞는 시간으로 변환됩니다(라이츄 바보 자식)
            .addField("여기는 소제목", "여기는 소제목 설명같은거...?") // 첫번째 칸은 임베드의 소제목, 두번째 칸은 임베드의 소제목의 설명하는 공간입니다! 세번째 칸은 INLINE으로 사용되는데 TRUE 하면 라인에 들어가는거고 FALSE 하면 밑라인으로 내려가게 됩니다.
        msg.reply(embed) // EMBED를 REPLY로 답변합시다!
    }
    //인삿말
    else if (command === "하로" || command === "안녕" || command === "안뇽") {
        let author = msg.author.tag.split('#'); //#기준으로 나누기 ex)사람#1234  이면 author[0] == 사람, author[1] == 1234
        let hello_comments = [`하로o// ${author[0]}`, '안뇽', '안녕하세여ㅓ...!', '0ㅅ0'];
        let rand_num = Math.floor(Math.random() * hello_comments.length ); 
        msg.channel.send(hello_comments[rand_num]);
    }
    //구르기
    else if(command === "굴러" || command === "굴러!"){
        let lollout = ['데구르르 쾅...!', '흐애ㅐ....', '굴러어어...!!!'];
        let rand_num = Math.floor(Math.random() * lollout.length ); 
        msg.channel.send(lollout[rand_num]);
    }
    //시워니 드립
    else if(command === "시원해" || command === "시원스쿨"){
        let siwony_drip = ['.....!!', '에엥...?', '0ㅅ0', '저 불렀나요...?'];
        let rand_num = Math.floor(Math.random() * siwony_drip.length ); 
        msg.channel.send(siwony_drip[rand_num]);
    }
    else if(command === "라이츄"){
        let lie_chu = ['엄청나신분...!!', '선배님...!', '라이츄!', '겨울특강 없다고요....?'];
        let rand_num = Math.floor(Math.random() * lie_chu.length ); 
        msg.channel.send(lie_chu[rand_num]);
    }
    else if(command === "야발"){
        let fuxx = ['야발..!!', '야발', '캌...퉷!!'];
        let rand_num = Math.floor(Math.random() * fuxx.length ); 
        msg.channel.send(fuxx[rand_num]);
    }
    else{   //도움말이 없얼떄
        let none_command = ['.....?', '(갸웃...?', '그게뭐에요....?'];
        let rand_num = Math.floor(Math.random() * none_command.length ); 
        msg.channel.send(none_command[rand_num]);
    }
});