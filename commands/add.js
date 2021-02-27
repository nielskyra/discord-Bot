const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "814404695417815063";

    if (!message.member.haspermission("KICK_MEMBER")) return message.reply("jij kan dit niet doen");

    if(!message.channel.parentID != categoryID) return message.reply("oeps je bent niet in een ticket")

    var adduser = message.guild.member(message.mentions.user.first()  || message.guild.member.cache.get(args[0]));

    if (!adduser) return message.reply("geen gebruiker meegeven");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("green")
        .setTitle("antwoord binnen 30 sec.")
        .setDescription(`wil je ${adduser} toevoegen?`);
        
        var embed = new discord.MessageEmbed()
        .setTitle("gebruiker toegevoegd")
        .setColor("GREEN")
        .setTimestamp()
        .addField("toegevoegde gebruiker", `${adduser}`)
        .addField("persoon toegevoegd")

}



module.exports.help = {
    name: "add",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
} 