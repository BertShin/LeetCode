// Given a string containing just the characters '(', ')', '{', '}', '['
// and ']', determine
// if the input string is valid.

// The brackets must close in the correct order, "()"
// and "()[]{}"
// are all valid but "(]"
// and "([)]"
// are not.


const isValid = (s) => {
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    let stack = [];

    if (pairs[s[0]]) {
        return false;
    } else {
        stack.push(s[0]);
    }

    for (let i = 1; i < s.length; i++) {
        if (!pairs[s[i]]) {
            stack.push(s[i]);
        } else if (pairs[s[i]] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};