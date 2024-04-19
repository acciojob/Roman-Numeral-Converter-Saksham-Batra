function convertToRoman(num) {
    const symbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let romanNumeral = '';

    for (let i = 0; i < symbols.length; i++) {
        while (num >= symbols[i][1]) {
            romanNumeral += symbols[i][0];
            num -= symbols[i][1];
        }

        // Check for subtractive notation
        if (i % 2 === 0 && i < symbols.length - 2) {
            const nextSymbol = symbols[i + 2][0];
            const nextValue = symbols[i + 2][1];

            if (num >= symbols[i][1] - nextValue) {
                romanNumeral += nextSymbol + symbols[i][0];
                num -= symbols[i][1] - nextValue;
            }
        }
    }

    return romanNumeral;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
