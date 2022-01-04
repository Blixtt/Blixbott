module.exports = {
    name: 'names',
    description: "this is a 'names' command!",
    execute(message, args){
        message.channel.send('i might know you! type `>[your name here]` to see if i know who you are :D <3');
        message.channel.send('try it on your friends too ;)');
    }
}