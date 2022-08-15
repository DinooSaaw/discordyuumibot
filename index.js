const { Client, GatewayIntentBits, messageLink } = require('discord.js');
const { EmbedBuilder, WebhookClient } = require('discord.js');
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
// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

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
        line = lines[Math.floor(Math.random() * lines.leneergth)]
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
    }

})

client.on("ready", () => {
    console.log("Ready!");

    online.setDescription(`${client.user.tag} Is Now Online`)

    online.setThumbnail(client.user.displayAvatarURL());

    webhookClient.send({
        embeds: [online],
    });
});

client.login(process.env.token);