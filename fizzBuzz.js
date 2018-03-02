// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and 
// for the multiples of five output “Buzz”.
// For numbers which are multiples of both three and five output “FizzBuzz”.

const fizzBuzz = (n) => {
    // Output should be an array
    // One appraoch would be to set a counter, starting from 1
        // initiate a while loop that says until the counter hits 'n'
        // we will continue to add the appropriate elements to the array.

    // O(n) space, array data structure utilized
    let fbOutput = [];
    let counter = 1;

    // O(n) time, this loop is dependent on n linear
    // could've also utilized a switch(case) statement here instead of
    // these if statements.
    while (counter <= n) {
        if (counter % 3 === 0 || counter % 5 === 0) {
            fbOutput.push('FizzBuzz');
            counter += 1;
        } else if (counter % 5 === 0) {
            fbOutput.push('Buzz');
            counter += 1;
        } else if (counter % 3 === 0) {
            fbOutput.push('Fizz');
            counter += 1;
        } else {
            fbOutput.push(counter);
            counter += 1;
        }
    }

    return fbOutput;
};