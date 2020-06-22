const botconfig = require("./botconfig.json");
const discord = require("discord.js");
const bot = new discord.Client({disableEveryone : true});
const colors = require("./colors.json");
const fetch = require('node-fetch');


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("Video Games | g!help");

    
})


bot.on("message", async msg=>  {
    if(msg.author.bot || msg.channel.type == "dm") return;

    
    let prefix = botconfig.prefix;
    let msgArray = msg.content.split(" ");
    let cmd = msgArray[0];
    let args = msgArray.slice[0];

    if (cmd == `${prefix}stats`) {
       
        const response = await fetch("https://api.fortnitetracker.com/v1/profile/pc/whatland", {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }



        });
        const data = await response.json();

        //top 3
        var three = data.lifeTimeStats;
        console.log(three);
        three = three[1];
        three = Object.values(three);
        console.log(three);
                
        

            
    }
    



})



'TRN-Api-Key'; '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
bot.login(botconfig.token);