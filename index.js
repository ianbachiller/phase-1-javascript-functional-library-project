//1
function myEach(collection, callback){
    // console.log(collection)
    if(typeof collection === 'object' && collection !== null && !Array.isArray(collection)){
        let vals = Object.values(collection)
        vals.forEach(val => callback(val))
    }else if (Array.isArray(collection)) {
        collection.forEach(el => callback(el))
    } 
    return collection
    }

//2
function myMap(collection, callback){
    if(typeof collection === 'object' && collection !== null && !Array.isArray(collection)){
        let vals = Object.values(collection)
        return vals.map(val => callback(val))
    }else if (Array.isArray(collection)) {
        return collection.map(el => callback(el))
    } 
}
//3 
function myReduce(collection, callback, acc) {
    if (Array.isArray(collection) || (typeof collection === 'object' && collection !== null)) {
        const vals = Object.values(collection);
        return acc !== undefined ? vals.reduce(callback, acc) : vals.reduce(callback);
    }
}


//4
function myFind(collection, predicate) {
    if (Array.isArray(collection) || (typeof collection === 'object' && collection !== null)) {
        const vals = Object.values(collection);
        const foundValue = vals.find((val) => predicate(val));

        if (foundValue !== undefined) {
            return foundValue
        } 
    }
    return undefined
}

//5 
function myFilter(collection, predicate) {
    if (Array.isArray(collection) || (typeof collection === 'object' && collection !== null)) {
        const vals = Object.values(collection)
        const foundValue = vals.filter((val) => predicate(val))
        if (foundValue !== undefined) {
            return foundValue
        } 
    }
    return []
}

//6

function mySize(collection){ 
    return Array.isArray(collection) || (typeof collection === 'object' && collection !== null) ? 
    Object.values(collection).length : undefined
}

//7
function myFirst(array, n){ return n === undefined || n === null ? array[0] : array.slice(0, n) }

//8
function myLast(array, n){ return n === undefined || n === null ? array[array.length-1] : array.slice(array.length-n)}

//9
function myKeys(object){
    return Object.keys(object)
}

//10
function myValues(object){
    return Object.values(object)
}