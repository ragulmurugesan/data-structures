
// anagram, nagaram
function isAnagram(str, revStr){
    if(str.length !== revStr.length){
        return false;
    }

    let firstStrChar = {};
    let secStrChar = {};
    for( let val of str ){
        firstStrChar[val] = ( firstStrChar[val] || 0 ) + 1;
    }
    console.log(firstStrChar);
    for( let val of revStr ){
        secStrChar[val] = ( secStrChar[val] || 0 ) + 1;
    }

    for(let key in firstStrChar){
        // Check if the key is there in the second str
        if(!( key in secStrChar )){
            return false;
        }
        // Check if the key count is same in the second str
        if( secStrChar[key] !== firstStrChar[key] ){
            return false
        }
    }
    return true;
};


isAnagram('anagram', 'nagaram');
