module.exports = {
    removeNoLetters : (string) => {
        return string.replace(/[\s\.\,\n\t\\\'\"\-\(\)]/g,'');
    }
}