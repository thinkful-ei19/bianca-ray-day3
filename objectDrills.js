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

<<<<<<< HEAD
=======


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


const characters = [
    createCharacter('Gandalf the White', 'gandalph', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
    createCharacter('Chewbacca', 'chewie', 'Yorkie', 'South Korea', 10, 10),
    createCharacter('Arwen Undomiel', 'Ar', 'Half-Elf', 'Rivendell', 1, 1)
];

function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name: name,
        nickname: nickname,
        race: race,
        origin: origin,
        attack: attack,
        defense: defense,

        describe: function() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
        },
        evaluateFight: function(character) {
           let x = this.attack - character.defense;
           let y = character.attack - this.defense;

           console.log(`You opponent takes ${x} damage and you receive ${y} damage`);
        }

    }
    
    }
}
>>>>>>> f3b5d68323ad6d51654d720ee4402c36784b48b4

const Aragorn = characters.find(character => character.nickname === 'aragorn');
    Aragorn.describe();

const hobbits = characters.filter(character => character.race === 'Hobbit');

const strong = characters.filter(character => character.attack > 5);


