const Discord = require('discord.js');
const ffmpeg = require('ffmpeg-binaries');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let msgcontent = msg.content.toLowerCase();
  if(msgcontent.startsWith("!poke")){	// do something with message
  	let msgparse = msgcontent.split(" ");
  	if(msgparse[1] == "kricketune" ){
  		if(msg.member.voiceChannel){
  			msg.member.voiceChannel.join().then(connection => {
  				console.log(`connected to voice channel ${connection.channel.name} to play kricketune cry`);
  				const dispatcher = connection.playFile('/Users/joelkreider/projects/pokebot/audio/kricketune.mp3');
  				dispatcher.on("end", end => connection.channel.leave());

  			}).catch(console.error);
  		}
  	}else if(msgparse[1] == "go" ){
  		if(msg.member.voiceChannel){
  			msg.member.voiceChannel.join().then(connection => {
  				console.log(`connected to voice channel ${connection.channel.name} to play pokemon go theme`);
  				const dispatcher = connection.playFile('/Users/joelkreider/projects/pokebot/audio/go.mp3');
  				dispatcher.on("end", end => connection.channel.leave());

  			}).catch(console.error);
  		}
  	}
  }
});

client.login('NTE5NjEyODU5NTM0MDE2NTI0.Duh28Q.ztHrLyzU_V2vliBdwWLaBXtr4IY');