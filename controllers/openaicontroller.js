const OpenAI = require('openai');
const dotenv = require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


const generateImage = async (req, res) => {
  const {prompt, size} = req.body; 
  const imageSize = size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";   //tertiärer operation
  try {
    const response = await openai.images.generate({
      prompt: "a white siamese cat with blue eyes and a red hat",
      n: 1,
      size: imageSize,
    });
    console.log(response)
    image_url = response.data[0].url;

    res.status(200).json({
      erfolgreich: true,
      data: image_url
    })
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      erfolgreich: false,
      error: "das Bild konnte nicht generriert werden!"

    })
  }
  console.log(res)
}

module.exports = { generateImage };