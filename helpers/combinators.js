module.exports = {
    findWordCombination: (words, sortedList)=>{
        var list = [];

        if(words >= sortedList[0].size){
            while(module.exports._canSum(list, sortedList, words)){
                sortedList.forEach(element => {
                    if(element.size <= words){
                        list.push(element);
                        words = words - element.size;
                    }
                });
            }

        }
        else{
            list.push(sortedList[0]);
        }
        return list;

    },

    _canSum: (newList, sortedList, total) => {
        for(let i = 0; i< sortedList.length; i++){
            if(!newList.includes(sortedList[i]) && sortedList[i].size <= total){
                return true;
            }
        }
        return false;
    },

    findLetterCombination: (letters, sortedList) => {
        var list = [];

        if(letters >= sortedList[0].size){
            while(module.exports._canSum(list, sortedList, letters)){
                sortedList.forEach(element => {
                    if(element.size <= letters){
                        list.push(element);
                        letters = letters - element.size;
                    }
                });
            }

        }
        else{
            list.push(sortedList[0]);
        }

        return list
    }
}