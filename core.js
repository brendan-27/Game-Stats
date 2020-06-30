

const botconfig = require("./botconfig.json");
const discord = require("discord.js");
const bot = new discord.Client({disableEveryone : true});
const colors = require("./colors.json");
const fetch = require('node-fetch');
const ow = require('overwatch-stats-api');


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

    //main bot commands.

    if(cmd == `g!help`) {

        Embed = new discord.MessageEmbed()


        //add all of the modules and sub help commands.


        msg.channel.send({embed: Embed});
    }
 
    //fortnite command section.

    if(cmd == `f!help`) {

        Embed = new discord.MessageEmbed()

        //add help command after main command is finished with.


        // 3 modules/

        msg.channel.send({embed: Embed});
    }

    if (cmd == `f!xbl`) {
        var newStr = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStr = arg2[1];

        const response = await fetch("https://api.fortnitetracker.com/v1/profile/xbl/" + newStr, {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }



        });
        const data = await response.json();
        //top 3
        var three = data.lifeTimeStats;
         //error protection
         if (three == undefined) {

            Embed = new discord.MessageEmbed()
            .setColor(colors.blue)
            .setAuthor("Error: ", bot.user.displayAvatarURL())
            .setThumbnail(bot.user.displayAvatarURL())


            .setDescription("That is not a valid username.")




            msg.channel.send({embed: Embed});
            return
        }
        three = three[1];
        three = Object.values(three);
        //top 10
        var ten = data.lifeTimeStats;
        ten = ten[3];
        ten = Object.values(ten);
        //Matches 
        var matches = data.lifeTimeStats;
        matches = matches[7];
        matches = Object.values(matches);
        //kills
        var kills = data.lifeTimeStats;
        kills = kills[10];
        kills = Object.values(kills);
        //wins 
        var wins = data.lifeTimeStats;
        wins = wins[9];
        wins = Object.values(wins);
        //k/d
        var kd = data.lifeTimeStats;
        kd = kd[11];
        kd = Object.values(kd);      
    
        //start embed

        Embed = new discord.MessageEmbed()
        .setColor(colors.blue)
        .setAuthor( newStr + " Fortnite Stats: ", bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())

        .addField("Top 3:", three[1])
        .addField("Top 10:", ten[1])
        .addField("Total Matches:", matches[1])
        .addField("Total Kills", kills[1])
        .addField("Total Wins:", wins[1])
        .addField("K/D:", kd[1])



        .setFooter("Fortnite Stats | g!help")
        msg.channel.send({embed: Embed});

        
    }

    if (cmd == `f!psn`) {

        var newStr = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStr = arg2[1];

        const response = await fetch("https://api.fortnitetracker.com/v1/profile/psn/" + newStr, {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }



        });
        const data = await response.json();

        //top 3
        var three = data.lifeTimeStats;
         //error protection
         if (three == undefined) {

            Embed = new discord.MessageEmbed()
            .setColor(colors.blue)
            .setAuthor("Error: ", bot.user.displayAvatarURL())
            .setThumbnail(bot.user.displayAvatarURL())


            .setDescription("That is not a valid username.")




            msg.channel.send({embed: Embed});
            return
        }
        
        three = three[1];
        three = Object.values(three);
        
        //top 10
        var ten = data.lifeTimeStats;
        ten = ten[3];
        ten = Object.values(ten);
        //Matches 
        var matches = data.lifeTimeStats;
        matches = matches[7];
        matches = Object.values(matches);
        //kills
        var kills = data.lifeTimeStats;
        kills = kills[10];
        kills = Object.values(kills);
        //wins 
        var wins = data.lifeTimeStats;
        wins = wins[9];
        wins = Object.values(wins);
        //k/d
        var kd = data.lifeTimeStats;
        kd = kd[11];
        kd = Object.values(kd);      
    
        //start embed

        Embed = new discord.MessageEmbed()
        .setColor(colors.blue)
        .setAuthor( newStr + " Fortnite Stats: ", bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())

        .addField("Top 3:", three[1])
        .addField("Top 10:", ten[1])
        .addField("Total Matches:", matches[1])
        .addField("Total Kills", kills[1])
        .addField("Total Wins:", wins[1])
        .addField("K/D:", kd[1])



        .setFooter("Fortnite Stats | g!help")
        msg.channel.send({embed: Embed});

        
    }


    if (cmd == `f!pc`) {

        var newStr = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStr = arg2[1];

        const response = await fetch("https://api.fortnitetracker.com/v1/profile/pc/" + newStr, {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }



        });
        const data = await response.json();

        //top 3
        var three = data.lifeTimeStats;
        //error protection
        if (three == undefined) {

            Embed = new discord.MessageEmbed()
            .setColor(colors.blue)
            .setAuthor("Error: ", bot.user.displayAvatarURL())
            .setThumbnail(bot.user.displayAvatarURL())


            .setDescription("That is not a valid username.")




            msg.channel.send({embed: Embed});
            return
        }

        
        three = three[1];
        
        

        three = Object.values(three);
        
        //top 10
        var ten = data.lifeTimeStats;
        ten = ten[3];
        ten = Object.values(ten);
        //Matches 
        var matches = data.lifeTimeStats;
        matches = matches[7];
        matches = Object.values(matches);
        //kills
        var kills = data.lifeTimeStats;
        kills = kills[10];
        kills = Object.values(kills);
        //wins 
        var wins = data.lifeTimeStats;
        wins = wins[8];
        wins = Object.values(wins);
        //k/d
        var kd = data.lifeTimeStats;
        kd = kd[11];
        kd = Object.values(kd);      
    
        //start embed

        Embed = new discord.MessageEmbed()
        .setColor(colors.blue)
        .setAuthor( newStr + " Fortnite Stats: ", bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())

        .addField("Top 3:", three[1])
        .addField("Top 10:", ten[1])
        .addField("Total Matches:", matches[1])
        .addField("Total Kills", kills[1])
        .addField("Total Wins:", wins[1])
        .addField("K/D:", kd[1])



        .setFooter("Fortnite Stats | g!help")
        msg.channel.send({embed: Embed});

        
    }



    if (cmd == `f!itemshop`) {

        //working but need to figure out how to parse data and get images and set it up in a command properly.
        const response = await fetch("https://api.fortnitetracker.com/v1/store", {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }

        });
        const data = await response.json();

        console.log(data);




    }




    //start of csgo sections.

    //cur disabled
    if (cmd == `c!help`) {





    }


    if (cmd == `c!stats`) {
        var newStr = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStr = arg2[1];

        const response = await fetch("https://public-api.tracker.gg/v2/csgo/standard/profile/steam/" + newStr, {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }

        });
        const data = await response.json();

        console.log(data);




    }

    //start of overwatch section.
    if (cmd == `o!help`) {






    }


    if (cmd == `o!stats`) {
        //working OW stats, need to parse and get a system for naming.
        (async () => {
          const stats = await ow.getAllStats('HusseinObama-11715', 'pc');
          console.log(stats);
        })();




    }

    


})



'TRN-Api-Key'; '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
bot.login(botconfig.token);