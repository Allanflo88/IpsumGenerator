const generator = require("./generator");
const utils = require("./helpers/utils");
const path = require('path');
module.exports = (app) =>{
    app.get("/generate/:paragraphs/:letters/:words", (req, res)=>{
        const params = req.params;
        const paragraphs = params.paragraphs;
        const letters = params.letters;
        const words = params.words;

        var response = "";

        if(paragraphs > 0){
            response = generator.getByParagraphs(paragraphs);
        }
        else if(letters > 0){
            response = generator.getByLetters(letters);

        } else if(words > 0) {
            response = generator.getByWords(words);

        }

        res.send({
            ipsum: response,
            paragraphs: paragraphs,
            totalLetters: utils.removeNoLetters(response).length,
            totalWords: response.split(" ").length
        });
    })
    app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "/index.html"));
    })
}