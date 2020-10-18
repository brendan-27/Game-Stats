//started update on 9/17. games include OW and FN and Siege.




//main central commands: api, help, sub helps for all games. 

const botconfig = require("./botconfig.json");
const discord = require("discord.js");
const bot = new discord.Client({disableEveryone : true});
const colors = require("./colors.json");
const fetch = require('node-fetch');
const ow = require('overwatch-stats-api');
const API = require('call-of-duty-api')();






const R6API = require('r6api.js');
const r6api = new R6API('cifotix134@vmgmails.com', 'coolkid988');

let username = 'Le_Whatland';
let platform = 'uplay';


var invite = "https://discord.com/oauth2/authorize?client_id=724169400181063732&permissions=0&scope=bot";






function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

    

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)

    //bot.user.setActivity("Gaming | g!help");
    
})


let statuses = [`Rainbow Six Siege`, "g!help", "Games", `Overwatch`, `CSGO`, 'Apex Legends']

setInterval(function() {


    let status = statuses[Math.floor(Math.random() * statuses.length)];

    bot.user.setActivity(status, {type: "WATCHING"});


}, 500000)


bot.on("message", async msg=>  {
    if(msg.author.bot || msg.channel.type == "dm") return;

    
    let prefix = botconfig.prefix;
    let msgArray = msg.content.split(" ");
    let cmd = msgArray[0];
    let args = msgArray.slice[0];




    //api 

    if (cmd == `${prefix}ping`) {
        
        msg.channel.send("Connecting To Server...").then(m => {
            var ping = m.createdTimestamp - msg.createdTimestamp;
            var botPing = Math.round(bot.ping);


            m.edit(`Bot Ping: ${ping}`)
        })


    }

    if(cmd == `${prefix}stats`) {

        Embed = new discord.MessageEmbed()
        
        .setColor(colors.blue)
        .setAuthor("Game Stats", bot.user.displayAvatarURL())
        
        .addField("Total Servers: ", numberWithCommas(bot.guilds.cache.size))
        .addField("Total Members: ", numberWithCommas(bot.users.cache.size))

        .setFooter("Game Stats | g!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});
    }

  

    //main bot commands.

    if(cmd == `g!help`) {

        Embed = new discord.MessageEmbed()

        .setColor(colors.blue)
        .setAuthor("Game Stats Bot Help", bot.user.displayAvatarURL)
        .setThumbnail(bot.user.displayAvatarURL())

        .addField("**GENERAL commands for Game Stats:** ", "Help, API, Stats, Ping, Usesage.", true)
        .addField("**g!ping: **", "Shows the ping (latency) of the bot. **Example:** 1000 seconds = 1 second response time." )
        .addField("**g!stats: **", "Shows the stats of the bot.")
        .addField("**g!invite: **", "Get the invite link to the bot, so you can add the bot to your own server.")
        .addField("**g!changelog: **", "Provides a list of updates to the bot from the most recent patch.")
        .addField("**FORTNITE: **", "f!help to see all commands.", true)
        .addField("**APEX LEGENDS: **", "a!help to see all commands.", true)
        .addField("**CSGO: **", "c!help to see all commands.", true)
        .addField("**RAINBOW SIX SIEGE: **", "r6!help to see all commands.", true)
        .addField("**OVERWATCH: **", "o!help to see all commands.", true)
        .addField("**HYPERSCAPE: **", "h!help to see all commands.", true)


        .setFooter("Game Stats | g!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});
    }

    if(cmd == `g!invite`) {

        Embed = new discord.MessageEmbed()
        
        .setAuthor("Invite Game Stats Bot to your server!", bot.user.displayAvatarURL())
        .setColor(colors.blue)
        .addField("Use this link to invite Game Bot:", invite)

        .setFooter("Game Stats Bot | g!help | " + msg.createdAt)


        msg.author.send(Embed);




    }

    if(cmd == `g!changelog`) {

        Embed = new discord.MessageEmbed()
        
        .setAuthor("Changelog (Update 0.6.7):", bot.user.displayAvatarURL())
        .setColor(colors.blue)
        .addField("Added: ", "All games g!help to see.")
        .addField("Fixed: ", "Fixed fortnite command not working.")
        .addField("Fixes: ", "Bugs.")



        .setFooter("Game Stats Bot | g!help | " + msg.createdAt)
        msg.channel.send(Embed);


        
    }
 
    //fortnite command section.

    if(cmd == `f!help`) {

        Embed = new discord.MessageEmbed()

        //add help command after main command is finished with.
        Embed = new discord.MessageEmbed()
        .setColor(colors.blue)
        .setAuthor("Fortnite Stats Help: ", bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())
        
        .setTitle("How to use the Fortnite Section")
        .addField("Use: ", "f!xlb, pc, psn {PlayerName}")
        .addField("Example: ", "f!pc Ninja")
        .addField("API: ", "The API callback can take anywhere from 0 seconds to 5 seconds.")
        .addField("Errors: ", "Bot auto tells name errors, if any errors do g!help to report.")
        


        .setFooter("Fortnite Stats | f!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});


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
        wins = wins[8];
        wins = Object.values(wins);
        //k/d
        var kd = data.lifeTimeStats;
        kd = kd[11];
        kd = Object.values(kd);      


        var windper = data.lifeTimeStats;
        windper = windper[9];
        windper = Object.values(windper);
    
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
        .addField("Win %: ", windper[1])
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
        wins = wins[8];
        wins = Object.values(wins);
        //k/d
        var kd = data.lifeTimeStats;
        kd = kd[11];
        kd = Object.values(kd);      


        var windper = data.lifeTimeStats;
        windper = windper[9];
        windper = Object.values(windper);
    
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
        .addField("Win %: ", windper[1])
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


        var windper = data.lifeTimeStats;
        windper = windper[9];
        windper = Object.values(windper);
    
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
        .addField("Win %: ", windper[1])
        .addField("K/D:", kd[1])



        .setFooter("Fortnite Stats | f!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});

        
    }



   



    //start of csgo sections.
    //need work


    //apex legends
    if (cmd == `a!help`) {

        Embed = new discord.MessageEmbed()
        .setColor(colors.orange)
        .setAuthor("Apex Legends Stats Help: ", bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())
        
        .setTitle("How to use the Apex Legends Section")
        .addField("Use: ", "a!stats {PlayerName}")
        .addField("Example: ", "a!stats Twitch_Apryze")
        .addField("API: ", "The API callback can take anywhere from 0 seconds to 5 seconds.")
        .addField("Errors: ", "If there is no API response after 5 seconds, the account is not found, so please re-try with different spelling.")
        


        .setFooter("Apex Legends Stats | a!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});





    }


    if (cmd == `a!stats`) {
        var newStr = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStr = arg2[1];

        const response = await fetch("https://public-api.tracker.gg/v2/apex/standard/profile/origin/" + newStr, {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }

        });
        const datac = await response.json();
        //console.log(datac.data.platformInfo.platformUserId);
        var profPic1 = datac.data.platformInfo.avatarUrl;
        //console.log(datac.data.segments[0]);

        Embed = new discord.MessageEmbed()
        .setColor(colors.orange)
        .setAuthor(datac.data.platformInfo.platformUserId + " Player Apex Legends Stats: ", bot.user.displayAvatarURL()) //fix name
        .setThumbnail(profPic1)  // fix


        .addField("Level: ", datac.data.segments[0].stats.level.value)
        .addField("Total Kills: ", datac.data.segments[0].stats.kills.value)
        .addField("Total Kills With Match: ", datac.data.segments[0].stats.killsPerMatch.value)
        .addField("Total Damage Per Match: ", datac.data.segments[0].stats.damagePerMatch.value)
        .addField("Total Winning Kills: ", datac.data.segments[0].stats.winningKills.value)
        .addField("Total Damage: ", datac.data.segments[0].stats.damage.value)
        .addField("Headshots: ", datac.data.segments[0].stats.headshots.value)
        .addField("Total Matches Played: ", datac.data.segments[0].stats.matchesPlayed.value)
        .addField("Total Revives: ", datac.data.segments[0].stats.revives.value)
        .addField("Total Top 3's: ", datac.data.segments[0].stats.timesPlacedtop3.value)
        

        //add more

        .setFooter("Apex Legends Stats | a!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});








    }


    
    //cur disabled
    if (cmd == `c!help`) {


        Embed = new discord.MessageEmbed()
        .setColor(colors.cyan)
        .setAuthor("CSGO Stats Help: ", bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())
        
        .setTitle("How to use the CSGO Section")
        .addField("Use: ", "a!stats {PlayerName}")
        .addField("Example: ", "a!stats [name]")
        .addField("API: ", "The API callback can take anywhere from 0 seconds to 5 seconds.")
        .addField("Errors: ", "If there is no API response after 5 seconds, the account is not found or is private, so please re-try with different spelling or ask them to public their acct.")
        


        .setFooter("CSGO Stats | a!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});






    }


    if (cmd == `c!stats`) {

        try {

            var newStr = "";

            var arg2 = msg.content.slice(prefix.length).split(' ');

            var argRep = arg2[1].toLowerCase()

            newStr = arg2[1];

            const response = await fetch("https://public-api.tracker.gg/v2/csgo/standard/profile/steam/" + newStr, {

                headers: {
                    'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
                }

            });
            const datac = await response.json();


            //console.log(datac.data.segments[0].stats.score.displayValue);



            Embed = new discord.MessageEmbed()
                .setColor(colors.cyan)
                .setAuthor(datac.data.platformInfo.platformUserHandle + " Player CSGO Stats: ", bot.user.displayAvatarURL())
                .setThumbnail(datac.data.platformInfo.avatarUrl)  // fix


                .addField("Total Playtime: ", datac.data.segments[0].stats.timePlayed.displayValue)
                .addField("Total Kills: ", datac.data.segments[0].stats.kills.displayValue)
                .addField("Total Deaths: ", datac.data.segments[0].stats.deaths.displayValue)
                .addField("KD: ", datac.data.segments[0].stats.kd.displayValue)
                .addField("Total Damage: ", datac.data.segments[0].stats.damage.displayValue)
                .addField("Total Headshots: ", datac.data.segments[0].stats.headshots.displayValue)
                .addField("Total Shots Fired: ", datac.data.segments[0].stats.shotsFired.displayValue)
                .addField("Total Shots Hit: ", datac.data.segments[0].stats.shotsHit.displayValue)
                .addField("Shot Accuracy: ", datac.data.segments[0].stats.shotsAccuracy.displayValue)
                .addField("Bombs Planted: ", datac.data.segments[0].stats.bombsPlanted.displayValue)
                .addField("Bombs Defused: ", datac.data.segments[0].stats.bombsDefused.displayValue)
                .addField("Money Earned: ", datac.data.segments[0].stats.moneyEarned.displayValue)
                .addField("Wins: ", datac.data.segments[0].stats.wins.displayValue)
                .addField("Loses: ", datac.data.segments[0].stats.losses.displayValue)
                .addField("Total Matches Played: ", datac.data.segments[0].stats.matchesPlayed.displayValue)
                .addField("Win Loss %: ", datac.data.segments[0].stats.wlPercentage.displayValue)
                .addField("HS %: ", datac.data.segments[0].stats.headshotPct.displayValue)




                //add more

                .setFooter("CSGO Stats | c!help | " + msg.createdAt)
            msg.channel.send({ embed: Embed });


        } catch {


            Embed = new discord.MessageEmbed()
                .setColor(colors.blue)
                .setAuthor("Error", bot.user.displayAvatarURL())

                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription("That is not a valid username, or their account is private.")



                .setTimestamp()
                .setFooter("Overwatch Stats  | o!help | ")




                msg.channel.send({ embed: Embed });
                return







        }
            



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


        try {
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


            //console.log(compHeroes);



            Embed = new discord.MessageEmbed()
                .setColor(colors.yellow)
                .setAuthor(newStrName + " Overwatch Stats: ", bot.user.displayAvatarURL())
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
            msg.channel.send({ embed: Embed });

        } catch {


            Embed = new discord.MessageEmbed()
                .setColor(colors.blue)
                .setAuthor("Error", bot.user.displayAvatarURL())

                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription("That is not a valid username, or their account is private.")



                .setTimestamp()
                .setFooter("Overwatch Stats  | o!help | ")




            msg.channel.send({ embed: Embed });
            return




        }




    }




    //start of r6 stats seg.



    if (cmd == 'r6!help') {

        //func
        Embed = new discord.MessageEmbed()
        .setColor(colors.blue)
        .setAuthor("R6 Stats Help: ", bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())
        
        .setTitle("How to use the Rainbow Six Siege Section")
        .addField("Use: ", "r6!stats {PlayerName}")
        .addField("Example: ", "r6!stats Le_Whatlands")
        .addField("API: ", "The API callback can take anywhere from 0 seconds to 5 seconds.")
        .addField("Errors: ", "If there is no API response after 5 seconds, the account is either private or not found..")
        //.addField("Public Profiles: ", "To make your profile public go ingame to options -> social -> career profile visibility: PUBLIC")


        .setFooter("R6 Stats | r6!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});

    }

    
    if(cmd == "r6!getid" || cmd == "r6!getID"){

        var newStrName1 = "";

        var arg3 = msg.content.slice(prefix.length).split(' ');
            
        var argRep2 = arg3[1].toLowerCase()

        newStrName1 = arg3[1];

        const data2 = await r6api.getId('uplay', newStrName1);
        //console.log(data);


        msg.channel.send("This players id is " + data[0].userId);





    }


    if(cmd == 'r6!stats') {

        
        //example: console.log(`${username} has played ${stats.pvp.general.matches} matches.`);

        var newStrName1 = "";

        var arg3 = msg.content.slice(prefix.length).split(' ');
        
        var argRep2 = arg3[1].toLowerCase()

        newStrName1 = arg3[1];

        const data2 = await r6api.getId('uplay', newStrName1);

        if (userId == undefined) {

            Embed = new discord.MessageEmbed()
            .setColor(colors.blue)
            .setAuthor("Error", bot.user.displayAvatarURL())

            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription("That is not a valid username!")
           



            .setFooter("R6 Siege | r6!help | " + msg.createdAt)




            msg.channel.send({embed: Embed});
            return


        }
        
        var idplayer = data2[0].userId;


        //msg.channel.send("This players id is " + data[0].userId);

        //div


        /*var newStrName = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStrName = arg2[1];*/

        if (userId == undefined) {

            Embed = new discord.MessageEmbed()
            .setColor(colors.blue)
            .setAuthor("Error", bot.user.displayAvatarURL())

            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription("That is not a valid username!")
           



            .setFooter("R6 Siege | r6!help | " + msg.createdAt)




            msg.channel.send({embed: Embed});
            return


        }


        
        const data = await r6api.getStats('uplay', idplayer);

        console.log(data);

        Embed = new discord.MessageEmbed()
        .setColor(colors.blue)
        .setAuthor( idplayer + " Player ID Rainbow Six Siege Stats: ", bot.user.displayAvatarURL()) //fix name
        .setThumbnail('https://cdn.discordapp.com/attachments/761009105053286430/761009632264716288/1660365744607238c5_720x720.png') 


        .addField("Total Kills: ", data[0].pvp.general.kills)
        .addField("Total Deaths: ", data[0].pvp.general.deaths)
        .addField("Total Assists: ", data[0].pvp.general.assists)
        .addField("Total Headshots: ", data[0].pvp.general.headshots)
        .addField("Total Matches: ", data[0].pvp.general.matches)
        .addField("Total Wins: ", data[0].pvp.general.wins)
        .addField("Total Losses: ", data[0].pvp.general.losses)


        //add more

        .setFooter("R6 Seige Stats | r6!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});



    }

    
    if (cmd == `h!help`) {


        Embed = new discord.MessageEmbed()
        .setColor(colors.yellowgreen)
        .setAuthor("HyperScape Stats Help: ", bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())
        
        .setTitle("How to use the HyperScape Section")
        .addField("Use: ", "h!psn {PlayerName}")
        .addField("Use: ", "h!xbl {playerName}")
        .addField("Use: ", "h!pc {playerName}")
        .addField("Example: ", "h!stats [name]")
        .addField("API: ", "The API callback can take anywhere from 0 seconds to 5 seconds.")
        .addField("Errors: ", "If there is no API response after 5 seconds, the account is not found or is private, so please re-try with different spelling or ask them to public their acct.")
        


        .setFooter("HyperScape Stats | h!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});






    }


    if (cmd == `h!psn`) {
        var newStr = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStr = arg2[1];

        const response = await fetch("https://public-api.tracker.gg/v2/hyper-scape/standard/profile/psn/" + newStr, {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }

        });
        const datac = await response.json();


        //console.log(datac.data.segments[0]);



        Embed = new discord.MessageEmbed()
        .setColor(colors.yellowgreen)
        .setAuthor(datac.data.platformInfo.platformUserHandle + " Player HYPERSCAPE Stats: ", bot.user.displayAvatarURL()) 
        .setThumbnail(datac.data.platformInfo.avatarUrl)  // fix


        .addField("Total Playtime: ", datac.data.segments[0].stats.timePlayed.displayValue)
        .addField("Total Blows: ", datac.data.segments[0].stats.finalBlows.displayValue)
        .addField("Total Chests Broken: ", datac.data.segments[0].stats.chestsBroken.displayValue)
        .addField("Total Assists: ", datac.data.segments[0].stats.assists.displayValue)
        .addField("Total Damage Done: ", datac.data.segments[0].stats.damageDone.displayValue)
        .addField("Total Revivies: ", datac.data.segments[0].stats.revives.displayValue)
        .addField("Total Matches Played: ", datac.data.segments[0].stats.matchesPlayed.displayValue)
        .addField("Crowns: ", datac.data.segments[0].stats.crownPickups.displayValue)
        .addField("Wins: ", datac.data.segments[0].stats.wins.displayValue)
        .addField("KD: ", datac.data.segments[0].stats.kdRatio.displayValue)
        .addField("Kills Per Game: ", datac.data.segments[0].stats.killsPerGame.displayValue)
        .addField("Win Percentage: ", datac.data.segments[0].stats.winPercentage.displayValue)


   

        
        

        //add more

        .setFooter("HyperScape Stats | h!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});




    }
    if (cmd == `h!xbl`) {
        var newStr = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStr = arg2[1];

        const response = await fetch("https://public-api.tracker.gg/v2/hyper-scape/standard/profile/xbl/" + newStr, {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }

        });
        const datac = await response.json();


        //console.log(datac.data.segments[0]);



        Embed = new discord.MessageEmbed()
        .setColor(colors.yellowgreen)
        .setAuthor(datac.data.platformInfo.platformUserHandle + " Player HYPERSCAPE Stats: ", bot.user.displayAvatarURL()) 
        .setThumbnail(datac.data.platformInfo.avatarUrl)  // fix


        .addField("Total Playtime: ", datac.data.segments[0].stats.timePlayed.displayValue)
        .addField("Total Blows: ", datac.data.segments[0].stats.finalBlows.displayValue)
        .addField("Total Chests Broken: ", datac.data.segments[0].stats.chestsBroken.displayValue)
        .addField("Total Assists: ", datac.data.segments[0].stats.assists.displayValue)
        .addField("Total Damage Done: ", datac.data.segments[0].stats.damageDone.displayValue)
        .addField("Total Revivies: ", datac.data.segments[0].stats.revives.displayValue)
        .addField("Total Matches Played: ", datac.data.segments[0].stats.matchesPlayed.displayValue)
        .addField("Crowns: ", datac.data.segments[0].stats.crownPickups.displayValue)
        .addField("Wins: ", datac.data.segments[0].stats.wins.displayValue)
        .addField("KD: ", datac.data.segments[0].stats.kdRatio.displayValue)
        .addField("Kills Per Game: ", datac.data.segments[0].stats.killsPerGame.displayValue)
        .addField("Win Percentage: ", datac.data.segments[0].stats.winPercentage.displayValue)


   

        
        

        //add more

        .setFooter("HyperScape Stats | h!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});




    }
    if (cmd == `h!pc`) {
        var newStr = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');
        
        var argRep = arg2[1].toLowerCase()

        newStr = arg2[1];

        const response = await fetch("https://public-api.tracker.gg/v2/hyper-scape/standard/profile/uplay/" + newStr, {

            headers : {
                'TRN-Api-Key': '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
            }

        });
        const datac = await response.json();


        //console.log(datac.data.segments[0]);



        Embed = new discord.MessageEmbed()
        .setColor(colors.yellowgreen)
        .setAuthor(datac.data.platformInfo.platformUserHandle + " Player HYPERSCAPE Stats: ", bot.user.displayAvatarURL()) 
        .setThumbnail(datac.data.platformInfo.avatarUrl)  // fix


        .addField("Total Playtime: ", datac.data.segments[0].stats.timePlayed.displayValue)
        .addField("Total Blows: ", datac.data.segments[0].stats.finalBlows.displayValue)
        .addField("Total Chests Broken: ", datac.data.segments[0].stats.chestsBroken.displayValue)
        .addField("Total Assists: ", datac.data.segments[0].stats.assists.displayValue)
        .addField("Total Damage Done: ", datac.data.segments[0].stats.damageDone.displayValue)
        .addField("Total Revivies: ", datac.data.segments[0].stats.revives.displayValue)
        .addField("Total Matches Played: ", datac.data.segments[0].stats.matchesPlayed.displayValue)
        .addField("Crowns: ", datac.data.segments[0].stats.crownPickups.displayValue)
        .addField("Wins: ", datac.data.segments[0].stats.wins.displayValue)
        .addField("KD: ", datac.data.segments[0].stats.kdRatio.displayValue)
        .addField("Kills Per Game: ", datac.data.segments[0].stats.killsPerGame.displayValue)
        .addField("Win Percentage: ", datac.data.segments[0].stats.winPercentage.displayValue)


   

        
    

        //add more

        .setFooter("HyperScape Stats | h!help | " + msg.createdAt)
        msg.channel.send({embed: Embed});

    }



    //end of bot all main games activated.


    


})



'TRN-Api-Key'; '67e7432b-f382-4ea2-a39c-b39d6e59b3d2'
bot.login(botconfig.token);