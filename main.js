require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({ partials:["MESSAGE", "CHANNEL", "REACTION"] });
const prefix = '>';
const fs = require('fs');

const memberCounter = require('./counters/member-counter');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
 

client.once('ready', () => {
    console.log('Blixbott is online!');
    memberCounter(client);
    client.user.setActivity('the System');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Affiliate')

    guildMember.roles.add(welcomeRole);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hi'){
        client.commands.get('hi').execute(message, args);
    } else if (command === 'tom'){
        client.commands.get('tom').execute(message, args);
    } else if (command === 'stephen'){
        client.commands.get('stephen').execute(message, args);
    } else if (command === 'oliver'){
        client.commands.get('oliver').execute(message, args);
    } else if (command === 'louis'){
        client.commands.get('louis').execute(message, args);
    } else if (command === 'alfie'){
        client.commands.get('alfie').execute(message, args);
    } else if (command === 'aaron'){
        client.commands.get('aaron').execute(message, args);
    } else if (command === 'jenson'){
        client.commands.get('jenson').execute(message, args);
    } else if (command === 'harry'){
        client.commands.get('harry').execute(message, args);
    } else if (command === 'izzy'){
        client.commands.get('izzy').execute(message, args);
    } else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'help'){
        client.commands.get('help').execute(message, args, Discord, client);
    } else if (command === 'names'){
        client.commands.get('names').execute(message, args);
    }
});

client.login(process.env.BOT_TOKEN);