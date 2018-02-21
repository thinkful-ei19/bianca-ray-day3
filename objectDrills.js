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

const people = [{
    name: 'Bianca',
    jobTitle: 'student',
},{
    name: 'Ray',
    jobTitle: 'student',
},{
    name: 'Chewie',
    jobTitle: 'Basketball Player',
}];
for(let i = 0; i < people.length; i++){
    console.log(`${people[i].name} ${people[i].jobTitle}`);
}