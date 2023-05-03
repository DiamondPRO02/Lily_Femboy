const { EmbedBuilder } = require("discord.js");
const botStat = require("../../botConfigs/bot_private.json", "utf8"); const SetAct = botStat.botStatus;
require("dotenv").config();
let stopPassword = process.env.stop_password;
let debug_level = process.env.debug_level;
let botStatusChannelId = process.env.botstatus_channelid;
module.exports = {
	name: "ready",
	once: true,
	execute(arg, client) {
		client.user.setActivity("Bot remake: 0%");
		setInterval(() => {
			/* A
			let status = SetAct[Math.floor(Math.random() * SetAct.length)];
			client.user.setActivity(status); */
			client.user.setActivity("Bot remake: 0%");
		}, 10800000);

		// eslint-disable-next-line no-console
		console.log("\n -- Logged in as: " + client.user.tag
			+ "\n\t -- Client_ID: " + client.user.id
			+ "\n\t -- Password: " + stopPassword
			+ "\n\t -- Debug_level: " + debug_level
			+ "\n\t -- Ready at: " + client.readyAt);

		const embed = new EmbedBuilder()
			.setColor("#FFFF00")
			.setTitle("Bot has started! \n" + client.user.tag)
			.setDescription(`Bot info:
DebugLevel: ${debug_level},
Ready: <t:${Math.floor(client.readyTimestamp / 1000)}:f> 
That was: <t:${Math.floor(client.readyTimestamp / 1000)}:R>`);
		const channel = client.channels.cache.get(botStatusChannelId);
		channel.send({ embeds: [embed] });
	}
};