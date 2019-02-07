const utils = require("./utils");

module.exports = {
    byLetters: (list) => {
        var raw = list.map((value, index)=>{
            value.size = utils.removeNoLetters(value.quote).length;
            value.originalIndex = index;
            return value;
        })
        return raw.sort((a, b)=> {
            return a.size + b.size;
        })
    },

    byWords: (list) => {
        var raw = list.map((value, index)=>{
            value.size = value.quote.toString().split(" ").length;
            value.originalIndex = index;
            return value;
        })
        return raw.sort((a, b)=> {
            return a.size - b.size;
        })
    }
}