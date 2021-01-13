const transpose = require('./transpose');

const wordSearch = (letters, word) => { 
    ///transposse the matrix for vertical check, to be passsed to verticalJoin.
    const transpossedMatrix = transpose(letters);
    ///make an array of strings from the horizontal matrix
    const horizontalJoin = letters.map(ls => ls.join(''))
    //make an array of strings from the vertical matrix
    const verticalJoin = transpossedMatrix.map(ls => ls.join(''))
    //loop through horizontal
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    //loop trhought vertical
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    
    return false
}

module.exports = wordSearch 

// console.log(wordSearc);NP
// [
// [c,b,a],
// [a,o,x],
// [t,y,y]
// ]