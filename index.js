// Add your functions and code here
var kittens = ['Milo','Otis','Garfield'] //define your array here

/* appends a kitten to the end of the kittens array */
function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens
}

/* prepends a kitten to the beginning of the kittens array */
function destructivelyPrependKitten(name){
    kittens.unshift(name)
    return kittens
}

/* removes the last kitten from the kittens array */
function destructivelyRemoveLastKitten(){
    kittens.pop()
    return kittens
}

/* removes the First kitten from the kittens array */
function destructivelyRemoveFirstKitten(){
    kittens.shift()
    return kittens
}

/* appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged */
function appendKitten(name){
    var newArr = new Array()

    for (var i = 0; i < kittens.length; i++) {
        newArr.push(kittens[i]);
    }   

    newArr.push(name);
    return newArr
}

// prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){
    var newArr = new Array()
    
    for (var i = 0; i < kittens.length; i++) {
        newArr.push(kittens[i]);
    }   
    newArr.unshift(name)
    return newArr   
}

// removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(){
    var newArr = new Array()
    for (var i = 0; i < kittens.length; i++) {
        newArr.push(kittens[i]);
    }
    newArr.pop()
    return newArr   
}

// removes the first kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten(){
    var newArr = new Array()
    for (var i = 0; i < kittens.length; i++) {
        newArr.push(kittens[i]);
    }
    newArr.shift()
    return newArr   
}


