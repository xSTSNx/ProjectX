const { OpenAIApi } = require("openai");
const openai = OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
});



const generateImage = async (req, res) => { 
    res.status(200).json({
        erfolgreich: true,
        
    })
}

module.exports = {generateImage};