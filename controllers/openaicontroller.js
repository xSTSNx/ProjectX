const OpenAI = require('openai');
const dotenv = require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

async function downloadImage(url, filename) {
  const response = await axios.get(url, { responseType: 'arraybuffer' });

  fs.writeFile(filename, response.data, (err) => {
    if (err) throw err;
    console.log('Image downloaded successfully!');
  });
}


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



const generateImage = async (req, res) => {
  const {message, size} = req.body; 
  const imageSize = size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";   //tertiärer operation
  //console.log(req.body)
  //console.log(message)
  try {
    const response = await openai.images.generate({
      prompt: message,
      n: 1,
      size: imageSize,
    });
    //console.log(response)
    image_url = response.data[0].url;
    str = message.replace(/\s+/g, '');
    downloadImage(image_url, `./frontend/images/${str}`);


    res.status(200).json({
      erfolgreich: true,
      id,
      name : message,
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
    const image_gallery ={res}
  }
  //console.log(res)
}

module.exports = { generateImage };