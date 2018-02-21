const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        let result = (loaf.water/loaf.flour) * 100;
        return result;
    }
}

console.log('flour:', loaf.flour);
console.log('water:', loaf.water);
console.log('hydration:', loaf.hydration());