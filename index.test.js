const func = require('./my-go.js')

// Input:
let inputValue = {
  hired: {
    be: {
      to: {
        deserve: "I",
      },
    },
  },
};

// Output:
let outputValue = {
  I: {
    deserve: {
      to: {
        be: "hired",
      },
    },
  },
};

test('test sum', () => {
  expect(func.reverseValue(inputValue)).toEqual(outputValue)
})