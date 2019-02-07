const list = require("./list.json");
const sort = require("./helpers/sort");
const combinators = require("./helpers/combinators");
module.exports = {

    getByParagraphs: (paragraphs)=>{
        var response = "";
        var alreadySelected = []
        for(var i = 0; i < paragraphs; i++){
            var rand = Math.floor(Math.random() * list.length);
            if(!alreadySelected.includes(rand)){
                alreadySelected.push(rand);
                response = response.concat(" ", list[rand].quote);
            }
        }

        return response.trim();
    },

    getByLetters: (letter) => {
        var response = "";
        var query = sort.byLetters(list);
        var bestCombination = combinators.findLetterCombination(letter, query);

        var alreadySelected = []
        for(var i = 0; i < bestCombination.length; i++){
            var rand = Math.floor(Math.random() * bestCombination.length);
            while(alreadySelected.includes(rand)){
                rand = Math.floor(Math.random() * bestCombination.length);
            }
            alreadySelected.push(rand);
            response = response.concat(" ", bestCombination[rand].quote);
        }
        return response;
    },

    getByWords: (words) => {
        var response = "";
        var query = sort.byWords(list);
        var alreadySelected = [];
        var bestCombination = combinators.findWordCombination(words,query);

        var alreadySelected = []
        for(var i = 0; i < bestCombination.length; i++){
            var rand = Math.floor(Math.random() * bestCombination.length);
            while(alreadySelected.includes(rand)){
                rand = Math.floor(Math.random() * bestCombination.length);
            }
            alreadySelected.push(rand);
            response = response.concat(" ", bestCombination[rand].quote);
        }

        return response.trim();
    }

}