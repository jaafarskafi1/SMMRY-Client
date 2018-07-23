const axios = require('axios');
const env = require('dotenv');
const path = require('path');
env.config({path: `${__dirname}/.env`});

const summarize = async (url) => {
  try {
    const response = await axios.get(`https://api.smmry.com/?SM_API_KEY=${process.env.API_KEY}&SM_URL=${url}`)
    console.log(response.data.sm_api_content);
  } catch (err) {
    console.log(err);
  }
}
let input = process.argv.slice(2).join(' ');
summarize(input);