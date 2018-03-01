// O(n) time, O(n * m) space
const bitLength = (x) => {
    return x.toString(2).length;
};

// O(n)
const reverseNums = (numbers) => {
    let reversedNums = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversedNums.push(numbers[i]);
    }

    return reversedNums.join('');
};

const reverse = (x) => {

    let numbers = x.toString().split('');
    let lastElement = numbers.length;
    let negative = false;
    let answer;


    if (numbers[0] === '-') {
        answer = reverseNums(numbers.slice(1, lastElement));
        answer = parseInt(numbers[0] + answer);
    } else {
        answer = reverseNums(numbers);
        answer = parseInt(answer);
    }

    if (answer < 0) {
        answer = answer * -1;
        negative = true;
    }

    if (bitLength(answer) >= 32) {
        return 0;
    } else {
        if (negative === true) {
            return answer * -1;
        } else {
            return answer;
        }
    }
};