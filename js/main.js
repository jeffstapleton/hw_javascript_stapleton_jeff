var iceCream = [['Cookies and Cream', 'Americone Dream', 'Chocolate'],
    'Vanilla'];

var presidents = {
  lastFive: [
    {firstName: 'Donald', lastName: 'Trump', termLength: 1, party: 'Republican', yearsOfPresidency: '2016-2017'},
    {firstName: 'Barack', lastName: 'Obama', termLength: 8, party: 'Democratic', yearsOfPresidency: '2009-2017'},
    {firstName: 'George W.', lastName: 'Bush', termLength: 8, party: 'Republican', yearsOfPresidency: '2001-2009'},
    {firstName: 'Bill', lastName: 'Clinton', termLength: 8, party: 'Democratic', yearsOfPresidency: '1993-2001'},
    {firstName: 'George H. W.', lastName: 'Bush', termLength: '4', party: 'Republican', yearsOfPresidency: '1989-1993'}
  ]
};

console.log(presidents.lastFive[2].firstName + ' ' + presidents.lastFive[2].lastName);

//NOT SURE IF YOU WANTED THIS 6-A

function howdy() {
    console.log('Jeff Stapleton ' + 'says hi!');
}

howdy();

//OR THIS:

function howdyTwo(myself, greeting) {
    return myself + ' says ' + greeting;
}
var greeting = howdyTwo('Jeff Stapleton', 'hi!');
console.log(greeting);

// 6-B

var numba = function (string) {

    if (7 > string.length) {
        console.log('What a short little word!');
    } else if (7 < string.length) {
        console.log("I'm sorry, but that's too many to count.");
    } else if (string.length == 7) {
        console.log('7, what a perfect choice!');
    }
};

numba('7', 'seventy', 'university'); //I don't think this is fully right. I am struggling with this. I can't tell you the entire logic behind how I got some sort of answer. I just ketp trying things until something finaly worked in the console.

// 6-C

function inception(display, favMovie) {
    display(favMovie); //I have NO idea what to do with this
}

inception('The Greatest Showman ', 'is a fantastic movie.');
console.log(inception());
