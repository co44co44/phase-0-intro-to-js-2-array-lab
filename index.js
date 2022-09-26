// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    
    return cats.push(name);
}

function destructivelyPrependCat(name){
    
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    
    return cats.shift(name);
}

function appendCat(name){
    let newCats= [...cats, name];
    return newCats;
}
function prependCat(name){
    let newCats= [name,...cats];
    return newCats;
}
function removeLastCat(name){
    return cats.slice (0,-1);
   
}
function removeFirstCat(name){
    return cats.slice (1);
   
}