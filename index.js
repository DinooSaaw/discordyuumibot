const { Client, GatewayIntentBits, messageLink } = require('discord.js');
const { EmbedBuilder, WebhookClient } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const moment = require('moment');
require('dotenv').config()
const webhookClient = new WebhookClient({ url: process.env.webhookurl});
let msgcount = 1;
let blacklistedChannel = [
    "963756774589071370",
    "982636147232612373",
    "960061411218849832",
    "961608564995158036",
    "961608463547531294",
    "960051857311555614",
    "961646820717629500",
    "964798676910342175"
]

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });

let lines = [
    "You and me, we got this!",
    "Alright! Which one of you's got great aim, and is good at chin scritches?",
    "Cats make great companions! Just ask my ADC... who may disappeared under mysterious circumstances.",
    "Tell me the game plan again. Wait. Fish! Someone has fish! Where is it?",
    "So, who wants to be my best friend? ...ADC, I know you're already my best friend!",
    "Keep an eye out for red dot, ADC! It's gotta be here somewhere.",
    "Where's my fishy fishy fish for my dishy dishy dish?",
    "I won't lose you, ADC! Not after losing Master.",
    "Don't tell anyone but... I love hugs.",
    "Naps make my magic stronger! It's true! Look! *snores* I'm so strong, mmh, so strong!",
    "ADC, sometimes I pretend you're just a nice comfy pillow! ...What? That's a compliment!",
    "I save my ADC? No one notices. I take a teensy kill from the ADC? Everyone is up in my fur!",
    "The only thing standing between us and lunch is... our enemies.",
    "RAWR!!! *coughs* ...scuse me.",
    "You smell kinda like a Yordle!",
    "I bopped them all!",
    "Cats make great companions! Just ask my master... who disappeared under mysterious circumstances.",
    "Where to, Book? *purrs*",
    "I am the brains, you are the brawn, Book... is Book!",
    "Yeah, you birds can fly! Well, so can cats! This cat.",
    "The red... dot... belongs to YOU?! VIKTOR THE MACHINE HERALD",
    "Heehee! They're never gonna see us coming!"
]

let amongusyuumi = [
    "https://preview.redd.it/21alfd1zrbs71.png?width=960&crop=smart&auto=webp&s=171ad473128b84d63bca6494e4324013d32eea81",
    "https://preview.redd.it/21alfd1zrbs71.png?width=960&crop=smart&auto=webp&s=171ad473128b84d63bca6494e4324013d32eea81",
    "https://preview.redd.it/21alfd1zrbs71.png?width=960&crop=smart&auto=webp&s=171ad473128b84d63bca6494e4324013d32eea81",
    "https://i.redd.it/nhxpwo8l7ro51.jpg",
    "https://i.redd.it/nhxpwo8l7ro51.jpg",
    "https://i.redd.it/nhxpwo8l7ro51.jpg",
    "https://i.ibb.co/8xrLWpp/unkwn.png"
]

const online = new EmbedBuilder()
    .setTitle('Online')
    .setColor('#82f282')
    .setTimestamp()
    


client.on("messageCreate", (msg) => {
    if(msg.author.id === client.user.id) {
        return
    }else{
        msgcount ++ ;
    }
    console.log(`${msg.author.tag} || ${msg.guild.name} || ${msg.channel.name} || ${msg.content} || ${msgcount}`)
    
    if (msgcount == 85) {
        if (msg.channel.id == blacklistedChannel) return
        line = lines[Math.floor(Math.random() * lines.length)]
        msg.channel.send(line)
        console.log(line)
        client.user.setPresence({ activities: [{ name: `With Yuumi's Fish` }], status: 'online' });
        msgcount = 1
    } 
    if (msgcount == 82) {
        client.user.setPresence({ activities: [{ name: `With Too Many fishy` }], status: 'dnd' });
    } if (msgcount == 69) {
        client.user.setPresence({ activities: [{ name: `With The ADC!` }], status: 'dnd' });
    } 
    if (msgcount < 83) {
        
        client.user.setPresence({ activities: [{ name: `With ${msgcount} fish` }], status: 'idle' });
    } 
    if (msg.content.toLowerCase().includes("<@939436813846708234>")){
        msg.delete()
        msg.channel.send(lines[Math.floor(Math.random() * lines.length)])
    }if (msg.content.toLowerCase().includes("yuumi")){
        msg.delete()
        msg.channel.send(lines[Math.floor(Math.random() * lines.length)])
    }if (msg.content.toLowerCase().includes("cringe") && msg.author.id == "625628543908577280"){
        msg.channel.send("You’re an adult attempting to use adolescent slang to insult people only to be owned by fact and logic On discord of all platforms Saying “cringe” and then using slang that my generation created is like… literally counter intuitive")
    }if (msg.content.toLowerCase() == "sus" || msg.content.toLowerCase() == "sussy"|| msg.content.toLowerCase() == "among us" ){
        msg.channel.send(amongusyuumi[Math.floor(Math.random() * amongusyuumi.length)])
    }

})

client.on('guildMemberAdd', (member) => {
    client.users.cache.get('247163579424309268').send(`${member.user.username} Joined ${member.guild.name}`);
    if (member.guild.id === "959804940342153316")
    client.users.cache.get('247163579424309268').send(`**❯ Username:** ${member.user.username} \n **❯ Discriminator:** ${member.user.discriminator} \n **❯ ID:** ${member.id} \n **❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()} \n **❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`);
})

client.on('guildMemberRemove', (member) => {
    client.users.cache.get('247163579424309268').send(`${member.user.username} Left ${member.guild.name}`);
    if (member.guild.id === "959804940342153316")
    client.users.cache.get('247163579424309268').send(`**❯ Username:** ${member.user.username} \n **❯ Discriminator:** ${member.user.discriminator} \n **❯ ID:** ${member.id} \n **❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()} \n **❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`);
})


client.on("ready", () => {
    console.log("Ready!");

    online.setDescription(`${client.user.tag} Is Now Online`)

    online.setThumbnail(client.user.displayAvatarURL());

    webhookClient.send({
        embeds: [online],
    });
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
      return
    }
  
    const { commandName, options } = interaction

    console.log(`${interaction.user.tag} || ${interaction.guild.name} || ${interaction.channel.name} || Used: ${commandName}`)
  
    if (commandName === 'meow') {
      interaction.reply({
        content: '**Meow**',
        ephemeral: false
      })
    }

    if (commandName === 'yuumi') {
      interaction.reply({
        content: `**${lines[Math.floor(Math.random() * lines.length)]}**`,
        ephemeral: false
      })
    }

    if (commandName === 'avatar'){
        let skinname = interaction.options.getString('skin')
        client.user.setAvatar(`./skins/${skinname}.jpg`)
            interaction.reply({
                content: `Yuumi's ${skinname} skin has been equipped`,
                ephemeral: false
            })
    }

    if (commandName == 'image'){
        let prompt = interaction.options.getString('prompt')
        let size = interaction.options.getString('size')
        interaction.reply({
          content: `Generating an image `,
          ephemeral: false
        })

        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: size,
          });
          let image_url = response.data.data[0].url;

          interaction.channel.send(image_url)
          interaction.client.channels.cache.get('1050410465467047957').send(`${interaction.member.user.username} created the following image \n **Prompt ->** ${prompt}`)
          interaction.client.channels.cache.get('1050410465467047957').send(image_url)
    }

})
  
client.login(process.env.token);