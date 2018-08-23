const axios = require('axios');
const env = require('dotenv');
const path = require('path');
env.config({ path: `${__dirname}/.env` });

const summarize = async (req, res) => {
  try {
    let url = req.query.url;
    const response = await axios.get(`https://api.smmry.com/?SM_API_KEY=${process.env.API_KEY}&SM_URL=${url}`)
    res.json(response.data.sm_api_content)
  } catch (err) {
    res.json('response returned an error')
  }
}

module.exports = { summarize };