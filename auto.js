const axios = require('axios');
const env = require('dotenv');
const path = require('path');
env.config({ path: `${__dirname}/.env` });

const summarize = async (url, numberOfSentences) => {
  numberOfSentences = numberOfSentences || 7;
  try {
    const response = await axios.get(`https://api.smmry.com/?SM_API_KEY=${process.env.API_KEY}&SM_LENGTH=${numberOfSentences}&SM_URL=${url}`)
    if (response.data.sm_api_error > 0) {
      throw new Error(`response returned an error: ${response.data.sm_api_message}`);
    } else {
      console.log(response.data.sm_api_content);
      return response.data.sm_api_content;
    }
  } catch (err) {
    console.log(err);
  }
}

let url = process.argv[2];
let numberOfSentences = process.argv[3];

summarize(url, numberOfSentences);