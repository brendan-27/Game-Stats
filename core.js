//started update on 9/17. games include OW and FN and Siege.




//main central commands: api, help, sub helps for all games. 

const botconfig = require("./botconfig.json");
const discord = require("discord.js");
const bot = new discord.Client({disableEveryone : true});
const colors = require("./colors.json");
const fetch = require('node-fetch');
const ow = require('overwatch-stats-api');


const R6API = require('r6api.js');
const r6api = new R6API('cifotix134@vmgmails.com', 'coolkid988');

let username = 'Le_Whatland';
let platform = 'uplay';
        




bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("Gaming | g!help");

    
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
        .setThumbnail(bot.user.displayAvatarURL()) // set custom avatar

        .addField("Top 3:", three[1])
        .addField("Top 10:", ten[1])
        .addField("Total Matches:", matches[1])
        .addField("Total Kills", kills[1])
        .addField("Total Wins:", wins[1])
        .addField("K/D:", kd[1])



        .setFooter("Fortnite Stats | f!help | " + msg.createdAt)
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
        .setThumbnail(bot.user.displayAvatarURL()) // set custom avatar

        .addField("Top 3:", three[1])
        .addField("Top 10:", ten[1])
        .addField("Total Matches:", matches[1])
        .addField("Total Kills", kills[1])
        .addField("Total Wins:", wins[1])
        .addField("K/D:", kd[1])



        .setFooter("Fortnite Stats | f!help | " + msg.createdAt)
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
        .setThumbnail(bot.user.displayAvatarURL()) // set custom avatar

        .addField("Top 3:", three[1])
        .addField("Top 10:", ten[1])
        .addField("Total Matches:", matches[1])
        .addField("Total Kills", kills[1])
        .addField("Total Wins:", wins[1])
        .addField("K/D:", kd[1])



        .setFooter("Fortnite Stats | f!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});

        
    }



   



    //start of csgo sections.
    //need work
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
    //working 05%s





    //95% still needs a bit of touching up but will visit back to it in the future.
    //start of overwatch section.
    if (cmd == `o!help`) {


        //simple embed of what to do, api stuff and talk about response time.


        //teach how to find their id and how to type the command.
        

        Embed = new discord.MessageEmbed()
        .setColor(colors.yellow)
        .setAuthor("Overwatch Stats Help: ", bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())
        
        .setTitle("How to use the Overwatch Section")
        .addField("Use: ", "o!stats {PlayerName-(playertag)}")
        .addField("Example: ", "o!stats KSAA-21785")
        .addField("API: ", "The API callback can take anywhere from 0 seconds to 5 seconds.")
        .addField("Errors: ", "If there is no API response after 5 seconds, the account is either private or not found, so please re-try or ask them to public their account.")
        .addField("Public Profiles: ", "To make your profile public go ingame to options -> social -> career profile visibility: PUBLIC")


        .setFooter("Overwatch Stats | o!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});






    }


    if (cmd == `o!stats`) {
        //working OW stats, need to parse and get a system for naming.

        var newStrName = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStrName = arg2[1];

        const stats = await ow.getAllStats(newStrName, 'pc');


        //REVIST THIS NEED A FUTURE FIX

        /*if(undefined == 'substring') {
            Embed = new discord.MessageEmbed()
            .setColor(colors.yellow)
            .setAuthor("Error: ", bot.user.displayAvatarURL())

            .setDescription("Profile is not found, use o!help to see commands.")

            .setFooter("Overwatch Stats | o!help")
            msg.channel.send({embed: Embed});
        }*/


        var profPic = stats.iconURL; 

        var compHeroes = stats.heroStats.competitive;


        console.log(compHeroes);

        

        Embed = new discord.MessageEmbed()
        .setColor(colors.yellow)
        .setAuthor( newStrName + " Overwatch Stats: ", bot.user.displayAvatarURL())
        .setThumbnail(profPic) // need to set  so i have a custom background (overwatch) PLACE PLAYER ICON.


        .addField("Battle Tag: ", stats["battletag"])
        .addField("Level: ", stats["level"])
        .addField("Prestige: ", stats["prestige"])
        .addField("Endorsments: ", "Shotcaller: " + stats.endorsements["shotcaller"] + ", Teammate: " + stats.endorsements["teammate"] + ", Sportsmanship: " + stats.endorsements["sportsmanship"])


        .setImage("https://d15f34w2p8l1cc.cloudfront.net/overwatch/625645c3c9af49eb315b504dba32137bb4081d348ec5b9750196b0ec0c9bb6a6.png") //BORDER TO SEE WHAT LEVEL


        //  (STARS).setImage("https://d15f34w2p8l1cc.cloudfront.net/overwatch/605c201cf3f0d24b318f643acb812084ff284e660f2bb5d62b487847d33fad29.png")

        .addField("Comp: Total Damage Done: ", compHeroes.overall.combat.all_damage_done)
        .addField("Comp: Barrier Damage Done: ", compHeroes.overall.combat.barrier_damage_done)
        .addField("Comp: Total Deaths: ", compHeroes.overall.combat.deaths)
        .addField("Comp: Total Eliminations: ", compHeroes.overall.combat.eliminations)
        .addField("Comp: Total Objective Time: ", compHeroes.overall.combat.objective_time)
        .addField("Comp (Total): Loses", compHeroes.overall.game.games_lost)
        .addField("Comp (Total): Played", compHeroes.overall.game.games_played)
        .addField("Comp (Total): Wins", compHeroes.overall.game.games_won)
        .addField("Comp (Total): ", compHeroes.overall.game.time_played)





        .setFooter("Overwatch Stats | o!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});




    }




    //start of r6 stats seg.



    if (cmd == 'r6!help') {

        //func



    }


    if(cmd == "r6!getid" || cmd == "r6!getID"){

        var newStrName = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStrName = arg2[1];

        const data = await r6api.getId('uplay', newStrName);
        console.log(data);


        msg.channel.send("This players id is " + data[0].userId);





    }


    if(cmd == 'r6!stats') {

        
        //example: console.log(`${username} has played ${stats.pvp.general.matches} matches.`);


        var newStrName = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStrName = arg2[1];


        const name = await r6api.getUsername('uplay', newStrName);
        const data = await r6api.getStats('uplay', newStrName);

        //console.log(name);

        console.log(data);
        //console.log(name)

        Embed = new discord.MessageEmbed()
        .setColor(colors.blue)
        .setAuthor( data[0].username + " Rainbow Six Siege Stats: ", bot.user.displayAvatarURL()) //fix name
        .setThumbnail(bot.user.displayAvatarURL()) 


        .addField("Total Kills: ", data[0].pvp.general.kills)
        .addField("Total Deaths: ", data[0].pvp.general.deaths)
        .addField("Total Assists: ", data[0].pvp.general.assists)
        .addField("Total Headshots: ", data[0].pvp.general.heashots)
        .addField("Total Matches: ", data[0].pvp.general.matches)
        .addField("Total Wins: ", data[0].pvp.general.wins)
        .addField("Total Losses: ", data[0].pvp.general.losses)


        //add more

        .setFooter("R6 Seige Stats | r6!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});



    }
    


})



'TRN-Api-Key'; '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
bot.login(botconfig.token);