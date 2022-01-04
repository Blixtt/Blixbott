module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '927148564461781032';

        const manRole = message.guild.roles.cache.find(role => role.name === "Man");
        const womanRole = message.guild.roles.cache.find(role => role.name === "Woman");

        const manEmoji = '♂️';
        const womanEmoji = '♀️';

        const whiteColorRole = message.guild.roles.cache.find(role => role.name === "White");
        const redColorRole = message.guild.roles.cache.find(role => role.name === "Red");
        const orangeColorRole = message.guild.roles.cache.find(role => role.name === "Orange");
        const yellowColorRole = message.guild.roles.cache.find(role => role.name === "Yellow");
        const greenColorRole = message.guild.roles.cache.find(role => role.name === "Green");
        const blueColorRole = message.guild.roles.cache.find(role => role.name === "Blue");
        const purpleColorRole = message.guild.roles.cache.find(role => role.name === "Purple");
        const blackColorRole = message.guild.roles.cache.find(role => role.name === "Black");

        const whiteColorEmoji = '⚪';
        const redColorEmoji = '🔴';
        const orangeColorEmoji = '🟠';
        const yellowColorEmoji = '🟡';
        const greenColorEmoji = '🟢';
        const blueColorEmoji = '🔵';
        const purpleColorEmoji = '🟣';
        const blackColorEmoji = '⚫';

        const pingRole = message.guild.roles.cache.find(role => role.name === "Ping");

        const pingEmoji = '🔊';
 
        let embed1 = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('Choose your Gender!')
            .setDescription('Yes, these are the only options. Let others know what genitalia you have!\n\n'
                + `${manEmoji} Male\n\n`
                + `${womanEmoji} Female`);
 
        let messageEmbed1 = await message.channel.send(embed1);
        messageEmbed1.react(manEmoji);
        messageEmbed1.react(womanEmoji);


        let embed2 = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('Choose a colour for your name!')
            .setDescription('We\'re sorry if your favourite colour isn\'t there. Unfortunately, we do not care! Also, the reaction circles do not accurately represent the exact color your role & name will be.\n\n'
                + `${whiteColorEmoji} White\n`
                + `${redColorEmoji} Red\n`
                + `${orangeColorEmoji} Orange\n`
                + `${yellowColorEmoji} Yellow\n`
                + `${greenColorEmoji} Green\n`
                + `${blueColorEmoji} Blue\n`
                + `${purpleColorEmoji} Purple\n`
                + `${blackColorEmoji} Black\n`);

        let messageEmbed2 = await message.channel.send(embed2);
        messageEmbed2.react(whiteColorEmoji);
        messageEmbed2.react(redColorEmoji);
        messageEmbed2.react(orangeColorEmoji);
        messageEmbed2.react(yellowColorEmoji);
        messageEmbed2.react(greenColorEmoji);
        messageEmbed2.react(blueColorEmoji);
        messageEmbed2.react(purpleColorEmoji);
        messageEmbed2.react(blackColorEmoji);


        let embed3 = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('Do you want to be Pinged?')
            .setDescription('This is primarily for the announcements channel. Choose whether or not you\'d like to be notified of any "important" announcements!\n\n'
                + `${pingEmoji} Yes`);

        let messageEmbed3 = await message.channel.send(embed3);
        messageEmbed3.react(pingEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === manEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(manRole);
                }
                if (reaction.emoji.name === womanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(womanRole);
                }
                if (reaction.emoji.name === whiteColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(whiteColorRole);
                }
                if (reaction.emoji.name === redColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redColorRole);
                }
                if (reaction.emoji.name === orangeColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangeColorRole);
                }
                if (reaction.emoji.name === yellowColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowColorRole);
                }
                if (reaction.emoji.name === greenColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenColorRole);
                }
                if (reaction.emoji.name === blueColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueColorRole);
                }
                if (reaction.emoji.name === purpleColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purpleColorRole);
                }
                if (reaction.emoji.name === blackColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blackColorRole);
                }
                if (reaction.emoji.name === pingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pingRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === manEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(manRole);
                }
                if (reaction.emoji.name === womanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(womanRole);
                }
                if (reaction.emoji.name === whiteColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiteColorRole);
                }
                if (reaction.emoji.name === redColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redColorRole);
                }
                if (reaction.emoji.name === orangeColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orangeColorRole);
                }
                if (reaction.emoji.name === yellowColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowColorRole);
                }
                if (reaction.emoji.name === greenColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenColorRole);
                }
                if (reaction.emoji.name === blueColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueColorRole);
                }
                if (reaction.emoji.name === purpleColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purpleColorRole);
                }
                if (reaction.emoji.name === blackColorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blackColorRole);
                }
                if (reaction.emoji.name === pingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pingRole);
                }
            } else {
                return;
            }
        });
    }
 
}   