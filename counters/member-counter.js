module.exports = async (client) =>{
    const guild = client.guilds.cache.get('923696396144627772');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('927234439073910845');
        channel.setName(`associate quantity: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count...');
    }, 3600000);
}