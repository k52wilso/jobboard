

function hasDuplicates(obj,target,key = null) {
    if(Array.isArray(obj)){
        if(key === null){// just an array of simple type
            for(var i = 0 ;i < obj.length;i++){
                if(obj[i] === target) return i;
            }
        }else{
            for(var i = 0 ;i < obj.length;i++){
                if(obj[i][key] === target[key]) return i;
            }
        }
    }else{
        console.log('Not a valid array or object');
    }
    return -1;
}

export { hasDuplicates };