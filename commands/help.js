module.exports = {
    name: 'help',
    description: "this is a 'help' command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Help!')
        .setDescription('Here are all the commands you can run with me! <3')
        .addFields(
            {name: '>hi', value: 'i\'ll say hi to you!'},
            {name: '>names', value: 'tells you some secret info! ;)'},
            {name: '>help', value: 'displays the help info! you\'re already here silly!'}
        )
        .setThumbnail('https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-7/24/018_388_question_help_faq_support-512.png')
        .setTimestamp()
        .setFooter('i hope you enjoyed reading what i can do! :D');

        message.channel.send(newEmbed);
    }
}