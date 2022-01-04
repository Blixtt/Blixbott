module.exports = {
    name: 'hi',
    description: "this is a 'hi' command!",
    execute(message, args){
        message.channel.send('hiya <3 hehe uwu :3 *giggles*');
    }
}