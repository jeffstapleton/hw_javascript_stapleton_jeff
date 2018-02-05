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

// 6-B **I'm pretty terrible at JS and I have NO CLUE what I'm supposed to be doing here. I've spent hours on B and C with no success

var numba = function(string) {

if (7 > string) {
    console.log('What a short little word!');
} else if (7 < string) {
    console.log("I'm sorry, but that's too many to count.");
} else if (string == 7) {
    console.log('7, what a perfect choice!');
}
};

var string = ['7', 'seventy', 'university']; //I know this isn't right

// 6-C

function inception(display, favMovie) {
    display(favMovie);
}
inception();
