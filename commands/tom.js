module.exports = {
    name: 'tom',
    description: "this is the 'tom' command.",
    execute(message, args){

        tomid = '<@472396013655556096>';

        message.channel.send('sometimes ' + tomid + ' says silly things. don\'t take much notice of him, he means no harm <3 :D');
    }
}