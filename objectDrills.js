// const loaf = {
//     flour: 300,
//     water: 210,
//     hydration: function() {
//         let result = (loaf.water/loaf.flour) * 100;
//         return result;
//     }
// }

// console.log('flour:', loaf.flour);
// console.log('water:', loaf.water);
// console.log('hydration:', loaf.hydration());



// const random = {
//     foo: 2,
//     bar: 'snickers',
//     fum: 'red',
//     quux: 'what',
//     spam: 'delete'
// };

// for(let key in random) {
//     console.log(key, random[key]);
// }



// const food = {
//     meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(food.meals[3]);

// const people = [{
//     name: 'Bianca',
//     jobTitle: 'student',
// },{
//     name: 'Ray',
//     jobTitle: 'student',
// },{
//     name: 'Chewie',
//     jobTitle: 'Basketball Player',
// }];
// for(let i = 0; i < people.length; i++){
//     console.log(`${people[i].name} ${people[i].jobTitle}`);
// }

// const people = [{
//     name: 'Bianca',
//     jobTitle: 'student',
//     boss: 'Chewie',
// },{
//     name: 'Ray',
//     jobTitle: 'student',
//     boss: 'Chewie'
// },{
//     name: 'Chewie',
//     jobTitle: 'Boss',
//     boss: 'none',
// }];
// for(let i = 0; i < people.length; i++){
//     if(people[i].boss === 'Chewie'){
//         console.log(`${people[i].jobTitle} ${people[i].name} reports to ${people[i].boss}`);
//     }
//     if(people[i].boss === 'none'){
//         console.log(`${people[i].jobTitle} ${people[i].name} doesn't report to anybody.`);
//     }
// }



// const cipher = {
//     a: 2,
//     b: 3,
//     c: 4,
//     d: 5
// };




// function decode(sentence) {
//     const message = [];
//     // let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         // if (code[i][0] === 'a') {
//         //     message.push(code[i][1]);
//         // } else if (code[i][0] === 'b') {
//         //     message.push(code[i][2]);
//         // } else if (code[i][0] === 'c') {
//         //     message.push(code[i][3]); 
//         // } else if (code[i][0] === 'd') {
//         //     message.push(code[i][4]); 
//         // } else {
//         //     message.push(" ");
//         // }
//         let firstLetter = words[i][0];
//         if (cipher[firstLetter]) {
//             let position = cipher[firstLetter];
//             message.push(words[i][position - 1]);
//         } else {
//             message.push(' ');
//         }
//     }
//     return message.join("");
// }

// console.log(decode('craft block argon meter bells brown croon droop'));


// function decode(word) {
//     let firstLetter = word[0];
//     if (cipher[firstLetter]) {
//         let position = cipher[firstLetter];
//         return word[position - 1];
//     } else {
//         return ' ';
//     }
// }
// function decodeWords(sentence) {
//     let message = [];
//     let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
        
//         message.push(decode(words[i]));
//     }
//     return message.join("");
// }

// console.log(decodeWords('craft block argon meter bells brown croon droop'));

