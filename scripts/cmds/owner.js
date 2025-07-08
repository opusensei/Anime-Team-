const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
  config: {
    name: "owner",
    aliases: ["info", "profile"],
    author: "opu",
    role: 0,
    shortDescription: "Show owner's profile",
    longDescription: "Shows a short personal profile of the owner.",
    category: "info",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

    const profile = `
『 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 』

• Name: opu sense 
• Class: 10    
• Gender: Male  
• Blood: o+  
• Location: Tokyo, Japan  
• Hobby: photography  
• Status: Single  
• FB: https://www.facebook.com/opusense
  

⏰ Time: ${time}`;

    api.sendMessage(profile, event.threadID, (err, info) => {
      if (err) return console.error(err);
      setTimeout(() => {
        api.unsendMessage(info.messageID);
      }, 20000); // 20 seconds = 20000 ms
    });
  }
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
