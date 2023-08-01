// 1. What is Higher Order Function?
// It is a function that accepts another function in parameter or return function.

// syntax of accept function in parametre 
function highOrder(){

}

highOrder(function(){

});

// syntax of return function 
function hello(){
 return function(){

 }
}
hello();


// 2. What is Constructor?
// It is used when we need many element of same properties than we used it.

function songs(artist){
    this.artist = artist;
    this.thumbnail = false;
    this.heigth = 12;
}

let song1 = new songs('arijit singh');
let song2 = new songs('a.r rehman');
let song3 = new songs('sonu nigam');

// 3. what is first class function?
// It is a that type of a function that we can stored in the variable.

let a = function abcd(){

}
// The best example of first class function is setTimeOut let's see

setTimeout(function(){
    
})

// 4. what is iife? immediatly invoked function expression
// It means that tom immediatlt start function, to create a private value, let's see

let ans = (function(){
    let privateL = 15;

    return{
        getter: function(){
            console.log(privateL);
        },
        setter: function(val){
            privateL = val;
        }
    }
})()

// 5. what is prototype inheritence?
// Prototype inheritence is just a built in methods or properties created by its creator to code easily.

// 6. What is prototype inheritence?
// It is used for copy the properties of parent prototype to its children.
let human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    haveEmotions: true,
    hasFourLegs: false
}

let suhail = {
    canMakeAmazingWebsites: true,
    canMakeAwesomeAnimations: true
}

suhail.__proto__ = human;
