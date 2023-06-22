const axios = require('axios');
require('dotenv').config();


async function sendSlackMessage(message) {
    await axios.post('https://slack.com/api/chat.postMessage', { 
        channel: process.env.CHANNEL_ID,
        text: message
    }, { headers: { 'Authorization': `Bearer ${process.env.NELSON_TOKEN}`, 'Content-Type': 'application/json' } });
}



const message = 'Test Test';
sendSlackMessage(message);
