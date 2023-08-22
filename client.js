console.log( 'Hello, World');
//string
let firstName = 'Chris';
//number
let temperature = 100;
//boolean
let sunny = true;

//Array-- they store a collection of things... could be an array
//of strings, numbers, boolean values... however in general, store
//things of the same data type in them (e.g. just strings, just 
//number, etc)
//Date in an array is sorted
//                0         1       2
let colors = [ 'orange', 'teal', 'green'];

//to remove the last thing from an array:
colors.pop();
//this shows the data from our Array
console.table(colors);

//this adds things to the end of an Array
colors.push('blue', 'pink');
console.table(colors);

//this adds something to the beginning of an Array
colors.unshift('purple');
console.table(colors);

//removes from the beginning... doesn't require you to
//fill the parantheses with anything
let firstColorRemoved = colors.shift();
console.log(firstColorRemoved);
console.table(colors);

//Access the first color without removing it
let firstColor = colors[0];
console.log(firstColor);
console.table(colors);






//Loops! Here we go :)
//this is called a "for of" loop. It loops over each item in 
//an Array and assigns the value to 'item'. 
let colorList = document.querySelector('#color-list');
for(let item of colors) {
    //repeated for each item in the Array
    console.log('color: ', item);
    colorList.innerHTML += '<div>' + item + '</div>';
}

//traditional For loop
//                        0   1   2   3    4
let temperatureValues = [72, 84, 93, 102, 88];
//it has a start, an end, and an increment (a way to get from 
//point A to point B)
//     start          end      increment/decrement
for(let index = 0; index < 10; index += 1) {
    console.log(index);
}
//this loops over all temperature values... starts at 0, goes to the 
//end of the temp values, and increased by 1 each time
for(let i = 0; i < temperatureValues.length; i += 1) {
    let temp = temperatureValues[i];
    console.log('temp: ', temp);
}







//While loop (least common). This is good when you don't know
//how long something is going to run. For example if you're trying
//to get out of a maze and you turn corners to try and get out
//while you haven't found an exit, a while loop lets you run things
//before you know the end goal


let start = 0;
//      end
while (start < 10) {
    console.log(start);
    start += 1; //incrememnt
}

console.log('---for of loop---');
// 'for of' loop
for(let temp of temperatureValues) {
    console.log(temp);
}



