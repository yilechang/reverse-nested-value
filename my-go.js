/**
 * Please use TypeScript/JS to answer question
 * Welcome to answer with unit testing code if you can
 *
 * After you finish coding, please push to your GitHub account and share the link with us.
 */

// Please write a function to reverse the following nested input value into output value

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
let reverseValue = (inputValue) => {
  let temp = [],
    count = inputValue,
    output = [];
  while (Object.keys(count).length > 0 && typeof count === "object") {
    temp.push(Object.keys(count)[0]);
    count = count[Object.keys(count)];
  }
  temp.push(count);
  temp = temp.reverse();
  for (let i = temp.length - 2; i >= 0; i--) {
    if (i === temp.length - 2) {
      output.push({ [temp[i]]: temp[i + 1] });
    } else {
      output.push({ [temp[i]]: output[temp.length - 3 - i] });
    }
  }
  output = output.reverse();
  console.log(output[0]);
  return output[0];
};

reverseValue(inputValue);
