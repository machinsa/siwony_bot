const Discord = require('discord.js');
const client = new Discord.Client();    //client 는 봇
const PREFIX = "시워나 "
const config = require('./config.json');

//learn_commends.json 불러오기
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
    let command = msg.content.substring(PREFIX.length, msg.length);    //접두사 제외한 단어 자르기   접두사 부터 마지막 인덱스까지 자름()
    console.log("커맨드: " + command);

    //배워  문자열 자르기
    let user_request;   let bot_response;
    if(command.indexOf("배워") == 0){ 
        let learn_command = command.split(":");     //:를 기준으로 문자열 자름
        user_request = learn_command[0].replace("배워 ", "");   //"배워 를" 잘라주기 위한것 배울 키워드 저장
        bot_response = learn_command[1];        //시워니가 말할 내용을 저장하는것
    }

    //도움말
    if(command === "도움말" || command === "help" || command === "커맨드"){
        const embed = new Discord.MessageEmbed()
            .setTitle("siwony_bot!(시워니봇)") // 여기는 임베드에서 타이틀로 사용됩니다!
            .setColor("0x87cefa") //임베드 색
            .setDescription("siwony_ 가 js공부하고싶어 만든봇이에여 요거는 지속적으로 업데이트를 할꺼에여"
                + " 그냥 js공부하려고 하는거니까 뭐... 지속적으로 업뎃할꺼같은데 아무튼 모르겠다아ㅏㅏ ㅎㅅㅎ") // 여기는 타이틀을 설명해주는 걸로 사용됩니다! 
            .setFooter("siwony_") // 여기는 임베드의 밑부분에서 말머리로 사용됩니다!
            .setThumbnail("https://cdn.discordapp.com/avatars/366087289190875137/d551b5b1e76dc995a6d03bfc9fcc67c0.png?size=128") // 여기는 임베드에서 썸네일로 불려옵니다! (URL를 넣어가 경로를 기입하면 그 경로에 있는 이미지를 불러와 썸네일로 이용되요!
            //.setImage("url") // 여기는 임베드에서 이미지로 사용되는 곳입니다. // 위에 설명이랑 같아요
            .setTimestamp() // 여기는 타임스탬프를 설정하는 공간인데 비워두면 현재시각, 여기에 타임스탬프를 넣으시면 그 값에 맞는 시간으로 변환됩니다
            .addField("접두사","시워나 [커멘드] 를 하면 봇이 작동해요!")
            .addField("인사(안녕, 하로, 안뇽)", "siwony가 인사를 해줘요...!") // 첫번째 칸은 임베드의 소제목, 두번째 칸은 임베드의 소제목의 설명하는 공간입니다! 세번째 칸은 INLINE으로 사용되는데 TRUE 하면 라인에 들어가는거고 FALSE 하면 밑라인으로 내려가게 됩니다.
            .addField("구르기(굴러)", "siwony가 굴러여어ㅓ...(데구르르...)")
            .addField("야발", "시워니가 야발을 외쳐요!")
            .addField("배워 [명령어]:[시워니가 배울말]", "시워니가 무려 학습을해요..!!!(대충 실험적이고 실행 안되는것)")
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
    else if(command === `배워 ${user_request}:${bot_response}`){
        console.log("유저 명령어: " + user_request + "    봇 대답: " + bot_response);
        msg.channel.send("아직 구현을 못했어요 ㅜ....");
    }
    else{   //도움말이 없얼떄
        let none_command = ['.....?', '(갸웃...?', '그게뭐에요....?'];
        let rand_num = Math.floor(Math.random() * none_command.length );
        msg.channel.send(none_command[rand_num]);
    }
});