module.exports = exports = {
  name: 'guildAdd',
  enabled: true,
  /**
   * @param {import('../index.js').GLOBALS} GLOBALS
   */
  process: async (GLOBALS) => {
    GLOBALS.client.on('guildCreate', guild => {
      const defaultChannel = (guild.systemChannel || guild.embedChannel || guild.channels.cache.first())

      defaultChannel.send({
        embed: {
          title: 'Welcome to Crying Corner Scrims',
          description: 'Thanks for adding Crying Corner Scrimbot to your server! To get up and running, please type `v!server add`. None of the commands will work until this guild is configured.',
          color: 10181046
        }
      })
    })
  }
}
